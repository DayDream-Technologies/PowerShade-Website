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
    
    // Create a standard umbrella model
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
    
    // Function to create a standard umbrella model
    function createUmbrellaModel() {
        // Create umbrella pole
        const poleGeometry = new THREE.CylinderGeometry(0.05, 0.05, 3, 16);
        const poleMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        const pole = new THREE.Mesh(poleGeometry, poleMaterial);
        pole.position.y = -1.5;
        scene.add(pole);
        
        // Create umbrella canopy (more standard shape)
        const canopyGeometry = new THREE.ConeGeometry(1.5, 0.8, 16);
        const canopyMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x0066cc,
            side: THREE.DoubleSide
        });
        const canopy = new THREE.Mesh(canopyGeometry, canopyMaterial);
        canopy.position.y = 1.2;
        canopy.rotation.x = Math.PI;
        scene.add(canopy);
        
        // Create umbrella ribs
        const ribGeometry = new THREE.CylinderGeometry(0.01, 0.01, 1.5, 8);
        const ribMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        
        for (let i = 0; i < 8; i++) {
            const rib = new THREE.Mesh(ribGeometry, ribMaterial);
            const angle = (i / 8) * Math.PI * 2;
            
            rib.position.x = Math.cos(angle) * 0.75;
            rib.position.z = Math.sin(angle) * 0.75;
            rib.position.y = 0.8;
            
            rib.rotation.z = Math.PI / 2;
            rib.rotation.y = -angle;
            
            scene.add(rib);
        }
        
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
            panel.position.y = 1.3;
            
            panel.rotation.y = -angle;
            panel.rotation.x = Math.PI / 2;
            
            scene.add(panel);
        }
        
        // Add USB ports to the pole (halfway up)
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
        
        // Add PowerShade logo to the canopy
        createLogo();
    }
    
    // Function to create the PowerShade logo
    function createLogo() {
        // Create a simple text geometry for the logo
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 256;
        canvas.height = 256;
        
        // Draw the logo background
        context.fillStyle = '#0066cc';
        context.fillRect(0, 0, 256, 256);
        
        // Draw the text
        context.fillStyle = '#ffffff';
        context.font = 'bold 48px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('PowerShade', 128, 128);
        
        // Create a texture from the canvas
        const texture = new THREE.CanvasTexture(canvas);
        
        // Create a plane for the logo
        const logoGeometry = new THREE.PlaneGeometry(1, 0.5);
        const logoMaterial = new THREE.MeshBasicMaterial({ 
            map: texture,
            side: THREE.DoubleSide
        });
        
        const logo = new THREE.Mesh(logoGeometry, logoMaterial);
        logo.position.set(0, 1.5, 0);
        logo.rotation.x = Math.PI / 2;
        scene.add(logo);
    }
    
    // Remove loading message when model is ready
    const loadingElement = document.querySelector('.model-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}); 