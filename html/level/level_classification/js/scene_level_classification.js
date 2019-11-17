var createScene = function () {

 
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);

    // camera
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);

    camera.setPosition(new BABYLON.Vector3(0, 20, -21.5));
    // var camera=new BABYLON.FreeCamera("camera1",new BABYLON.Vector3(0,5,-10),scene);//创建和放置自由相机

    camera.attachControl(canvas, true);
    // lights

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    // var light = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(10, 10, 0), scene);

    light.intensity = 0.95;

          //设置背景环境
          BABYLON.SceneLoader.ImportMesh("","/img/","cloud.glb",scene,function(newMeshes/*,particleSysterms,skeletons*/){
        
            var ocloud = newMeshes[0];
            
            //seagulf.position = new BABYLON.Vector3(0,3,0);
            ocloud.scaling = new BABYLON.Vector3(15,15,15);        
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
    var levelChange = [
        new BABYLON.Vector3(0, 0, 0),
        new BABYLON.Vector3(3, 0, 0),
        new BABYLON.Vector3(3, 0, -1),

        new BABYLON.Vector3(6, 0, 1),
        new BABYLON.Vector3(3, 0, 3),

        new BABYLON.Vector3(3, 0, 2),
        new BABYLON.Vector3(0, 0, 2),
        new BABYLON.Vector3(0, 0, 0),
    ];


    //分类区域    
    var true_tri1 = BABYLON.MeshBuilder.ExtrudePolygon("truetri", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri1.material = blankMaterial;
    true_tri1.position = new BABYLON.Vector3(-16, 1, 10)
    true_tri1.scaling = new BABYLON.Vector3(6, 1, 6);
    true_tri1.addRotation(0, Math.PI*3 / 4, 0).addRotation(0, 0, 0);
    true_tri1.state = "truetri1";
    true_tri1.name = "truetri1";

    true_tri1.enableEdgesRendering();
    true_tri1.edgesWidth = 20.0;
    true_tri1.edgesColor = new BABYLON.Color4(1, 0, 0, 1);
    true_tri1.enableEdgesRendering(.9999);

    var true_box = BABYLON.MeshBuilder.ExtrudePolygon("truebox", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_box.material = blankMaterial;
    true_box.position = new BABYLON.Vector3(-16, 1, -13)
    true_box.scaling = new BABYLON.Vector3(1 * 4, 1, 1 * 4);
    true_box.rotation = new BABYLON.Vector3(0, 0, 0);
    true_box.state = "truebox";
    true_box.enableEdgesRendering();
    true_box.edgesWidth = 20.0;
    true_box.edgesColor = new BABYLON.Color4(0, 1, 0, 1);

    var true_rec = BABYLON.MeshBuilder.ExtrudePolygon("truerec", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_rec.material = blankMaterial;
    true_rec.position = new BABYLON.Vector3(12, 1, 6)
    true_rec.scaling = new BABYLON.Vector3(1 * 4, 1, 1 * 6);
    true_rec.rotation = new BABYLON.Vector3(0, -Math.PI / 2, 0);
    true_rec.state = "truerec";
    true_rec.enableEdgesRendering();
    true_rec.edgesWidth = 20.0;
    true_rec.edgesColor = new BABYLON.Color4(0, 0, 1, 1);

    var true_cir = BABYLON.MeshBuilder.CreateCylinder("truecir", {height:0.2, diameter:6,tessellation: 99}, scene);         
    true_cir.material=blankMaterial;
    true_cir.position = new BABYLON.Vector3(12, 1, -10)
    true_cir.scaling = new BABYLON.Vector3(1, 1, 1 );           
    true_cir.state="truecir";
    true_cir.enableEdgesRendering();
    true_cir.edgesWidth = 20.0;
    true_cir.edgesColor = new BABYLON.Color4(1, 0, 1, 0.5);


    var music = new BABYLON.Sound("music", "/audio/classify_begin.mp3",scene, null, { loop: false, autoplay: true, spatialSound: true });

    return scene;
};

