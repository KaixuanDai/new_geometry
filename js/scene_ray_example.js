var createScene = function () {
    var scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3(0.5, 0.5, 0.5);

    // camera
    var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(0, 0, 0), scene);

    camera.setPosition(new BABYLON.Vector3(0, 10, -21.5));
    // var camera=new BABYLON.FreeCamera("camera1",new BABYLON.Vector3(0,5,-10),scene);//创建和放置自由相机

    camera.attachControl(canvas, true);
    // lights

    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);
    // var light = new BABYLON.HemisphericLight("light2", new BABYLON.Vector3(10, 10, 0), scene);

    light.intensity = 0.9;
 
    //创建地面
    var ground = BABYLON.Mesh.CreateGround("ground1", 30, 25, 2, scene);
    var materialGround = new BABYLON.StandardMaterial("texture1", scene);
    materialGround.material = materialGround;
    materialGround.alpha = 1;
    materialGround.diffuseColor = new BABYLON.Color3(1.0, 1.0, 1.0);
    materialGround.diffuseTexture = new BABYLON.Texture("../img/ground.jpg", scene);
    ground.material = materialGround;

    var cyanMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    cyanMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 255);

    var greenMaterial = new BABYLON.StandardMaterial('greenMat', scene);
    greenMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 0);
    
    var redMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    redMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 0, 0);

    var box=[
        new BABYLON.Vector3(0,0.5,0),
        new BABYLON.Vector3(1.4,0.5,0),
        new BABYLON.Vector3(1.4,0.5,1.4),
        new BABYLON.Vector3(0,0.5,1.4),

    ];

    var box1=[
        new BABYLON.Vector3(0,0.5,0),
        new BABYLON.Vector3(1.4,0.5,0),
        new BABYLON.Vector3(1.4,0.5,1.4),
        new BABYLON.Vector3(0,0.5,1.4),

    ];





















    

    // var box = BABYLON.MeshBuilder.ExtrudePolygon("box",{shape:box, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    // box.material=cyanMaterial;
    // box.position=new BABYLON.Vector3(0,1,-5)
    // box.scaling = new BABYLON.Vector3(3, 1, 3);
    // box.isPickable=false;
    // //box.rotation = new BABYLON.Vector3(0, Math.PI*3/4,0);

    // var box1 = BABYLON.MeshBuilder.ExtrudePolygon("box1",{shape:box1, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    // box1.material=greenMaterial;
    // box1.position=new BABYLON.Vector3(-5,1.1,-8)
    // box1.scaling = new BABYLON.Vector3(3, 1, 3);
   
    // function mousemovef(){
	//     var pickResult = scene.pick(scene.pointerX, scene.pointerY);

	//     if (pickResult.hit) {
	// 	    var diffX = pickResult.pickedPoint.x - box.position.x;
	// 	    var diffY = pickResult.pickedPoint.z - box.position.z;
	// 	    box.rotation.y = Math.atan2(diffX,diffY);			          
    // 	}	
    // }

 
    // function vecToLocal(vector, mesh){
    //     var m = mesh.getWorldMatrix();
    //     var v = BABYLON.Vector3.TransformCoordinates(vector, m);
	// 	return v;		 
    // }

    // function castRay(){       
    //     var origin = box.position;
	//     var forward = new BABYLON.Vector3(-1,0,0);		
	//     var length = 10;
	//     var ray = new BABYLON.Ray(origin, forward, length);
    //     let rayHelper = new BABYLON.RayHelper(ray);		
    //     rayHelper.show(scene);
    
    //     var pickinfo = scene.pickWithRay(ray);
        
    //     if(pickinfo.hit)
    //     {
    //         m=pickinfo.pickedMesh;
    //         if(m.id)
    //         {
    //             m.material=redMaterial

    //         }
    //         // console.log(m.name);
    //     }
    // }
 
    // scene.registerBeforeRender(function () {
    //     castRay();
    // });

    return scene;
}