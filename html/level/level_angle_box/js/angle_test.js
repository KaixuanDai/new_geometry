var createScene = function () {

    var scene = new BABYLON.Scene(engine);

	// lights, cameras, action!
    var camera = new BABYLON.ArcRotateCamera("Camera", -Math.PI / 2, .8, 50, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

	var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0), scene);
	light.groundColor = new BABYLON.Color3(.5, .5, .5);
    var ground = BABYLON.Mesh.CreateGround("ground1", 50, 30, 2, scene);
    ground.position.y=-2
	
    
	var box1 = BABYLON.MeshBuilder.CreateBox("box1", { width: 5, height: 2, depth: 5 }, scene)
	box1.material = new BABYLON.StandardMaterial("b3mat", scene);
	box1.material.diffuseColor = new BABYLON.Color3(1, .5, 0);
	box1.position = new BABYLON.Vector3(0, 0, 20);
        

    var box2 = BABYLON.MeshBuilder.CreateBox("box2", { width: 5, height: 2, depth: 5 }, scene)
	box2.material = new BABYLON.StandardMaterial("b2mat", scene);
	box2.material.diffuseColor = new BABYLON.Color3(.5, 0, 1);
	box2.position = new BABYLON.Vector3(10, 0, 0);

    var box3 = BABYLON.MeshBuilder.CreateBox("box1", { width: 5, height: 2, depth: 5 }, scene)
	box3.material = new BABYLON.StandardMaterial("b1mat", scene);
	box3.material.diffuseColor = new BABYLON.Color3(0, 1, 0);
	box3.position = new BABYLON.Vector3(-10, 0, 0);
    
    
	// put positions into path 
	var path = [];
	path.push(box1.position);
    path.push(box2.position);

    path.push(box1.position);
    path.push(box3.position);


	// your custom updatePath func
	var updatePath = function () {
		path = [];
		path.push(box1.position);
		path.push(box2.position);
        
        path.push(box1.position);
        path.push(box3.position);


	};

    var linesMesh = BABYLON.Mesh.CreateLines("lines", path, scene, true);
    linesMesh.color=new BABYLON.Color3.Red;

    

    scene.registerBeforeRender(function () {
        
		updatePath();

		linesMesh = BABYLON.Mesh.CreateLines(null, path, null, null, linesMesh);
        linesMesh.color=new BABYLON.Color3.Red;

	});





    // //When pointer down event is raised
    scene.onPointerDown = function (evt, pickResult) {
        // if the click hits the ground object, we change the impact position
        if (pickResult.hit) {            
            
            var pos=new BABYLON.Vector3(pickResult.pickedPoint.x,0,pickResult.pickedPoint.z)
            
            box2.position=pos;
            
            box3.position.x=pos.x+5;
            box3.position.z=pos.z-6;

            
                    
        }
    };

    return scene;



};
