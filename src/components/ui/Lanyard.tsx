/* eslint-disable react/no-unknown-property */
import React, { useEffect, useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { useTexture, Environment, Lightformer, PerspectiveCamera, RoundedBox } from '@react-three/drei';
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier';
import { MeshLineGeometry, MeshLineMaterial } from 'meshline';
import * as THREE from 'three';

import sonyLogo from '../../assets/sony.png';
import './Lanyard.css';

extend({ MeshLineGeometry, MeshLineMaterial });

export default function Lanyard({ position = [0, 0, 20], gravity = [0, -40, 0], fov = 20, transparent = true }) {
  return (
    <div className="lanyard-wrapper">
      <Canvas
        dpr={[1, 2]}
        gl={{ alpha: transparent, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(new THREE.Color(0x000000), transparent ? 0 : 1)}
      >
        <PerspectiveCamera makeDefault position={position as any} fov={fov} />
        <Suspense fallback={null}>
          <ambientLight intensity={Math.PI} />
          <Physics gravity={gravity as any} interpolate={true}>
            <Band />
          </Physics>
          <Environment blur={0.75}>
            <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
            <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
          </Environment>
        </Suspense>
      </Canvas>
    </div>
  );
}

function Band() {
  const band = useRef<any>();
  const fixed = useRef<any>();
  const j1 = useRef<any>();
  const j2 = useRef<any>();
  const j3 = useRef<any>();
  const card = useRef<any>();

  const vec = new THREE.Vector3();
  const dir = new THREE.Vector3();
  const segmentProps: any = { 
    type: 'dynamic', 
    canSleep: false, 
    colliders: false, 
    angularDamping: 2, 
    linearDamping: 2 
  };

  const texture = useTexture(sonyLogo);
  
  const strapTexture = useMemo(() => {
    if (!texture) return null;
    const t = texture.clone();
    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(4, 1);
    return t;
  }, [texture]);

  const [dragged, drag] = useState<any>(false);
  const [hovered, hover] = useState(false);

  // 5 points for absolute connectivity: Anchor -> Seg1 -> Seg2 -> Seg3 -> Card Hook
  const curve = useMemo(() => new THREE.CatmullRomCurve3([
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3(), 
    new THREE.Vector3(),
    new THREE.Vector3()
  ]), []);

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
  // Joint at exactly Y:1.2 to match hardware clip position
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.2, 0]]);

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab';
      return () => { document.body.style.cursor = 'auto' };
    }
  }, [hovered, dragged]);

  useFrame((state) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
      dir.copy(vec).sub(state.camera.position).normalize();
      vec.add(dir.multiplyScalar(state.camera.position.length()));
      card.current?.setNextKinematicTranslation({ 
        x: vec.x - dragged.x, 
        y: vec.y - dragged.y, 
        z: vec.z - dragged.z 
      });
    }

    if (fixed.current && j1.current && j2.current && j3.current && card.current && band.current) {
      curve.points[0].copy(fixed.current.translation());
      curve.points[1].copy(j1.current.translation());
      curve.points[2].copy(j2.current.translation());
      curve.points[3].copy(j3.current.translation());
      
      // Calculate world position of the card's hook (offset Y:1.2)
      const cardPos = card.current.translation();
      const cardRot = card.current.rotation();
      vec.set(0, 1.2, 0).applyQuaternion(cardRot).add(cardPos);
      curve.points[4].copy(vec);
      
      band.current.geometry.setPoints(curve.getPoints(32));
    }
  });

  return (
    <>
      <group position={[0, 4, 0]}>
        <RigidBody ref={fixed} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody 
          position={[2, 0, 0]} 
          ref={card} 
          {...segmentProps} 
          type={dragged ? 'kinematicPosition' : 'dynamic'}
        >
          <CuboidCollider args={[0.8, 1.2, 0.05]} />
          <group
            scale={1}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={e => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={e => {
              e.target.setPointerCapture(e.pointerId);
              drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())));
            }}
          >
            {/* The 3D Card Body */}
            <RoundedBox args={[1.6, 2.4, 0.1]} radius={0.15} smoothness={4}>
              <meshPhysicalMaterial color="#000000" roughness={0.1} metalness={0.5} clearcoat={1} />
            </RoundedBox>
            
            {/* Logo Layer */}
            <mesh position={[0, 0, 0.051]}>
               <planeGeometry args={[1.2, 0.6]} />
               <meshBasicMaterial map={texture} transparent={true} alphaTest={0.5} />
            </mesh>
          </group>
        </RigidBody>
      </group>

      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial
          color="#111111"
          depthTest={true}
          resolution={[1000, 1000]}
          useMap={!!strapTexture}
          map={strapTexture}
          repeat={[-4, 1]}
          lineWidth={1.0}
        />
      </mesh>
    </>
  );
}
