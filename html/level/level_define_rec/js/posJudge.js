//判断函数，既要判断位置，还要判断形状
// document.write("<script language=javascript src='/js/scene.js'></script>");

var hitornot = new Array(0)

function judge(id) {
    

    var inMesh = scene.getMeshByID(id);
    
    var randMaterial = new BABYLON.StandardMaterial('randMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();
    
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
    

    if (pickinfo.hit) {
        
        var pickMesh = pickinfo.pickedMesh;
        

        if(pickMesh.state.toString().slice(5,)==inMesh.state)
        {
            
            pickMesh.material=randMaterial;
            
            var music = new BABYLON.Sound("music", "/../audio/define_rec_win.mp3",scene, null, { loop: false, autoplay: true, spatialSound: true });

            hitornot[0]=1;

            // var idstr = pickMesh.id;
            // idstr = idstr.split("");
            // idstr = idstr[idstr.length - 1];
            // idstr = parseInt(idstr)
            // hitornot[idstr - 1] = 1; //id为pickmesh.id的图形被填充
            
            afterJudge(id,hitornot);
        }
    }
}


function pagesLink() {

  
    var new_url = '/html/level/level_define_tri/level_define_tri.html';
    window.location.href = new_url;
    
}


function afterJudge(id) {
    
    var i = id;
    
    var m = scene.getMeshByID("true_rec");
    m.state="false";
    
    // var s = m.state;
    //m.isVisible=false;
    //m.dispose();

    //createShapePick(i);

    var j = 1;

    for (var i = 0; i < hitornot.length; i++) {
        if (hitornot[i] == 0) {
            j = 0;
        }
    }

    if (j == 1) {
        winwin();
        setTimeout("pagesLink()",15000);
        
    }





}