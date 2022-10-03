setTimeout(function(){
    var contagem = 0;
    
    function leituraLatitude(){
      contagem++;
            let consulta;
            consulta  = consultaCaracteristica(contagem,'Lat');
            return consulta;
    }
    
    function leituraLongitude(){
      contagem++;
            let consulta;
            consulta  = consultaCaracteristica(contagem,'Long');
            return consulta;
    }
  
    var gData = [...Array(dadosMeteorito.length)].map(() => ({
  
      /* Coordenades */
        lat: leituraLatitude() * 180,
        lng: leituraLongitude() * 360,
    
        /* Range */
        maxR: 0.5 * 20 + 3,
    
        /* Circle Propagation Speed  - Less is better for visualization */
        propagationSpeed: 0.5 * 20 + 1,
    
        /* Repeat Circle Period  - More is better for visualization */
        repeatPeriod: 1.0 * 2000 + 200,
      }));
    
  
  const colorInterpolator = t => `rgba(255,100,50,${1-t})`;
  
  var Globe = new ThreeGlobe()
    .globeImageUrl('https://api.codetabs.com/v1/proxy?quest=https://svs.gsfc.nasa.gov/vis/a000000/a004700/a004720/lroc_color_poles_1k.jpg')
    .ringsData(gData)
    .ringColor(() => colorInterpolator)
    .ringMaxRadius('maxR')
    .ringPropagationSpeed('propagationSpeed')
    .ringRepeatPeriod('repeatPeriod');
  
  // Setup renderer
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor( 0x000000, 0 );
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('globeViz').appendChild(renderer.domElement);
  
  // Setup scene
  const scene = new THREE.Scene();
  scene.add(Globe);
  scene.add(new THREE.AmbientLight(0xbbbbbb));
  scene.add(new THREE.DirectionalLight(0xffffff, 0.6));
  
  // Setup camera
  const camera = new THREE.PerspectiveCamera();
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  camera.position.z = 500;
  
  // Add camera controls
  const tbControls = new THREE.TrackballControls(camera, renderer.domElement);
  tbControls.minDistance = 101;
  tbControls.rotateSpeed = 5;
  tbControls.zoomSpeed = 0.8;
  
  // Kick-off renderer
  (function animate() { // IIFE
    // Frame cycle
    tbControls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  })();
},4000);
