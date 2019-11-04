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
   // var ground = BABYLON.Mesh.CreateGround("ground1", 50, 35, 2, scene);
//     var materialGround = new BABYLON.StandardMaterial("texture1", scene);
//     materialGround.material = materialGround;
//     materialGround.alpha = 1;
//     materialGround.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0);
//     materialGround.diffuseTexture = new BABYLON.Texture("../../img/ground.jpg", scene);
//    // ground.material = materialGround;

//     //设置skybox
//   //  var skybox = BABYLON.Mesh.CreateBox("skyBox", 100.0, scene);
//     var skyboxMaterial = new BABYLON.StandardMaterial("../skyBox", scene);
//     skyboxMaterial.backFaceCulling = false;
//     skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("../../img/skyBox/5", scene);
//     skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
//     skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
//     skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
//     skyboxMaterial.disableLighting = true;
 //   skybox.material = skyboxMaterial;

    //设置背景环境
    BABYLON.SceneLoader.ImportMesh("","/img/","cloud.glb",scene,function(newMeshes/*,particleSysterms,skeletons*/){
        
        var ocloud = newMeshes[0];
        
        //seagulf.position = new BABYLON.Vector3(0,3,0);
        ocloud.scaling = new BABYLON.Vector3(15,15,15);        
        //shadowGenerator.getShadowMap().renderList.push(seagulf);
        //scene.beginAnimation(skeletons[0],0,100,true,0.8);
        //scene.createCmeraOrLight(true,ture,ture);
    } );



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

    var beijing = [
        new BABYLON.Vector3(117.210024, 0, 40.082262),
        new BABYLON.Vector3(117.105315, 0, 40.074479),
        new BABYLON.Vector3(117.105315, 0, 40.074479),
        new BABYLON.Vector3(117.102851, 0, 40.073563),
        new BABYLON.Vector3(117.102235, 0, 40.073105),
        new BABYLON.Vector3(117.102235, 0, 40.073105),
        new BABYLON.Vector3(117.102851, 0, 40.073563),
        new BABYLON.Vector3(116.999989, 0, 40.030053),
        new BABYLON.Vector3(116.927924, 0, 40.054788),
        new BABYLON.Vector3(116.783794, 0, 40.035093),
        new BABYLON.Vector3(116.757925, 0, 39.968176),
        new BABYLON.Vector3(116.786874, 0, 39.886963),
        new BABYLON.Vector3(116.926076, 0, 39.835524),
        new BABYLON.Vector3(116.949482, 0, 39.778529),
        new BABYLON.Vector3(116.902055, 0, 39.763813),
        new BABYLON.Vector3(116.90575, 0, 39.687883),
        new BABYLON.Vector3(116.812128, 0, 39.616018),
        new BABYLON.Vector3(116.717273, 0, 39.603572),
        new BABYLON.Vector3(116.717273, 0, 39.603572),
        new BABYLON.Vector3(116.720969, 0, 39.599884),
        new BABYLON.Vector3(116.720969, 0, 39.599884),
        new BABYLON.Vector3(116.726512, 0, 39.595274),
        new BABYLON.Vector3(116.726512, 0, 39.595274),
        new BABYLON.Vector3(116.703106, 0, 39.588819),
        new BABYLON.Vector3(116.703106, 0, 39.588819),
        new BABYLON.Vector3(116.607636, 0, 39.619705),
        new BABYLON.Vector3(116.524484, 0, 39.596657),
        new BABYLON.Vector3(116.440716, 0, 39.527466),
        new BABYLON.Vector3(116.433325, 0, 39.44296),
        new BABYLON.Vector3(116.332927, 0, 39.457744),
        new BABYLON.Vector3(116.245464, 0, 39.515466),
        new BABYLON.Vector3(116.204196, 0, 39.588819),
        new BABYLON.Vector3(116.10195, 0, 39.576368),
        new BABYLON.Vector3(116.10195, 0, 39.576368),
        new BABYLON.Vector3(115.957204, 0, 39.561147),
        new BABYLON.Vector3(115.910393, 0, 39.600345),
        new BABYLON.Vector3(115.910393, 0, 39.600345),
        new BABYLON.Vector3(115.855574, 0, 39.554689),
        new BABYLON.Vector3(115.855574, 0, 39.554689),
        new BABYLON.Vector3(115.846951, 0, 39.550999),
        new BABYLON.Vector3(115.846951, 0, 39.550999),
        new BABYLON.Vector3(115.821081, 0, 39.517312),
        new BABYLON.Vector3(115.821081, 0, 39.517312),
        new BABYLON.Vector3(115.752712, 0, 39.512696),
        new BABYLON.Vector3(115.752712, 0, 39.512696),
        new BABYLON.Vector3(115.738545, 0, 39.539464),
        new BABYLON.Vector3(115.738545, 0, 39.539925),
        new BABYLON.Vector3(115.738545, 0, 39.539464),
        new BABYLON.Vector3(115.738545, 0, 39.539925),
        new BABYLON.Vector3(115.737314, 0, 39.544078),
        new BABYLON.Vector3(115.737314, 0, 39.544078),
        new BABYLON.Vector3(115.723763, 0, 39.544539),
        new BABYLON.Vector3(115.723763, 0, 39.544539),
        new BABYLON.Vector3(115.721299, 0, 39.543617),
        new BABYLON.Vector3(115.721299, 0, 39.543617),
        new BABYLON.Vector3(115.721299, 0, 39.55146),
        new BABYLON.Vector3(115.721299, 0, 39.55146),
        new BABYLON.Vector3(115.716988, 0, 39.560225),
        new BABYLON.Vector3(115.716988, 0, 39.560225),
        new BABYLON.Vector3(115.699125, 0, 39.577751),
        new BABYLON.Vector3(115.698509, 0, 39.577751),
        new BABYLON.Vector3(115.698509, 0, 39.577751),
        new BABYLON.Vector3(115.699125, 0, 39.577751),
        new BABYLON.Vector3(115.698509, 0, 39.577751),
        new BABYLON.Vector3(115.69543, 0, 39.579135),
        new BABYLON.Vector3(115.69543, 0, 39.579135),
        new BABYLON.Vector3(115.586408, 0, 39.58928),
        new BABYLON.Vector3(115.478619, 0, 39.650578),
        new BABYLON.Vector3(115.478619, 0, 39.650578),
        new BABYLON.Vector3(115.498945, 0, 39.69617),
        new BABYLON.Vector3(115.498945, 0, 39.69617),
        new BABYLON.Vector3(115.443511, 0, 39.785426),
        new BABYLON.Vector3(115.443511, 0, 39.785426),
        new BABYLON.Vector3(115.567314, 0, 39.816224),
        new BABYLON.Vector3(115.514344, 0, 39.837821),
        new BABYLON.Vector3(115.522967, 0, 39.898898),
        new BABYLON.Vector3(115.426264, 0, 39.95029),
        new BABYLON.Vector3(115.454597, 0, 40.029595),
        new BABYLON.Vector3(115.599343, 0, 40.11979),
        new BABYLON.Vector3(115.73485, 0, 40.129398),
        new BABYLON.Vector3(115.773038, 0, 40.176044),
        new BABYLON.Vector3(115.85311, 0, 40.148609),
        new BABYLON.Vector3(115.89869, 0, 40.234536),
        new BABYLON.Vector3(115.968907, 0, 40.264219),
        new BABYLON.Vector3(115.9184, 0, 40.354103),
        new BABYLON.Vector3(115.861733, 0, 40.364589),
        new BABYLON.Vector3(115.861733, 0, 40.364589),
        new BABYLON.Vector3(115.779197, 0, 40.442501),
        new BABYLON.Vector3(115.755792, 0, 40.540333),
        new BABYLON.Vector3(115.907929, 0, 40.617133),
        new BABYLON.Vector3(116.005247, 0, 40.58397),
        new BABYLON.Vector3(116.088399, 0, 40.62667),
        new BABYLON.Vector3(116.22021, 0, 40.744181),
        new BABYLON.Vector3(116.247311, 0, 40.791762),
        new BABYLON.Vector3(116.464738, 0, 40.771827),
        new BABYLON.Vector3(116.334159, 0, 40.90446),
        new BABYLON.Vector3(116.473977, 0, 40.895867),
        new BABYLON.Vector3(116.455499, 0, 40.98084),
        new BABYLON.Vector3(116.519557, 0, 40.981292),
        new BABYLON.Vector3(116.519557, 0, 40.981292),
        new BABYLON.Vector3(116.599013, 0, 40.974516),
        new BABYLON.Vector3(116.615643, 0, 41.053072),
        new BABYLON.Vector3(116.688324, 0, 41.044499),
        new BABYLON.Vector3(116.677853, 0, 40.970902),
        new BABYLON.Vector3(116.730208, 0, 40.897676),
        new BABYLON.Vector3(116.858323, 0, 40.833423),
        new BABYLON.Vector3(116.964881, 0, 40.70972),
        new BABYLON.Vector3(117.110858, 0, 40.70836),
        new BABYLON.Vector3(117.286401, 0, 40.660719),
        new BABYLON.Vector3(117.386799, 0, 40.684317),
        new BABYLON.Vector3(117.49582, 0, 40.674334),
        new BABYLON.Vector3(117.389879, 0, 40.5617),
        new BABYLON.Vector3(117.344299, 0, 40.582152),
        new BABYLON.Vector3(117.213104, 0, 40.512136),
        new BABYLON.Vector3(117.225423, 0, 40.369148),
        new BABYLON.Vector3(117.309191, 0, 40.279284),
        new BABYLON.Vector3(117.309807, 0, 40.279284),
        new BABYLON.Vector3(117.309191, 0, 40.279284),
        new BABYLON.Vector3(117.309807, 0, 40.279284),
        new BABYLON.Vector3(117.389879, 0, 40.228141),
        new BABYLON.Vector3(117.367089, 0, 40.172387),
        new BABYLON.Vector3(117.367089, 0, 40.172844),
        new BABYLON.Vector3(117.367089, 0, 40.173301),
        new BABYLON.Vector3(117.367089, 0, 40.173301),
        new BABYLON.Vector3(117.367089, 0, 40.172844),
        new BABYLON.Vector3(117.367089, 0, 40.172387),
        new BABYLON.Vector3(117.344299, 0, 40.13443),
        new BABYLON.Vector3(117.210024, 0, 40.082262),
    ]


    var true_map = BABYLON.MeshBuilder.ExtrudePolygon("map", { shape: beijing, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_map.setAbsolutePosition(10,10,0);
    true_map.position = new BABYLON.Vector3(5, 1, -1)

    // true_map.scaling = new BABYLON.Vector3(4, 1, 4);

    //正确位置的形状
    var true_tri1 = BABYLON.MeshBuilder.ExtrudePolygon("truetri1", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri1.material = blankMaterial;
    true_tri1.position = new BABYLON.Vector3(5, 1, -1)
    true_tri1.scaling = new BABYLON.Vector3(4, 1, 4);
    true_tri1.rotation = new BABYLON.Vector3(0, Math.PI, 0);
    true_tri1.state = "truetri1";
    true_tri1.enableEdgesRendering();
    true_tri1.edgesWidth = 20.0;
    true_tri1.edgesColor = new BABYLON.Color4(0, 0, 0, 1);
    true_tri1.enableEdgesRendering(.9999);


    var true_tri2 = BABYLON.MeshBuilder.ExtrudePolygon("truetri2", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri2.material = blankMaterial;
    true_tri2.position = new BABYLON.Vector3(-1, 1, -3)
    true_tri2.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    true_tri2.rotation = new BABYLON.Vector3(0, -Math.PI * 3 / 4, 0);
    true_tri2.state = "truetri2";
    true_tri2.enableEdgesRendering();
    true_tri2.edgesWidth = 20.0;
    true_tri2.edgesColor = new BABYLON.Color4(0, 0, 0, 1);


    var true_tri3 = BABYLON.MeshBuilder.ExtrudePolygon("truetri3", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri3.material = blankMaterial;
    true_tri3.position = new BABYLON.Vector3(-1, 1, 3)
    true_tri3.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    true_tri3.rotation = new BABYLON.Vector3(0, Math.PI * 3 / 4, 0);
    true_tri3.state = "truetri3";
    true_tri3.enableEdgesRendering();
    true_tri3.edgesWidth = 20.0;
    true_tri3.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

    var true_tri4 = BABYLON.MeshBuilder.ExtrudePolygon("truetri4", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri4.material = blankMaterial;
    true_tri4.position = new BABYLON.Vector3(1, 1, -1)
    true_tri4.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    // true_tri4.addRotation(0, Math.PI*3/4, 0).addRotation(0,0,0);
    true_tri4.rotation = new BABYLON.Vector3(0, Math.PI * 3 / 4, 0);

    true_tri4.state = "truetri4";
    true_tri4.enableEdgesRendering();
    true_tri4.edgesWidth = 20.0;
    true_tri4.edgesColor = new BABYLON.Color4(0, 0, 0, 1);


    var true_tri5 = BABYLON.MeshBuilder.ExtrudePolygon("truetri5", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_tri5.material = blankMaterial;
    true_tri5.position = new BABYLON.Vector3(-1, 1, -3)
    true_tri5.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    true_tri5.rotation = new BABYLON.Vector3(0, -Math.PI / 4, 0);
    true_tri5.state = "truetri5";
    true_tri5.enableEdgesRendering();
    true_tri5.edgesWidth = 20.0;
    true_tri5.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

    var true_box = BABYLON.MeshBuilder.ExtrudePolygon("truebox", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_box.material = blankMaterial;
    true_box.position = new BABYLON.Vector3(0, 1, 2)
    true_box.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    true_box.rotation = new BABYLON.Vector3(0, 0, 0);
    true_box.state = "truebox";
    true_box.enableEdgesRendering();
    true_box.edgesWidth = 20.0;
    true_box.edgesColor = new BABYLON.Color4(0, 0, 0, 1);

    var true_para = BABYLON.MeshBuilder.ExtrudePolygon("truepara", { shape: para, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    true_para.material = blankMaterial;
    true_para.position = new BABYLON.Vector3(0, 0.8, 2)
    true_para.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    true_para.addRotation(Math.PI, 0, 0).addRotation(0, Math.PI * 3 / 4, 0);
    true_para.state = "truepara";
    true_para.enableEdgesRendering();
    true_para.edgesWidth = 20.0;
    true_para.edgesColor = new BABYLON.Color4(0, 0, 0, 1);



    //待选择的几何形状
    var tri1 = BABYLON.MeshBuilder.ExtrudePolygon("tri1", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri1.material = greenMaterial;
    tri1.position = new BABYLON.Vector3(-11, 1, -6)
    tri1.scaling = new BABYLON.Vector3(4, 1, 4);
    tri1.rotation = new BABYLON.Vector3(0, Math.PI, 0);
    tri1.state = "truetri1";



    var tri2 = BABYLON.MeshBuilder.ExtrudePolygon("tri2", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri2.material = yellowMaterial;
    tri2.position = new BABYLON.Vector3(15, 1, -2)
    tri2.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    tri2.rotation = new BABYLON.Vector3(0, -Math.PI * 3 / 4, 0);
    tri2.state = "truetri2";


    var tri3 = BABYLON.MeshBuilder.ExtrudePolygon("tri3", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri3.material = blueMaterial;
    tri3.position = new BABYLON.Vector3(-12, 1, 8)
    tri3.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    tri3.rotation = new BABYLON.Vector3(0, Math.PI * 3 / 4, 0);
    tri3.state = "truetri3";


    var tri4 = BABYLON.MeshBuilder.ExtrudePolygon("tri4", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri4.material = redMaterial;
    tri4.position = new BABYLON.Vector3(-3, 1, -8)
    tri4.scaling = new BABYLON.Vector3(2 * 1.4 * 2, 1, 2 * 1.4 * 2);
    tri4.addRotation(0, Math.PI * 3 / 4, 0).addRotation(0, 0, 0);
    tri4.state = "truetri4";


    var tri5 = BABYLON.MeshBuilder.ExtrudePolygon("tri5", { shape: tri, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    tri5.material = blue1Material;
    tri5.position = new BABYLON.Vector3(-12, 1, -2)
    tri5.scaling = new BABYLON.Vector3(2 / 1.4 * 2, 1, 2 / 1.4 * 2);
    tri5.rotation = new BABYLON.Vector3(0, -Math.PI / 4, 0);
    tri5.state = "truetri5";


    var box = BABYLON.MeshBuilder.ExtrudePolygon("box", { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    box.material = cyanMaterial;
    box.position = new BABYLON.Vector3(12, 1, 4)
    box.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    box.rotation = new BABYLON.Vector3(0, 0, 0);
    box.state = "truebox";


    var para = BABYLON.MeshBuilder.ExtrudePolygon("para", { shape: para, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
    para.material = pinkMaterial;
    para.position = new BABYLON.Vector3(6, 0.8, -8)
    para.scaling = new BABYLON.Vector3(1 * 2, 1, 1 * 2);
    para.addRotation(Math.PI, 0, 0).addRotation(0, Math.PI * 3 / 4, 0);
    para.state = "truepara";








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

    showAxis(8);//显示世界坐标系 参数代表轴的长度

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


    localAxes(4);





    return scene;
};

