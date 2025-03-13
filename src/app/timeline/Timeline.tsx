"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { Fbx, Line, MapControls, Text } from "@react-three/drei";
import { MapControls as MapControlsImpl } from "three-stdlib";
import timelineEvents from "./timelineData.json";

export function Timeline() {
  const mapControlsRef = useRef<MapControlsImpl>(null);
  const [timelineIndex, setTimelineIndex] = useState(0);
  const timelineEvent = timelineEvents[timelineIndex];
  const timelinePosition = useRef<[number, number, number]>([0, 0, 0]);
  return (
    <div className="relative size-full">
      <Canvas>
        <MapControls
          enableRotate
          // screenSpacePanning
          onUpdate={(controls) => {
            mapControlsRef.current = controls;
            controls.setPolarAngle((Math.PI * 3) / 4);
          }}
          onChange={() => {
            mapControlsRef.current?.target.setY(0);
            mapControlsRef.current?.target.setZ(0);
          }}
        />
        <ambientLight intensity={0.8} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <group position={timelinePosition.current}>
          <Line
            points={[
              [0, 0, 0],
              [50, 0, 0],
            ]}
            color="lightblue"
            lineWidth={5}
            segments
          />
          <Box position={[0, 0, 0]} />
          <Text
            color="gray"
            anchorX="center"
            anchorY="top"
            position={[0, -1, 0]}
            fontSize={0.3}
          >
            {timelineEvent.date}
          </Text>
          <group position={[0, 1, -6]} scale={[0.01, 0.01, 0.01]}>
            <Fbx
              path={
                "/models/endurance-ship-low-poly/source/Endurance_LowPoly.fbx"
              }
              rotation={[0, 0, (Math.PI * 3) / 2]}
            />
          </group>
        </group>
      </Canvas>
      <div className="absolute top-0 left-0 size-full flex overflow-hidden pointer-events-none">
        {timelineIndex > 0 && (
          <Button
            className="my-auto mr-auto"
            onClick={() => setTimelineIndex((prev) => prev - 1)}
          >
            ⬅
          </Button>
        )}
        <Button
          className="my-auto ml-auto"
          onClick={() => setTimelineIndex((prev) => prev + 1)}
        >
          ➡
        </Button>
      </div>
    </div>
  );
}

function Box({ position }: { position: [number, number, number] }) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta;
  });
  return (
    <mesh
      position={position}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
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
