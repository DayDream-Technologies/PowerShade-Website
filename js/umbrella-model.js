// Three.js scene setup for PowerShade umbrella model
document.addEventListener('DOMContentLoaded', function() {
    // Get the container element
    const container = document.getElementById('umbrella-model-container');
    
    // Create scene, camera, and renderer
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);
    
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add orbit controls for interaction
    const controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 3;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI / 2;
    
    // Create a simple umbrella model (placeholder until we have a real model)
    createUmbrellaModel();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize, false);
    
    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }
    
    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }
    
    // Start animation
    animate();
    
    // Function to create a simple umbrella model
    function createUmbrellaModel() {
        // Create umbrella pole
        const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 3, 16);
        const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.y = -1.5;
        scene.add(pole);
        
        // Create umbrella canopy
        const canopyGeometry = new THREE.ConeGeometry(1.5, 0.5, 16);
        const canopyMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x0066cc,
            side: THREE.DoubleSide
        });
        const canopy = new THREE.Mesh(canopyGeometry, canopyMaterial);
        canopy.position.y = 1;
        canopy.rotation.x = Math.PI;
        scene.add(canopy);
        
        // Create solar panels on the canopy
        const panelGeometry = new THREE.BoxGeometry(0.3, 0.01, 0.3);
        const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        
        // Add multiple solar panels
        for (let i = 0; i < 8; i++) {
            const panel = new THREE.Mesh(panelGeometry, panelMaterial);
            const angle = (i / 8) * Math.PI * 2;
            const radius = 1.2;
            
            panel.position.x = Math.cos(angle) * radius;
            panel.position.z = Math.sin(angle) * radius;
            panel.position.y = 1.1;
            
            panel.rotation.y = -angle;
            panel.rotation.x = Math.PI / 2;
            
            scene.add(panel);
        }
        
        // Add USB ports to the pole
        const portGeometry = new THREE.BoxGeometry(0.1, 0.05, 0.05);
        const portMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        
        const port1 = new THREE.Mesh(portGeometry, portMaterial);
        port1.position.set(0.1, 0, 0);
        port1.rotation.z = Math.PI / 2;
        pole.add(port1);
        
        const port2 = new THREE.Mesh(portGeometry, portMaterial);
        port2.position.set(-0.1, 0, 0);
        port2.rotation.z = Math.PI / 2;
        pole.add(port2);
        
        // Add a base for the umbrella
        const baseGeometry = new THREE.CylinderGeometry(0.2, 0.3, 0.1, 16);
        const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const base = new THREE.Mesh(baseGeometry, baseMaterial);
        base.position.y = -1.6;
        scene.add(base);
    }
    
    // Remove loading message when model is ready
    const loadingElement = document.querySelector('.model-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}); 