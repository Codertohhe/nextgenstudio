"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 👦 Realistic Kid Character
const Kid = ({
  position,
  shirtColor,
  hairColor,
  pantsColor,
  animation = "stand",
}) => {
  const groupRef = useRef();
  const leftLeg = useRef();
  const rightLeg = useRef();
  const leftArm = useRef();
  const rightArm = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (animation === "swing") {
      leftLeg.current.rotation.x = Math.sin(t * 2) * 0.5;
      rightLeg.current.rotation.x = -Math.sin(t * 2) * 0.5;
    } else if (animation === "wave") {
      rightArm.current.rotation.z = Math.sin(t * 3) * 0.5 - 0.3;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Head */}
      <mesh position={[0, 0.65, 0]} castShadow>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshStandardMaterial color="#FFD4A3" roughness={0.6} />
      </mesh>

      {/* Hair */}
      <mesh position={[0, 0.75, 0]} castShadow>
        <sphereGeometry args={[0.16, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={hairColor} roughness={0.8} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.05, 0.67, 0.14]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>
      <mesh position={[0.05, 0.67, 0.14]}>
        <sphereGeometry args={[0.02, 16, 16]} />
        <meshStandardMaterial color="#000" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.63, 0.15]}>
        <sphereGeometry args={[0.015, 16, 16]} />
        <meshStandardMaterial color="#FFB380" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 0.58, 0.14]} rotation={[0, 0, Math.PI]}>
        <torusGeometry args={[0.04, 0.01, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#FF6B9D" />
      </mesh>

      {/* Body/Torso */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.14, 0.35, 32]} />
        <meshStandardMaterial color={shirtColor} roughness={0.7} />
      </mesh>

      {/* Arms */}
      <group ref={leftArm} position={[-0.18, 0.45, 0]}>
        <mesh position={[0, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.04, 0.2, 8, 16]} />
          <meshStandardMaterial color={shirtColor} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FFD4A3" roughness={0.6} />
        </mesh>
      </group>

      <group ref={rightArm} position={[0.18, 0.45, 0]}>
        <mesh position={[0, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.04, 0.2, 8, 16]} />
          <meshStandardMaterial color={shirtColor} roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.25, 0]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#FFD4A3" roughness={0.6} />
        </mesh>
      </group>

      {/* Legs */}
      <group ref={leftLeg} position={[-0.08, 0.17, 0]}>
        <mesh position={[0, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.05, 0.22, 8, 16]} />
          <meshStandardMaterial color={pantsColor} roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.26, 0.03]} castShadow>
          <boxGeometry args={[0.08, 0.06, 0.12]} />
          <meshStandardMaterial color="#333" roughness={0.9} />
        </mesh>
      </group>

      <group ref={rightLeg} position={[0.08, 0.17, 0]}>
        <mesh position={[0, -0.12, 0]} castShadow>
          <capsuleGeometry args={[0.05, 0.22, 8, 16]} />
          <meshStandardMaterial color={pantsColor} roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.26, 0.03]} castShadow>
          <boxGeometry args={[0.08, 0.06, 0.12]} />
          <meshStandardMaterial color="#333" roughness={0.9} />
        </mesh>
      </group>
    </group>
  );
};

