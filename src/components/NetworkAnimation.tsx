
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const NetworkAnimation: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create nodes (spheres)
    const nodeGeometry = new THREE.SphereGeometry(0.12, 16, 16);
    const nodes: THREE.Mesh[] = [];
    const nodePositions: THREE.Vector3[] = [];
    const nodeCount = 25;

    // Create materials with different cyber colors
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0x05D9E8 }),
      new THREE.MeshBasicMaterial({ color: 0x01FFC3 }),
      new THREE.MeshBasicMaterial({ color: 0x6C63FF })
    ];

    // Create random nodes and position them
    for (let i = 0; i < nodeCount; i++) {
      const material = materials[Math.floor(Math.random() * materials.length)];
      const node = new THREE.Mesh(nodeGeometry, material);
      
      // Random position within a sphere
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 2.5 + Math.random() * 1.5;
      
      node.position.x = radius * Math.sin(phi) * Math.cos(theta);
      node.position.y = radius * Math.sin(phi) * Math.sin(theta);
      node.position.z = radius * Math.cos(phi);
      
      nodePositions.push(node.position.clone());
      nodes.push(node);
      scene.add(node);
    }

    // Connect nearby nodes with lines
    const linesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x05D9E8, 
      transparent: true,
      opacity: 0.3
    });
    
    const connectDistance = 1.5;
    const connections: THREE.Line[] = [];

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (nodePositions[i].distanceTo(nodePositions[j]) < connectDistance) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            nodePositions[i],
            nodePositions[j]
          ]);
          const line = new THREE.Line(geometry, linesMaterial);
          connections.push(line);
          scene.add(line);
        }
      }
    }

    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);

    // Position camera
    camera.position.z = 5;

    // Animation
    let frame = 0;
    const animate = () => {
      frame += 0.005;
      
      // Rotate nodes
      nodes.forEach((node, i) => {
        const time = frame + i * 0.1;
        node.position.x = nodePositions[i].x + Math.sin(time) * 0.1;
        node.position.y = nodePositions[i].y + Math.cos(time) * 0.1;
        node.position.z = nodePositions[i].z + Math.sin(time + 1) * 0.1;
      });
      
      // Update connections
      connections.forEach((line, index) => {
        const positions = line.geometry.attributes.position.array;
        const i = Math.floor(index / (nodeCount - 1));
        const j = index % (nodeCount - 1) + i + 1;
        
        if (i < nodeCount && j < nodeCount) {
          positions[0] = nodes[i].position.x;
          positions[1] = nodes[i].position.y;
          positions[2] = nodes[i].position.z;
          positions[3] = nodes[j].position.x;
          positions[4] = nodes[j].position.y;
          positions[5] = nodes[j].position.z;
          line.geometry.attributes.position.needsUpdate = true;
        }
      });

      // Rotate entire scene slightly
      scene.rotation.y = Math.sin(frame * 0.3) * 0.1;
      scene.rotation.x = Math.cos(frame * 0.2) * 0.05;
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!mountRef.current) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose geometries and materials
      nodeGeometry.dispose();
      materials.forEach(material => material.dispose());
      linesMaterial.dispose();
      
      connections.forEach(line => {
        line.geometry.dispose();
        scene.remove(line);
      });
      
      nodes.forEach(node => {
        scene.remove(node);
      });
    };
  }, []);

  return <div ref={mountRef} className="h-full w-full absolute top-0 left-0 -z-10" />;
};

export default NetworkAnimation;
