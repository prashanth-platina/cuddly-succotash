import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations, OrbitControls, Stage, Html, useProgress } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';

function CraneModel(props) {
  const { scene, animations } = useGLTF('/crane_fixed.glb');
  // Attach animations directly to the loaded scene rather than a wrapper group
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play the idle animation explicitly
    if (actions && actions['Crane_Skelmesh|AA_Crane_Idle']) {
      actions['Crane_Skelmesh|AA_Crane_Idle'].reset().fadeIn(0.5).play();
    } else if (actions) {
      // Fallback if the name changes
      const actionNames = Object.keys(actions);
      if (actionNames.length > 0) {
        actions[actionNames[0]].reset().fadeIn(0.5).play();
      }
    }
    return () => {
      if (actions) {
        Object.values(actions).forEach((action) => action?.stop());
      }
    };
  }, [actions]);

  return <primitive object={scene} {...props} />;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ color: '#1a1a1a', fontWeight: 'bold', fontSize: '1.2rem', whiteSpace: 'nowrap' }}>
        Loading Model {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

export default function CatScene() {
  return (
    <div className="hero-3d" id="hero3d">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', touchAction: 'pan-y' }}
      >
        <Suspense fallback={<Loader />}>
          {/* Increased shadow scale to 20 to prevent it from clipping at the bottom */}
          <Stage environment="city" intensity={1} adjustCamera={1.05} shadows={{ type: 'contact', scale: 20, blur: 2, opacity: 0.5 }}>
            <CraneModel />
          </Stage>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload('/crane_fixed.glb');