// 🎈 Realistic Hot Air Balloon
const HotAirBalloon = ({ position, colors }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    ref.current.position.y =
      position[1] + Math.sin(t * 0.8 + position[0]) * 0.4;
    ref.current.position.x = position[0] + Math.sin(t * 0.3) * 0.3;
    ref.current.rotation.y = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={ref} position={position}>
      {/* Balloon envelope - segmented */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((segment) => (
        <mesh key={segment} rotation={[0, (segment / 8) * Math.PI * 2, 0]}>
          <sphereGeometry
            args={[
              0.6,
              32,
              32,
              (segment / 8) * Math.PI * 2,
              Math.PI / 4,
              0,
              Math.PI * 0.75,
            ]}
          />
          <meshStandardMaterial
            color={colors[segment % colors.length]}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
      ))}

      {/* Basket - woven texture */}
      <mesh position={[0, -1, 0]} castShadow>
        <cylinderGeometry args={[0.25, 0.22, 0.3, 16]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>

      {/* Basket rim */}
      <mesh position={[0, -0.85, 0]}>
        <torusGeometry args={[0.25, 0.02, 8, 16]} />
        <meshStandardMaterial color="#654321" />
      </mesh>

      {/* Ropes */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const angle = (i / 8) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.sin(angle) * 0.2, -0.5, Math.cos(angle) * 0.2]}
            rotation={[Math.atan2(0.4, 0.5), angle, 0]}
          >
            <cylinderGeometry args={[0.008, 0.008, 1, 8]} />
            <meshStandardMaterial color="#654321" />
          </mesh>
        );
      })}

      {/* Burner */}
      <mesh position={[0, -0.7, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.15, 16]} />
        <meshStandardMaterial color="#C0C0C0" metalness={0.8} roughness={0.2} />
      </mesh>
      <pointLight
        position={[0, -0.7, 0]}
        intensity={0.5}
        color="#ff6600"
        distance={2}
      />
    </group>
  );
};

// 🌳 Realistic Tree
const Tree = ({ position, scale = 1 }) => {
  return (
    <group position={position} scale={scale}>
      {/* Trunk with texture */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.15, 0.2, 1, 16]} />
        <meshStandardMaterial color="#654321" roughness={0.9} />
      </mesh>

      {/* Bark detail */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.151, 0.201, 1.01, 16]} />
        <meshStandardMaterial
          color="#5a3a1a"
          roughness={1}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Leaves - multiple layers */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="#228B22" roughness={0.8} />
      </mesh>
      <mesh position={[0.2, 1.3, 0.1]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#2E8B57" roughness={0.8} />
      </mesh>
      <mesh position={[-0.2, 1.25, -0.1]} castShadow>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial color="#3CB371" roughness={0.8} />
      </mesh>
      <mesh position={[0, 1.5, 0]} castShadow>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#32CD32" roughness={0.8} />
      </mesh>
    </group>
  );
};

// ☁️ Fluffy Cloud
const Cloud = ({ position, scale = 1 }) => {
  const ref = useRef();

  useFrame(({ clock }) => {
    ref.current.position.x =
      position[0] + Math.sin(clock.getElapsedTime() * 0.1) * 0.5;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {[
        [0, 0, 0, 0.5],
        [0.4, 0, 0, 0.4],
        [-0.35, 0, 0, 0.38],
        [0.15, 0.25, 0, 0.42],
        [-0.15, 0.2, 0, 0.35],
        [0, -0.15, 0, 0.4],
      ].map((config, i) => (
        <mesh key={i} position={[config[0], config[1], config[2]]}>
          <sphereGeometry args={[config[3], 32, 32]} />
          <meshStandardMaterial
            color="#ffffff"
            roughness={0.5}
            transparent
            opacity={0.95}
          />
        </mesh>
      ))}
    </group>
  );
};

// 🎢 Realistic Swing Set
const SwingSet = () => {
  const swing1 = useRef();
  const swing2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    swing1.current.rotation.x = Math.sin(t * 1.5) * 0.6;
    swing2.current.rotation.x = Math.sin(t * 1.5 + Math.PI) * 0.5;
  });

  return (
    <group position={[-6, 0, 0]}>
      {/* Main frame - metal poles */}
      <mesh position={[-1.2, 0.9, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.06, 0.08, 1.8, 16]} />
        <meshStandardMaterial color="#4169E1" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[1.2, 0.9, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.06, 0.08, 1.8, 16]} />
        <meshStandardMaterial color="#4169E1" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Crossbar */}
      <mesh position={[0, 1.8, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2.4, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.6} roughness={0.2} />
      </mesh>

      {/* Support bars */}
      <mesh position={[-1.2, 0.9, -0.5]} rotation={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshStandardMaterial color="#4169E1" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[1.2, 0.9, -0.5]} rotation={[0.3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1.2, 16]} />
        <meshStandardMaterial color="#4169E1" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Swing 1 */}
      <group ref={swing1} position={[-0.6, 1.75, 0]}>
        {/* Chains */}
        <mesh position={[-0.15, -0.7, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 1.4, 8]} />
          <meshStandardMaterial
            color="#696969"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.15, -0.7, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 1.4, 8]} />
          <meshStandardMaterial
            color="#696969"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        {/* Seat */}
        <mesh position={[0, -1.4, 0]} castShadow>
          <boxGeometry args={[0.4, 0.08, 0.35]} />
          <meshStandardMaterial color="#DC143C" roughness={0.5} />
        </mesh>

        {/* Kid on swing */}
        <Kid
          position={[0, -1.1, 0]}
          shirtColor="#FF6347"
          hairColor="#8B4513"
          pantsColor="#4169E1"
          animation="swing"
        />
      </group>

      {/* Swing 2 */}
      <group ref={swing2} position={[0.6, 1.75, 0]}>
        <mesh position={[-0.15, -0.7, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 1.4, 8]} />
          <meshStandardMaterial
            color="#696969"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0.15, -0.7, 0]}>
          <cylinderGeometry args={[0.015, 0.015, 1.4, 8]} />
          <meshStandardMaterial
            color="#696969"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>

        <mesh position={[0, -1.4, 0]} castShadow>
          <boxGeometry args={[0.4, 0.08, 0.35]} />
          <meshStandardMaterial color="#1E90FF" roughness={0.5} />
        </mesh>

        <Kid
          position={[0, -1.1, 0]}
          shirtColor="#FF69B4"
          hairColor="#FFD700"
          pantsColor="#9370DB"
          animation="swing"
        />
      </group>
    </group>
  );
};

