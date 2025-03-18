"use client";
import { useFrame } from "@react-three/fiber";
import { memo, useRef, useState } from "react";
import { Mesh } from "three";
import { Line, Text } from "@react-three/drei";

export type TimelineEvent = {
  date: string;
  description: string;
  daysSinceStart: number;
};

export const TimelineEvent = memo(function TimelineEvent({
  timelineEvent,
  isActive,
}: {
  timelineEvent: TimelineEvent;
  isActive: boolean;
}) {
  const { daysSinceStart, date, description } = timelineEvent;
  const tick = (
    <Line
      points={[
        [0, -0.1, 0],
        [0, 0.1, 0],
      ]}
      color="lightblue"
      lineWidth={5}
      segments
    />
  );

  if (!isActive)
    return <group position={[daysSinceStart / 10, 0, 0]}>{tick}</group>;
  return (
    <group position={[daysSinceStart / 10, 0, 0]}>
      {tick}
      <Box position={[0, -0.5, 0]} />
      <Text
        color="gray"
        anchorX="center"
        anchorY="top"
        position={[0, -1, 0]}
        fontSize={0.4}
        fontWeight={"bold"}
      >
        {date}
      </Text>
      <Text
        color="gray"
        anchorX="center"
        anchorY="top"
        position={[0, -1.8, 0]}
        fontSize={0.3}
      >
        {description}
      </Text>
    </group>
  );
});

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
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}
