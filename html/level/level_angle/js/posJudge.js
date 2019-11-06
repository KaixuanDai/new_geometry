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
        
        if(pickMesh.id==inMesh.state.slice(1,))
        {
            console.log(pickMesh.id);
            
            pickMesh.material=randMaterial;
            var music = new BABYLON.Sound("music", "../../audio/win1.mp3",scene, null, { loop: false, autoplay: true, spatialSound: true });
            
            afterJudge(id)
        }
        else if(pickMesh.id=='level_next')
        {
            url=window.location.pathname
            head=url.slice(0,23)
            
            page=url.slice(23,24)
            new_page=parseInt(page)+1
        
            new_url=url.replace(page,new_page)

            var t1 = window.setInterval(function()
            {
                window.location.href= new_url;
             
            },10000); 
            
            url='';
            
        }
        else if(pickMesh.id=='level_last')
        {
            url=window.location.pathname
            
            head=url.slice(0,23)
            
            page=url.slice(23,24)
            new_page=parseInt(page)-1
        
            new_url=url.replace(page,new_page)

            var t1 = window.setInterval(function()
            {
                window.location.href=new_page;
             
            },10000); 
            
            url='';

        }
 

        
        
        // if (m.state == inMesh.state) {
            
        //     m.material = redMaterial
        //     console.log(m.name);
        // }
        // console.log(m.name);
    }

    //延迟跳转，避免跳转过快
    // var t1 = window.setInterval(function () {

    //     if (Math.abs(m.position.x - nextBut.position.x) <= tol && Math.abs(m.position.z - nextBut.position.z) <= tol) {
    //         window.location.href = 'Level-1.html';
    //         console.log("link to next")
    //         var music = new BABYLON.Sound("music", "../audio/win.mp3", scene, null, { loop: false, autoplay: true, spatialSound: true });

    //     }

    // }, 10000);

}




function afterJudge(id) {
    
    var i = id;
    var m = scene.getMeshByID(id);
    // var s = m.state;
    //m.isVisible=false;
    m.dispose();

    createShapePick(i);

}