// 🛝 Realistic Slide
const Slide = () => {
  return (
    <group position={[-2, 0, -3]}>
      {/* Slide platform supports */}
      <mesh position={[-0.6, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.06, 1.4, 16]} />
        <meshStandardMaterial color="#FF6347" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[-0.6, 0.7, 0.5]} castShadow>
        <cylinderGeometry args={[0.05, 0.06, 1.4, 16]} />
        <meshStandardMaterial color="#FF6347" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Ladder steps */}
      {[0.2, 0.5, 0.8, 1.1].map((y, i) => (
        <mesh
          key={i}
          position={[-0.6, y, 0.25]}
          rotation={[0, Math.PI / 2, 0]}
          castShadow
        >
          <cylinderGeometry args={[0.03, 0.03, 0.5, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Platform */}
      <mesh position={[-0.6, 1.4, 0.25]} castShadow>
        <boxGeometry args={[0.7, 0.08, 0.7]} />
        <meshStandardMaterial color="#FF4500" roughness={0.6} />
      </mesh>

      {/* Slide surface */}
      <mesh
        position={[0.5, 0.7, 0.25]}
        rotation={[0, 0, -0.5]}
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2, 0.05, 0.7]} />
        <meshStandardMaterial color="#FFD700" metalness={0.4} roughness={0.2} />
      </mesh>

      {/* Slide walls */}
      <mesh position={[0.5, 0.85, -0.1]} rotation={[0, 0, -0.5]} castShadow>
        <boxGeometry args={[2, 0.25, 0.05]} />
        <meshStandardMaterial color="#FFA500" roughness={0.4} />
      </mesh>
      <mesh position={[0.5, 0.85, 0.6]} rotation={[0, 0, -0.5]} castShadow>
        <boxGeometry args={[2, 0.25, 0.05]} />
        <meshStandardMaterial color="#FFA500" roughness={0.4} />
      </mesh>

      {/* Kid at top */}
      <Kid
        position={[-0.6, 1.9, 0.25]}
        shirtColor="#00CED1"
        hairColor="#000"
        pantsColor="#FF1493"
        animation="wave"
      />
    </group>
  );
};

