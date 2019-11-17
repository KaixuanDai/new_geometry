//判断函数，既要判断位置，还要判断形状
// document.write("<script language=javascript src='/js/scene.js'></script>");

function judge(id) {
    var inMesh = scene.getMeshByID(id);
    
    // var pos = m.getAbsolutePosition();
    // var state = inMesh.state;

    // inMesh=scene.getMeshByID('box2');
    var origin = inMesh.position;//起点
    var forward = new BABYLON.Vector3(1, 0, 1);//出射方向
    var length = 2;//长度

    var ray = new BABYLON.Ray( new BABYLON.Vector3(origin.x, origin.y-0.1, origin.z), forward, length);

    // let rayHelper = new BABYLON.RayHelper(ray);
    // rayHelper.show(scene);

    var pickinfo = scene.pickWithRay(ray);
    
    var randMaterial = new BABYLON.StandardMaterial('redMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();


    if (pickinfo.hit) {
        
        var pickMesh = pickinfo.pickedMesh;
        
        if(pickMesh.id=='true'+inMesh.state)
        {
            console.log(pickMesh.id);
            
            pickMesh.material=randMaterial;
            var music = new BABYLON.Sound("music", "/audio/classify_win.mp3",scene, null, { loop: false, autoplay: true, spatialSound: true });
            
            afterJudge(id)
        }
        
        
    }

    

}




function afterJudge(id) {
    
    var i = id;
    var m = scene.getMeshByID(id);
    // var s = m.state;
    //m.isVisible=false;
    m.dispose();

    createShape(i);

}