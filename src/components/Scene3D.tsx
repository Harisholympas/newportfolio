import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  className?: string;
}

export const Scene3D = ({ className }: Scene3DProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x0a0a0a, 1, 20);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.4);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0x8a2be2, 1);
    directionalLight.position.set(1, 1, 1);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight1 = new THREE.PointLight(0x00bfff, 0.8, 10);
    pointLight1.position.set(-5, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff1493, 0.6, 8);
    pointLight2.position.set(3, -2, 1);
    scene.add(pointLight2);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.SphereGeometry(0.3, 16, 16),
      new THREE.OctahedronGeometry(0.4),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.3),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ 
        color: 0x8a2be2, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x00bfff, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xff1493, 
        transparent: true, 
        opacity: 0.6,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0x00ff7f, 
        transparent: true, 
        opacity: 0.8,
        shininess: 100
      }),
      new THREE.MeshPhongMaterial({ 
        color: 0xffa500, 
        transparent: true, 
        opacity: 0.7,
        shininess: 100
      }),
    ];

    const meshes: THREE.Mesh[] = [];
    const floatSpeeds: number[] = [];
    const rotationSpeeds: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);
      
      mesh.position.set(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 4
      );
      
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      
      scene.add(mesh);
      meshes.push(mesh);
      floatSpeeds.push(Math.random() * 0.02 + 0.01);
      rotationSpeeds.push({
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      });
    }

    // Enhanced particle system for neural network effect
    const particleCount = 300;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleVelocities: THREE.Vector3[] = [];
    const particleConnections: { start: number; end: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      
      particleVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ));
    }

    // Create random connections between particles
    for (let i = 0; i < 150; i++) {
      particleConnections.push({
        start: Math.floor(Math.random() * particleCount),
        end: Math.floor(Math.random() * particleCount)
      });
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x8a2be2,
      size: 0.08,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Create connecting lines for neural network effect
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(particleConnections.length * 6);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4444ff,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Animation loop
    const animate = (time: number) => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Animate meshes
      meshes.forEach((mesh, index) => {
        mesh.rotation.x += rotationSpeeds[index].x;
        mesh.rotation.y += rotationSpeeds[index].y;
        mesh.rotation.z += rotationSpeeds[index].z;
        
        mesh.position.y += Math.sin(time * 0.001 + index) * floatSpeeds[index];
      });

      // Animate particles
      const positions = particleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] += particleVelocities[i].x;
        positions[i * 3 + 1] += particleVelocities[i].y;
        positions[i * 3 + 2] += particleVelocities[i].z;

        // Boundary checking with smoother transitions
        if (positions[i * 3] > 12) particleVelocities[i].x *= -0.8;
        if (positions[i * 3] < -12) particleVelocities[i].x *= -0.8;
        if (positions[i * 3 + 1] > 12) particleVelocities[i].y *= -0.8;
        if (positions[i * 3 + 1] < -12) particleVelocities[i].y *= -0.8;
        if (positions[i * 3 + 2] > 12) particleVelocities[i].z *= -0.8;
        if (positions[i * 3 + 2] < -12) particleVelocities[i].z *= -0.8;
      }
      particleGeometry.attributes.position.needsUpdate = true;

      // Update neural network connections
      const linePositions = lineGeometry.attributes.position.array as Float32Array;
      particleConnections.forEach((connection, index) => {
        const startIndex = connection.start * 3;
        const endIndex = connection.end * 3;
        
        linePositions[index * 6] = positions[startIndex];
        linePositions[index * 6 + 1] = positions[startIndex + 1];
        linePositions[index * 6 + 2] = positions[startIndex + 2];
        linePositions[index * 6 + 3] = positions[endIndex];
        linePositions[index * 6 + 4] = positions[endIndex + 1];
        linePositions[index * 6 + 5] = positions[endIndex + 2];
      });
      lineGeometry.attributes.position.needsUpdate = true;

      // Animate lights
      pointLight1.position.x = Math.sin(time * 0.001) * 3;
      pointLight2.position.x = Math.cos(time * 0.001) * 3;

      renderer.render(scene, camera);
    };

    animate(0);

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={className} />;
};