// 🎠 Realistic Merry-Go-Round
const MerryGoRound = () => {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.015;
  });

  return (
    <group position={[2, 0, 1]}>
      <group ref={ref}>
        {/* Base platform */}
        <mesh position={[0, 0.12, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[1.2, 1.2, 0.24, 32]} />
          <meshStandardMaterial
            color="#FF1493"
            metalness={0.3}
            roughness={0.4}
          />
        </mesh>

        {/* Platform edge */}
        <mesh position={[0, 0.24, 0]}>
          <torusGeometry args={[1.2, 0.05, 16, 32]} />
          <meshStandardMaterial
            color="#C71585"
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>

        {/* Center pole */}
        <mesh position={[0, 0.7, 0]} castShadow>
          <cylinderGeometry args={[0.08, 0.1, 1.2, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>

        {/* Top cap */}
        <mesh position={[0, 1.3, 0]} castShadow>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>

        {/* Handles and Kids */}
        {[0, 1, 2, 3].map((i) => {
          const angle = (i / 4) * Math.PI * 2;
          const x = Math.cos(angle) * 0.8;
          const z = Math.sin(angle) * 0.8;

          return (
            <group key={i}>
              {/* Handle */}
              <mesh position={[x, 0.65, z]} rotation={[0, angle, 0]} castShadow>
                <cylinderGeometry args={[0.03, 0.03, 0.8, 16]} />
                <meshStandardMaterial
                  color="#00CED1"
                  metalness={0.5}
                  roughness={0.3}
                />
              </mesh>

              {/* Kid */}
              <Kid
                position={[x, 0.5, z]}
                shirtColor={`hsl(${i * 90}, 80%, 60%)`}
                hairColor={i % 2 === 0 ? "#8B4513" : "#000"}
                pantsColor={`hsl(${i * 90 + 45}, 70%, 50%)`}
                animation="wave"
              />
            </group>
          );
        })}
      </group>
    </group>
  );
};

// 🏰 Realistic Climbing Frame
const ClimbingFrame = () => {
  return (
    <group position={[6, 0, -1]}>
      {/* A-frame legs */}
      <mesh position={[-1, 0.9, 0]} rotation={[0, 0, 0.4]} castShadow>
        <cylinderGeometry args={[0.06, 0.08, 2.2, 16]} />
        <meshStandardMaterial color="#32CD32" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[1, 0.9, 0]} rotation={[0, 0, -0.4]} castShadow>
        <cylinderGeometry args={[0.06, 0.08, 2.2, 16]} />
        <meshStandardMaterial color="#32CD32" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Back supports */}
      <mesh position={[-1, 0.9, -0.6]} rotation={[0.3, 0, 0.4]} castShadow>
        <cylinderGeometry args={[0.05, 0.06, 1.5, 16]} />
        <meshStandardMaterial color="#32CD32" metalness={0.3} roughness={0.5} />
      </mesh>
      <mesh position={[1, 0.9, -0.6]} rotation={[0.3, 0, -0.4]} castShadow>
        <cylinderGeometry args={[0.05, 0.06, 1.5, 16]} />
        <meshStandardMaterial color="#32CD32" metalness={0.3} roughness={0.5} />
      </mesh>

      {/* Crossbar */}
      <mesh position={[0, 1.7, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2, 16]} />
        <meshStandardMaterial color="#FFD700" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* Platform */}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.4, 0.08, 1]} />
        <meshStandardMaterial color="#FF6347" roughness={0.6} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 2.1, 0]} rotation={[0, 0, 0]} castShadow>
        <coneGeometry args={[0.9, 0.7, 4]} />
        <meshStandardMaterial color="#FF8C00" roughness={0.5} />
      </mesh>

      {/* Kids */}
      <Kid
        position={[-0.4, 1.6, 0]}
        shirtColor="#9370DB"
        hairColor="#8B4513"
        pantsColor="#4169E1"
        animation="wave"
      />
      <Kid
        position={[0.4, 0.4, 0.3]}
        shirtColor="#FF69B4"
        hairColor="#FFD700"
        pantsColor="#32CD32"
      />
    </group>
  );
};

