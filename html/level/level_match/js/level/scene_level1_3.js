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
    waterMesh.position.y=-4;
    // Configure water material
    waterMaterial.addToRenderList(skybox);
    
    //加载模型
      BABYLON.SceneLoader.ImportMesh( ["Cylinder.036_MainPlant_0", "Cylinder.024_MainPlant_0", "Cylinder.019_MainPlant_0",  "Cylinder.008_MainPlant_0","Cylinder.017_MainPlant_0","Cylinder.002_MainPlant_0","Cube.004_MainPlant_0"],"/img/scene/","scene.gltf",scene,function(newMeshes/*,particleSysterms,skeletons*/){
        
        var ocloud1 = newMeshes[1];
        var ocloud2 = newMeshes[2];
        var ocloud3 = newMeshes[3];
        var ocloud4 = newMeshes[4];
        var ocloud5 = newMeshes[5];
        var ocloud6 = newMeshes[6];
        var ocloud7 = newMeshes[7];

        
        ocloud1.position = new BABYLON.Vector3(30,-2,30);
        ocloud1.scaling = new BABYLON.Vector3(0.8,1,0.8);               
        ocloud1.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);

        ocloud2.position = new BABYLON.Vector3(-30,-4,20);
        ocloud2.scaling = new BABYLON.Vector3(1,1,0.8);               
        ocloud2.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);

        ocloud3.position = new BABYLON.Vector3(40,-2,30);
        ocloud3.scaling = new BABYLON.Vector3(1,1,0.8);               
        ocloud3.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);

        ocloud4.position = new BABYLON.Vector3(-40,-3,30);
        ocloud4.scaling = new BABYLON.Vector3(1,1,0.8);               
        ocloud4.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);

        
        ocloud5.position = new BABYLON.Vector3(40,-4,20);
        ocloud5.scaling = new BABYLON.Vector3(1,1,0.8);               
        ocloud5.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);


        ocloud6.position = new BABYLON.Vector3(-40,-3,20);
        ocloud6.scaling = new BABYLON.Vector3(1,1,0.8);               
        ocloud6.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);

        ocloud7.position = new BABYLON.Vector3(-40,-3,30);
        ocloud7.scaling = new BABYLON.Vector3(1,1,0.8);               
        ocloud7.rotation = new BABYLON.Vector3(-Math.PI / 2, 0, 0);

        // ocloud.scaling = new BABYLON.Vector3(0.001,0.001,0.001);        
        //shadowGenerator.getShadowMap().renderList.push(seagulf);
        //scene.beginAnimation(skeletons[0],0,100,true,0.8);
        //scene.createCmeraOrLight(true,ture,ture);
    } );

  
    var randMaterial = new BABYLON.StandardMaterial('redMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();

    var greenMaterial = new BABYLON.StandardMaterial('greenMat', scene);
    greenMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 0);
    
    var yellowMaterial = new BABYLON.StandardMaterial('yellowMat', scene);
    yellowMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 255, 0);

    var blueMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    blueMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 0, 255);

    var blue1Material = new BABYLON.StandardMaterial('blue1Mat', scene);
    blue1Material.diffuseColor = BABYLON.Color3.FromInts(0, 0, 128);

    var redMaterial = new BABYLON.StandardMaterial('redMat', scene);
    redMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 0, 0);

    var cyanMaterial = new BABYLON.StandardMaterial('redMat', scene);
    cyanMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 255);

    var pinkMaterial = new BABYLON.StandardMaterial('redMat', scene);
    pinkMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 20, 147);

    var blankMaterial = new BABYLON.StandardMaterial('blkMat', scene);
    blankMaterial.alpha = 0;

    var tri = [
        new BABYLON.Vector3(0, 0.5, 0),
        new BABYLON.Vector3(0, 0.5, 1),
        new BABYLON.Vector3(1, 0.5, 0),
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


    //正确位置的形状
    var true_tri1 = BABYLON.MeshBuilder.ExtrudePolygon("truetri1", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri1.material = blankMaterial;
    true_tri1.position = new BABYLON.Vector3(-0.15, 1, 1)
    true_tri1.scaling = new BABYLON.Vector3(4, 1, 4);
    true_tri1.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
    true_tri1.state = "truetri1";
    true_tri1.enableEdgesRendering();
    true_tri1.edgesWidth = 20.0;
    true_tri1.edgesColor = new BABYLON.Color4(0, 0, 0, 1);
    true_tri1.enableEdgesRendering(.9999);


    var true_tri2 = BABYLON.MeshBuilder.ExtrudePolygon("truetri2", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri2.material = blankMaterial;
    true_tri2.position = new BABYLON.Vector3(4.7, 1, 0)
    true_tri2.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    true_tri2.rotation = new BABYLON.Vector3(0, -Math.PI * 3 / 4, 0);
    true_tri2.state = "truetri2";
    true_tri2.enableEdgesRendering();
    true_tri2.edgesWidth = 20.0;
    true_tri2.edgesColor = new BABYLON.Color4(0, 0, 0, 1);


    var true_tri3 = BABYLON.MeshBuilder.ExtrudePolygon("truetri3", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri3.material = blankMaterial;
    true_tri3.position = new BABYLON.Vector3(-3, 1, -6)
    true_tri3.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    true_tri3.rotation = new BABYLON.Vector3(0, 0, 0);
    true_tri3.state = "truetri3";
    true_tri3.enableEdgesRendering();
    true_tri3.edgesWidth = 20.0;
    true_tri3.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

    var true_tri4 = BABYLON.MeshBuilder.ExtrudePolygon("truetri4", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri4.material = blankMaterial;
    true_tri4.position = new BABYLON.Vector3(0.6, 1, 5.8)
    true_tri4.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    true_tri4.addRotation(0, -Math.PI / 4, 0).addRotation(0, 0, 0);
    true_tri4.state = "truetri4";
    true_tri4.enableEdgesRendering();
    true_tri4.edgesWidth = 20.0;
    true_tri4.edgesColor = new BABYLON.Color4(0, 0, 0, 1);


    var true_tri5 = BABYLON.MeshBuilder.ExtrudePolygon("truetri5", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri5.material = blankMaterial;
    true_tri5.position = new BABYLON.Vector3(2.7, 1, -2)
    true_tri5.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    true_tri5.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
    true_tri5.state = "truetri5";
    true_tri5.enableEdgesRendering();
    true_tri5.edgesWidth = 20.0;
    true_tri5.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

    var true_box = BABYLON.MeshBuilder.ExtrudePolygon("truebox6", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_box.material = blankMaterial;
    true_box.position = new BABYLON.Vector3(2.7, 1, -6)
    true_box.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    true_box.rotation = new BABYLON.Vector3(0, -Math.PI / 4, 0);
    true_box.state = "truebox";
    true_box.enableEdgesRendering();
    true_box.edgesWidth = 20.0;
    true_box.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

    var true_para = BABYLON.MeshBuilder.ExtrudePolygon("truepara7", { shape: para, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_para.material = blankMaterial;
    true_para.position = new BABYLON.Vector3(4.6, 1, 9.8)
    true_para.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    true_para.rotation = new BABYLON.Vector3(0, -Math.PI / 2, 0);
    true_para.state = "truepara";
    true_para.enableEdgesRendering();
    true_para.edgesWidth = 20.0;
    true_para.edgesColor = new BABYLON.Color4(0, 0, 0, 1);
 


    //待选择的几何形状
    var tri1 = BABYLON.MeshBuilder.ExtrudePolygon("tri1", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri1.material = greenMaterial;
    tri1.position = new BABYLON.Vector3(-15, 1, -10)
    tri1.scaling = new BABYLON.Vector3(4, 1, 4);
    tri1.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
    tri1.state = "truetri1";


    var tri2 = BABYLON.MeshBuilder.ExtrudePolygon("tri2", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri2.material = yellowMaterial;
    tri2.position = new BABYLON.Vector3(15, 1, -6)
    tri2.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    tri2.rotation = new BABYLON.Vector3(0, -Math.PI * 3 / 4, 0);
    tri2.state = "truetri2";


    var tri3 = BABYLON.MeshBuilder.ExtrudePolygon("tri3", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri3.material = blueMaterial;
    tri3.position = new BABYLON.Vector3(-15, 1, 6)
    tri3.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    tri3.rotation = new BABYLON.Vector3(0, 0, 0);
    tri3.state = "truetri3";


    var tri4 = BABYLON.MeshBuilder.ExtrudePolygon("tri4", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri4.material = redMaterial;
    tri4.position = new BABYLON.Vector3(-3, 1, -16)
    tri4.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    tri4.addRotation(0, -Math.PI / 4, 0).addRotation(0, 0, 0);
    tri4.state = "truetri4";


    var tri5 = BABYLON.MeshBuilder.ExtrudePolygon("tri5", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri5.material = blue1Material;
    tri5.position = new BABYLON.Vector3(-12, 1, -1)
    tri5.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    tri5.rotation = new BABYLON.Vector3(0, Math.PI / 4, 0);
    tri5.state = "truetri5";


    var box = BABYLON.MeshBuilder.ExtrudePolygon("box", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    box.material = cyanMaterial;
    box.position = new BABYLON.Vector3(12, 1, 4)
    box.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    box.rotation = new BABYLON.Vector3(0, -Math.PI / 4, 0);
    box.state = "truebox6";


    var para = BABYLON.MeshBuilder.ExtrudePolygon("para", { shape: para, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    para.material = pinkMaterial;
    para.position = new BABYLON.Vector3(8, 1, -9)
    para.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    para.rotation = new BABYLON.Vector3(0, -Math.PI / 2, 0);
    para.state = "truepara7";


    
    var music = new BABYLON.Sound("music", "/audio/match_begin.mp3", scene, null, { loop: false, autoplay: true, spatialSound: true });



    return scene;
};

