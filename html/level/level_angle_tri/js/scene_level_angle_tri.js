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

    //创建地面
    var ground = BABYLON.Mesh.CreateGround("ground1", 50, 30, 2, scene);
    ground.position = new BABYLON.Vector3(0.2, 0, 0)
    var materialGround = new BABYLON.StandardMaterial("texture1", scene);    
    
    materialGround.alpha = 0.99;    
    materialGround.alphaMode=4;
    // materialGround.alphaMode=2;

    materialGround.backFaceCulling = false;


    // materialGround.diffuseTexture = new BABYLON.Texture("angle.png", scene);
    materialGround.diffuseTexture    = new BABYLON.Texture("angle.png", scene);
    ground.material = materialGround;

    // //设置skybox
    // var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
    // var skyboxMaterial = new BABYLON.StandardMaterial("/skyBox", scene);
    // skyboxMaterial.backFaceCulling = false;
    // skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("/../img/skyBox/5", scene);
    // skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    // skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    // skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    // skyboxMaterial.disableLighting = true;
    // skybox.material = skyboxMaterial;


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
    true_tri1.material = blueMaterial;
    true_tri1.position = new BABYLON.Vector3(0.4, 0.1, -13.3)
    true_tri1.scaling = new BABYLON.Vector3(6, 1, 6);
    true_tri1.addRotation(0, Math.PI*0.9 / 6, 0).addRotation(0, 0, 0);
    
    true_tri1.state = "truetri1";
    // true_tri1.enableEdgesRendering();
    // true_tri1.edgesWidth = 20.0;
    // true_tri1.edgesColor = new BABYLON.Color4(1, 0, 0, 1);
    // true_tri1.enableEdgesRendering(.9999);




    // var true_box = BABYLON.MeshBuilder.ExtrudePolygon("truebox", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    // true_box.material = blankMaterial;
    // true_box.position = new BABYLON.Vector3(-8, 1, 6)
    // true_box.scaling = new BABYLON.Vector3(1 * 4, 1, 1 * 4);
    // true_box.rotation = new BABYLON.Vector3(0, 0, 0);
    // true_box.state = "truebox";
    // true_box.enableEdgesRendering();
    // true_box.edgesWidth = 20.0;
    // true_box.edgesColor = new BABYLON.Color4(0, 1, 0, 1);

    // var true_rec = BABYLON.MeshBuilder.ExtrudePolygon("truerec", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    // true_rec.material = blankMaterial;
    // true_rec.position = new BABYLON.Vector3(10, 1, 6)
    // true_rec.scaling = new BABYLON.Vector3(1 * 4, 1, 1 * 6);
    // true_rec.rotation = new BABYLON.Vector3(0, -Math.PI / 2, 0);
    // true_rec.state = "truerec";
    // true_rec.enableEdgesRendering();
    // true_rec.edgesWidth = 20.0;
    // true_rec.edgesColor = new BABYLON.Color4(0, 0, 1, 1);



    // var true_cir_center = BABYLON.MeshBuilder.CreateCylinder("truecir", {height:0.2, diameter:1,tessellation: 99}, scene);         
    // true_cir_center.material=blueMaterial;
    // true_cir_center.position = new BABYLON.Vector3(0.5, 0.1, -13.5)
    // // true_cir.scaling = new BABYLON.Vector3(1, 1, 1 );           
    // true_cir_center.state="truecir";
    

    // var true_cir_bottom = BABYLON.MeshBuilder.CreateCylinder("truecir", {height:0.2, diameter:1,tessellation: 99}, scene);         
    // true_cir_bottom.material=blueMaterial;
    // true_cir_bottom.position = new BABYLON.Vector3(16, 0.1, -13.5)
    // // true_cir_bottom.scaling = new BABYLON.Vector3(1, 1, 1 );           
    // true_cir_bottom.state="truecir";
    // // true_cir_bottom.enableEdgesRendering();
    // // true_cir_bottom.edgesWidth = 20.0;
    // // true_cir_bottom.edgesColor = new BABYLON.Color4(1, 0, 1, 0.5);

    // //var lines = BABYLON.MeshBuilder.CreateLines("lines", {points: [(true_cir_bottom.position),(true_cir_center.position)]}, scene);

    // var lines = BABYLON.Mesh.CreateBox("wall", 1, scene);
    // lines.position=new BABYLON.Vector3(8, 0.1, -13.5)

    // lines.material=blueMaterial;
    // lines.scaling= new BABYLON.Vector3(15, 0.01, 0.3);


    /*********************************Start World Axes 世界坐标系显示********************/
    var showAxis = function (size) {
        var makeTextPlane = function (text, color, size) {
            var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
            dynamicTexture.hasAlpha = true;
            dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
            var plane = new BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
            plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
            plane.material.backFaceCulling = false;
            plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
            plane.material.diffuseTexture = dynamicTexture;
            return plane;
        };

        var axisX = BABYLON.Mesh.CreateLines("axisX", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
            new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
        ], scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);
        var xChar = makeTextPlane("X", "red", size / 10);
        xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
        var axisY = BABYLON.Mesh.CreateLines("axisY", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
        ], scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);
        var yChar = makeTextPlane("Y", "green", size / 10);
        yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
        var axisZ = BABYLON.Mesh.CreateLines("axisZ", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
        ], scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);
        var zChar = makeTextPlane("Z", "blue", size / 10);
        zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
    };
    /***************************End World Axes***************************/

    //showAxis(8);//显示世界坐标系 参数代表轴的长度

    /*******************************Local Axes 局部坐标系显示****************************/
    function localAxes(size) {
        var pilot_local_axisX = BABYLON.Mesh.CreateLines("pilot_local_axisX", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
            new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
        ], scene);
        pilot_local_axisX.color = new BABYLON.Color3(1, 0, 0);

        pilot_local_axisY = BABYLON.Mesh.CreateLines("pilot_local_axisY", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
            new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
        ], scene);
        pilot_local_axisY.color = new BABYLON.Color3(0, 1, 0);

        var pilot_local_axisZ = BABYLON.Mesh.CreateLines("pilot_local_axisZ", [
            new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
            new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
        ], scene);
        pilot_local_axisZ.color = new BABYLON.Color3(0, 0, 1);

        var local_origin = BABYLON.MeshBuilder.CreateBox("local_origin", { size: 1 }, scene);
        local_origin.isVisible = false;

        pilot_local_axisX.parent = local_origin;
        pilot_local_axisY.parent = local_origin;
        pilot_local_axisZ.parent = local_origin;

        return local_origin;

    }
    /*******************************End Local Axes****************************/


    //localAxes(4);





    return scene;
};