// 🪣 Realistic Sandbox
const Sandbox = () => {
  return (
    <group position={[4, 0, 3]}>
      {/* Wooden frame */}
      <mesh position={[0, 0.08, 0.8]} castShadow>
        <boxGeometry args={[2, 0.16, 0.12]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>
      <mesh position={[0, 0.08, -0.8]} castShadow>
        <boxGeometry args={[2, 0.16, 0.12]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>
      <mesh position={[1, 0.08, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[1.6, 0.16, 0.12]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>
      <mesh position={[-1, 0.08, 0]} rotation={[0, Math.PI / 2, 0]} castShadow>
        <boxGeometry args={[1.6, 0.16, 0.12]} />
        <meshStandardMaterial color="#8B4513" roughness={0.9} />
      </mesh>

      {/* Sand */}
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[1.9, 0.1, 1.5]} />
        <meshStandardMaterial color="#F4A460" roughness={1} />
      </mesh>

      {/* Kids playing */}
      <Kid
        position={[-0.4, 0.35, 0]}
        shirtColor="#FFD700"
        hairColor="#000"
        pantsColor="#FF6347"
      />
      <Kid
        position={[0.4, 0.35, 0.2]}
        shirtColor="#00CED1"
        hairColor="#8B4513"
        pantsColor="#9370DB"
      />

      {/* Toys */}
      <mesh position={[0, 0.25, -0.4]} castShadow>
        <cylinderGeometry args={[0.1, 0.08, 0.2, 16]} />
        <meshStandardMaterial color="#FF6347" roughness={0.5} />
      </mesh>
      <mesh position={[0.3, 0.18, 0.4]} castShadow>
        <boxGeometry args={[0.12, 0.12, 0.12]} />
        <meshStandardMaterial color="#FFD700" roughness={0.5} />
      </mesh>
    </group>
  );
};

// Main Scene
const SceneContent = () => {
  return (
    <>
      {/* Sky */}
      <color attach="background" args={["#87CEEB"]} />
      <fog attach="fog" args={["#87CEEB", 15, 40]} />

      {/* Ground - realistic grass */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial color="#7CFC00" roughness={0.9} />
      </mesh>

      {/* Subtle ground texture */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[60, 60]} />
        <meshStandardMaterial
          color="#6FB520"
          roughness={1}
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Lighting - realistic sun */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[15, 20, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
      />
      <hemisphereLight args={["#87CEEB", "#7CFC00", 0.4]} />

      {/* Hot Air Balloons */}
      <HotAirBalloon
        position={[-10, 6, -8]}
        colors={["#FFD700", "#FF8C00", "#FFD700"]}
      />
      <HotAirBalloon
        position={[2, 7, -10]}
        colors={["#FF69B4", "#FF1493", "#FF69B4"]}
      />
      <HotAirBalloon
        position={[10, 6.5, -9]}
        colors={["#87CEEB", "#4169E1", "#87CEEB"]}
      />

      {/* Clouds */}
      <Cloud position={[-12, 5, -12]} scale={1.2} />
      <Cloud position={[-6, 6, -15]} scale={1} />
      <Cloud position={[12, 5.5, -14]} scale={1.3} />
      <Cloud position={[6, 6.5, -16]} scale={1.1} />
      <Cloud position={[0, 7, -18]} scale={1.4} />

      {/* Trees */}
      <Tree position={[-10, 0, 3]} scale={1.2} />
      <Tree position={[-9, 0, -2]} scale={1} />
      <Tree position={[10, 0, 2]} scale={1.3} />
      <Tree position={[9, 0, -3]} scale={1.1} />
      <Tree position={[0, 0, -7]} scale={1} />
      <Tree position={[-12, 0, -4]} scale={0.9} />
      <Tree position={[11, 0, -5]} scale={1.1} />

      {/* Playground Equipment */}
      <SwingSet />
      <Slide />
      <MerryGoRound />
      <ClimbingFrame />
      <Sandbox />

      {/* Extra kids playing */}
      <Kid
        position={[-8, 0.35, 2]}
        shirtColor="#FF6347"
        hairColor="#8B4513"
        pantsColor="#4169E1"
        animation="wave"
      />
      <Kid
        position={[8, 0.35, 4]}
        shirtColor="#9370DB"
        hairColor="#FFD700"
        pantsColor="#FF69B4"
      />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div className="h-[700px] w-full">
      <Canvas camera={{ position: [0, 6, 18], fov: 60 }} shadows>
        <SceneContent />
        <OrbitControls
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2.1}
          minDistance={10}
          maxDistance={30}
          target={[0, 1, 0]}
        />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
