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
        
        // Create umbrella canopy (more realistic curved shape)
        // Use a more complex geometry for a curved canopy
        const canopyGeometry = new THREE.ConeGeometry(1.5, 0.8, 32, 1, true);
        const canopyMaterial = new THREE.MeshStandardMaterial({ 
            color: 0x0066cc,
            side: THREE.DoubleSide
        });
        const canopy = new THREE.Mesh(canopyGeometry, canopyMaterial);
        // Keep the canopy at the current height
        canopy.position.y = 0.4;
        scene.add(canopy);
        
        // Create umbrella ribs - add more ribs for a more realistic look
        const ribGeometry = new THREE.CylinderGeometry(0.01, 0.01, 1.5, 8);
        const ribMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        
        // Increase the number of ribs from 8 to 16 for a more realistic look
        for (let i = 0; i < 16; i++) {
            const rib = new THREE.Mesh(ribGeometry, ribMaterial);
            const angle = (i / 16) * Math.PI * 2;
            
            rib.position.x = Math.cos(angle) * 0.75;
            rib.position.z = Math.sin(angle) * 0.75;
            rib.position.y = 0;
            
            rib.rotation.z = Math.PI / 2;
            rib.rotation.y = -angle;
            
            scene.add(rib);
        }
        
        // Add fabric tension lines for a more realistic look
        const tensionLineGeometry = new THREE.CylinderGeometry(0.005, 0.005, 0.8, 8);
        const tensionLineMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
        
        // Add tension lines between ribs
        for (let i = 0; i < 16; i++) {
            const angle = (i / 16) * Math.PI * 2;
            const nextAngle = ((i + 1) / 16) * Math.PI * 2;
            
            const x1 = Math.cos(angle) * 0.75;
            const z1 = Math.sin(angle) * 0.75;
            const x2 = Math.cos(nextAngle) * 0.75;
            const z2 = Math.sin(nextAngle) * 0.75;
            
            const tensionLine = new THREE.Mesh(tensionLineGeometry, tensionLineMaterial);
            
            // Position the tension line between two ribs
            tensionLine.position.x = (x1 + x2) / 2;
            tensionLine.position.z = (z1 + z2) / 2;
            tensionLine.position.y = 0.2;
            
            // Rotate the tension line to connect the ribs
            const dx = x2 - x1;
            const dz = z2 - z1;
            const rotationAngle = Math.atan2(dz, dx);
            
            tensionLine.rotation.y = rotationAngle;
            tensionLine.rotation.z = Math.PI / 2;
            
            scene.add(tensionLine);
        }
        
        // Create solar panels on the canopy - fixed to be directly on the canopy surface
        const panelGeometry = new THREE.BoxGeometry(0.3, 0.01, 0.3);
        const panelMaterial = new THREE.MeshStandardMaterial({ color: 0x000000 });
        
        // Add multiple solar panels - positioned directly on the canopy surface
        for (let i = 0; i < 8; i++) {
            const panel = new THREE.Mesh(panelGeometry, panelMaterial);
            const angle = (i / 8) * Math.PI * 2;
            const radius = 1.2;
            
            // Calculate position on the canopy surface
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            // Calculate y position based on the cone's slope
            // For a cone with radius 1.5 and height 0.8, the slope is 0.8/1.5
            const slope = 0.8 / 1.5;
            const distanceFromCenter = Math.sqrt(x*x + z*z);
            // Raise the solar panels by adjusting the y position
            const y = 0.9 - (distanceFromCenter * slope);
            
            panel.position.set(x, y, z);
            
            // Fix: Rotate panel to match the canopy surface and point toward the center/top
            // First rotate around Y axis to align with the radial direction
            panel.rotation.y = -angle;
            
            // Then rotate around X axis to match the canopy slope
            // This ensures all panels point toward the center/top of the canopy
            panel.rotation.x = Math.atan(slope);
            
            // Fix: Add a rotation around Z axis to ensure panels are oriented correctly
            // This ensures the panels are aligned with the radial direction from the center
            panel.rotation.z = 0;
            
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
        
        // Add PowerShade logo to the canopy - hanging off the front parallel to the pole
        createLogo();
    }
    
    // Function to create the PowerShade logo
    function createLogo() {
        // Create a simple text geometry for the logo
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        
        // Adjust canvas dimensions to match the new logo panel dimensions
        canvas.width = 360;  // Wider canvas to match the wider logo panel
        canvas.height = 90;  // Shorter canvas to match the shorter logo panel
        
        // Draw the logo background
        context.fillStyle = '#0066cc';
        context.fillRect(0, 0, canvas.width, canvas.height);
        
        // Draw the text - adjust font size and position to fit the new dimensions
        context.fillStyle = '#ffffff';
        context.font = 'bold 36px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('PowerShade', canvas.width / 2, canvas.height / 2);
        
        // Create a texture from the canvas
        const texture = new THREE.CanvasTexture(canvas);
        
        // Create a plane for the logo - keep the same dimensions as before
        const logoGeometry = new THREE.PlaneGeometry(1.2, 0.3);
        const logoMaterial = new THREE.MeshBasicMaterial({ 
            map: texture,
            side: THREE.DoubleSide
        });
        
        const logo = new THREE.Mesh(logoGeometry, logoMaterial);
        
        // Position the logo to hang off the front of the canopy parallel to the pole
        // Keep the logo at the same position
        logo.position.set(0, -0.1, 1.5);
        
        // Rotate the logo to be parallel to the pole (vertical)
        logo.rotation.x = 0;
        logo.rotation.y = 0;
        
        scene.add(logo);
    }
    
    // Remove loading message when model is ready
    const loadingElement = document.querySelector('.model-loading');
    if (loadingElement) {
        loadingElement.style.display = 'none';
    }
}); 