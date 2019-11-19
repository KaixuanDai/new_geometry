var createScene = function () {


  var scene = new BABYLON.Scene(engine);
  scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);

  // camera
  var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);
  camera.setPosition(new BABYLON.Vector3(0, 22, -32));
  camera.attachControl(canvas, true);
  // lights
  var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 30, 0), scene);
  var light2 = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(10, 10, 0), scene);


  //创建地面
  var ground = BABYLON.Mesh.CreateGround("ground1", 50, 30, 2, scene);
  ground.position = new BABYLON.Vector3(0.2, 0, 0)
  var materialGround = new BABYLON.StandardMaterial("texture1", scene);

  materialGround.alpha = 0.99;
  materialGround.alphaMode = 4;
  // materialGround.alphaMode=2;

  materialGround.backFaceCulling = false;


  // materialGround.diffuseTexture = new BABYLON.Texture("angle.png", scene);
  materialGround.diffuseTexture = new BABYLON.Texture("angle.png", scene);
  ground.material = materialGround;

  // Skybox
  var skybox = BABYLON.Mesh.CreateBox("skyBox", 5000.0, scene);
  var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
  skyboxMaterial.backFaceCulling = false;
  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/img/TropicalSunnyDay/TropicalSunnyDay", scene);
  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  skyboxMaterial.disableLighting = true;
  skybox.material = skyboxMaterial;


  // Water material
  var waterMaterial = new BABYLON.WaterMaterial("waterMaterial", scene, new BABYLON.Vector2(512, 512));
  waterMaterial.bumpTexture = new BABYLON.Texture("/img/waterbump.png", scene);
  waterMaterial.windForce = -10;
  waterMaterial.waveHeight = 0.5;
  waterMaterial.bumpHeight = 0.1;
  waterMaterial.waveLength = 0.1;
  waterMaterial.waveSpeed = 50.0;
  waterMaterial.colorBlendFactor = 0;
  waterMaterial.windDirection = new BABYLON.Vector2(1, 1);
  waterMaterial.colorBlendFactor = 0;

  // Water mesh
  var waterMesh = BABYLON.Mesh.CreateGround("waterMesh", 512, 512, 32, scene, false);
  waterMesh.material = waterMaterial;
  waterMesh.position.y = -4;
  // Configure water material
  waterMaterial.addToRenderList(skybox);

  //设置背景环境
  //   BABYLON.SceneLoader.ImportMesh("","/img/","cloud.glb",scene,function(newMeshes/*,particleSysterms,skeletons*/){

  //     var ocloud = newMeshes[0];

  //     //seagulf.position = new BABYLON.Vector3(0,3,0);
  //     ocloud.scaling = new BABYLON.Vector3(15,15,15);        
  //     //shadowGenerator.getShadowMap().renderList.push(seagulf);
  //     //scene.beginAnimation(skeletons[0],0,100,true,0.8);
  //     //scene.createCmeraOrLight(true,ture,ture);
  // } );


  var randMaterial = new BABYLON.StandardMaterial('redMat', scene);
  randMaterial.diffuseColor = BABYLON.Color3.Random();



  var greenMaterial = new BABYLON.StandardMaterial('greenMat', scene);
  greenMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 0);

  var yellowMaterial = new BABYLON.StandardMaterial('yellowMat', scene);
  yellowMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 255, 0);

  var blueMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  blueMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 0, 255);

  var blue1Material = new BABYLON.StandardMaterial('blueMat', scene);
  blue1Material.diffuseColor = BABYLON.Color3.FromInts(0, 0, 128);

  var redMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  redMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 0, 0);

  var cyanMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  cyanMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 255);

  var pinkMaterial = new BABYLON.StandardMaterial('blueMat', scene);
  pinkMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 20, 147);

  var blankMaterial = new BABYLON.StandardMaterial('blkMat', scene);
  blankMaterial.alpha = 0;

  var tri = [
    new BABYLON.Vector3(0, 0.5, 0),
    new BABYLON.Vector3(0, 0.5, 2.3),
    new BABYLON.Vector3(2, 0.5, 1),
  ];

  var box = [
    new BABYLON.Vector3(0, 0.5, 0),
    new BABYLON.Vector3(1.4, 0.5, 0),
    new BABYLON.Vector3(1.4, 0.5, 1.4),
    new BABYLON.Vector3(0, 0.5, 1.4),

  ];

  var para = [
    new BABYLON.Vector3(0, 0.5, 0),
    new BABYLON.Vector3(-2, 0.5, 0),
    new BABYLON.Vector3(-3, 0.5, 1),
    new BABYLON.Vector3(-1, 0.5, 1),
  ];



  //待选择的几何形状    
  var true_tri1 = BABYLON.MeshBuilder.ExtrudePolygon("truetri1", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
  true_tri1.material = randMaterial;
  true_tri1.position = new BABYLON.Vector3(0.4, 0.1, -13.3)
  true_tri1.scaling = new BABYLON.Vector3(6, 1, 6);
  true_tri1.addRotation(0, Math.PI * 0.9 / 6, 0).addRotation(0, 0, 0);

  true_tri1.state = "truetri1";


  var true_cir_center = BABYLON.MeshBuilder.CreateCylinder("truecir", { height: 0.2, diameter: 1, tessellation: 99 }, scene);
  true_cir_center.material = randMaterial;
  true_cir_center.position = new BABYLON.Vector3(0.5, 0.1, -13.5)
  true_cir_center.state = "truecir";


  var true_cir_bottom = BABYLON.MeshBuilder.CreateCylinder("truecir", { height: 0.2, diameter: 1, tessellation: 99 }, scene);
  true_cir_bottom.material = randMaterial;
  true_cir_bottom.position = new BABYLON.Vector3(16, 0.1, -13.5)
  true_cir_bottom.state = "truecir";

  var lines = BABYLON.Mesh.CreateBox("wall", 1, scene);
  lines.position = new BABYLON.Vector3(8, 0.1, -13.5)

  lines.material = randMaterial;
  lines.scaling = new BABYLON.Vector3(15, 0.01, 0.3);


  var music = new BABYLON.Sound("music", "/audio/angle_tri_begin.mp3", scene, null, { loop: false, autoplay: true, spatialSound: true });



  return scene;
};

