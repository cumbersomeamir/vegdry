"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { motion } from "framer-motion";

function ParticleGlobe(props) {
  const ref = useRef();
  // Use useMemo to ensure sphere data is calculated once and stable
  // The error comes from NaN values in position attributes, often caused by
  // creating Float32Arrays and passing them directly without proper initialization or checks
  // maath should handle this, but ensuring it's memoized prevents re-calc issues.
  const sphere = useMemo(() => {
    const data = random.inSphere(new Float32Array(5000 * 3), { radius: 1.5 });
    // Validate data to ensure no NaN
    for (let i = 0; i < data.length; i++) {
      if (isNaN(data[i])) data[i] = 0;
    }
    return data;
  }, []);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f97316"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function ConnectingLines() {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.1;
    }
  });

  return (
    <group ref={ref}>
       <mesh>
         <icosahedronGeometry args={[1.5, 1]} />
         <meshBasicMaterial wireframe color="#fdba74" transparent opacity={0.1} />
       </mesh>
    </group>
  )
}

export default function MissionSection() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] md:h-[80vh] w-full bg-[#0f172a] overflow-hidden flex items-center justify-center py-12 sm:py-16 md:py-0">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ParticleGlobe />
          <ConnectingLines />
          <Float speed={2} rotationIntensity={1} floatIntensity={1}>
             <pointLight position={[2, 2, 2]} intensity={2} color="#f97316" />
          </Float>
        </Canvas>
      </div>

      {/* Gradient Overlays for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-[#0f172a] z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/80 via-transparent to-[#0f172a]/80 z-10 pointer-events-none" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-6 sm:mb-8 backdrop-blur-md">
            Our North Star
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-8 sm:mb-10 md:mb-12 leading-tight drop-shadow-2xl px-2">
            Eliminate Waste. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-primary">
              Democratize Nutrition.
            </span>
          </h2>

          <div className="relative inline-block max-w-full px-4">
             <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-orange-600/20 to-purple-600/20 blur-xl rounded-full"></div>
             <p className="relative text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-4xl mx-auto leading-relaxed font-light text-gray-300 italic bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-white/10">
               "We are building the world's most efficient dehydration supply chain to ensure that every harvest reaches a plate, not a landfill."
             </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
