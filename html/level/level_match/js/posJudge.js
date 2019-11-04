//判断函数，既要判断位置，还要判断形状
// document.write("<script language=javascript src='/js/scene.js'></script>");
document.write("<script language=javascript src='/js/winEffects.js'></script>");

var sign=false;

function linkSign() {
    

    
    if(sign==true)
    {
        sign=false;
    }

    else if(sign==false)
    {
        sign=true;
    }

    // console.log(sign);

    return sign;

}

setInterval(pagesLink, 15000)

var inMesh;
var pickinfo;
var pickMesh;
// var hitornot=[0,0,0,0,0,0]
var hitornot=new Array(0,0,0,0,0,0)


function judge(id,hitornot) {
   inMesh = scene.getMeshByID(id);

    // var pos = m.getAbsolutePosition();
    // var state = inMesh.state;

    // inMesh=scene.getMeshByID('box2');
    var origin = inMesh.position;//起点
    var forward = new BABYLON.Vector3(1, 0, 1);//出射方向
    var length = 2;//长度

    var ray = new BABYLON.Ray(new BABYLON.Vector3(origin.x, origin.y - 0.1, origin.z), forward, length);

    // let rayHelper = new BABYLON.RayHelper(ray);
    // rayHelper.show(scene);

    pickinfo = scene.pickWithRay(ray);
    var randMaterial = new BABYLON.StandardMaterial('redMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();




    if (pickinfo.hit) {

        pickMesh=pickinfo.pickedMesh;

        if (pickMesh.id == inMesh.state.slice(1)) {
            
            console.log(pickMesh.id);

            
            var idstr=pickMesh.id;
            idstr=idstr.split("");
            idstr=idstr[idstr.length-1];
            idstr=parseInt(idstr)
            hitornot[idstr-1] = 1; //id为pickmesh.id的图形被填充
            
            pickMesh.material = randMaterial;
            var music = new BABYLON.Sound("music", "/audio/win1.mp3", scene, null, { loop: false, autoplay: true, spatialSound: true });
            
            // t = setInterval("pagesLink()", 5000);
            
            afterJudge(id,hitornot);

        }

        if (sign==true)
            {
                //pagesLink(pickMesh);
            }

        
    }



}



function pagesLink() {

    //console.log('link!!!')
    
    if(pickMesh!=null)
    {
        if (pickMesh.id == 'level_next') {
        
            url = window.location.pathname
            head = url.slice(0, 23)

            page = url.slice(23, 24)
            new_page = parseInt(page) + 1

            new_url = url.replace(page, new_page)

            window.location.href = new_url;


    }

    else if (pickMesh.id == 'level_last') {

            url = window.location.pathname

            head = url.slice(0, 23)

            page = url.slice(23, 24)

            new_page = parseInt(page) - 1

            new_url = url.replace(page, new_page)
            
            window.location.href = new_url;

        

    }
}
}

function afterJudge(id) {
    //判断是否全部填完
    //var j = 1;
    for(var i = 0;i < 7 ;i++)
    {
        if(hitornot[i] = 0)
        {
            j = 0;
        }
    }
    if(j = 1)
    {
        winwin();
    }
    //——-------

    var i = id;
    var m = scene.getMeshByID(id);
    // var s = m.state;
    //m.isVisible=false;
    m.dispose();

    createShapePick(i);

}