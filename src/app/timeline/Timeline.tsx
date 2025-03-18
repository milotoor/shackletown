"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Fbx, Float, Line, MapControls } from "@react-three/drei";
import { MapControls as MapControlsImpl } from "three-stdlib";
import { timelineEvents } from "./timelineEvents";
import { TimelineEvent } from "@/app/timeline/TimelineEvent";
import { MotionValue, useSpring } from "motion/react";
import { Mesh } from "three";

export function Timeline() {
  const mapControlsRef = useRef<MapControlsImpl>(null);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const timelinePosition = useSpring(0, { stiffness: 10, damping: 10 });

  useEffect(() => {
    timelinePosition.set(-timelineEvents[timelineIndex].daysSinceStart / 10);
  }, [timelineIndex, timelinePosition]);

  return (
    <div className="relative size-full">
      <Canvas>
        <MapControls
          enableRotate={false}
          onUpdate={(controls) => {
            mapControlsRef.current = controls;
            controls.setPolarAngle((Math.PI * 3) / 4);
          }}
          onChange={() => {
            mapControlsRef.current?.target.setX(0);
            mapControlsRef.current?.target.setY(0);
            mapControlsRef.current?.target.setZ(0);
          }}
        />
        <ambientLight intensity={0.8} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <TimelineLine
          timelineIndex={timelineIndex}
          timelinePosition={timelinePosition}
        />
        <group position={[0, 1, -6]} scale={[0.01, 0.01, 0.01]}>
          <EnduranceShip />
        </group>
      </Canvas>
      <div className="absolute top-0 left-0 size-full flex overflow-hidden pointer-events-none">
        {timelineIndex > 0 && (
          <Button
            className="mb-auto mr-auto"
            onClick={() => setTimelineIndex((prev) => prev - 1)}
          >
            ⬅
          </Button>
        )}
        {timelineIndex < timelineEvents.length - 1 && (
          <Button
            className="mb-auto ml-auto"
            onClick={() => setTimelineIndex((prev) => prev + 1)}
          >
            ➡
          </Button>
        )}
      </div>
    </div>
  );
}

const Button = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <button
      className={`bg-transparent pointer-events-auto hover:scale-150 text-white hover:text-blue-400 font-bold py-2 px-4 rounded text-5xl transition-all ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const EnduranceShip = () => {
  const ship = useRef<Mesh>(null);

  return (
    <group ref={ship}>
      <Float speed={8} rotationIntensity={0.05} floatIntensity={0}>
        <Fbx
          path={"/models/endurance-ship-low-poly/source/Endurance_LowPoly.fbx"}
          rotation={[0, 0, (Math.PI * 3) / 2]}
        />
      </Float>
    </group>
  );
};

const TimelineLine = ({
  timelineIndex,
  timelinePosition,
}: {
  timelineIndex: number;
  timelinePosition: MotionValue<number>;
}) => {
  const timeline = useRef<Mesh>(null);
  useFrame(() => {
    timeline.current?.position.setX(timelinePosition.get());
  });

  return (
    <group ref={timeline} position-x={timelinePosition.get()}>
      <Line
        points={[
          [0, 0, 0],
          [61.9, 0, 0],
        ]}
        color="lightblue"
        lineWidth={5}
        segments
      />
      {timelineEvents.map((event, index) => (
        <TimelineEvent
          key={index}
          timelineEvent={event}
          isActive={timelineIndex === index}
        />
      ))}
    </group>
  );
};
