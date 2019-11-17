var sceneIds = [];//存储当前的场景中的mesh的id

var inputIds = [];//存储本次输入的id

var diffIds = [];//比较二者的不同

var realWidth;
var realHeight;

// var pos;
// document.write("<script language=javascript src='/js/scene.js'></script>");
document.write("<script language=javascript src='./js/createMesh_pick.js'></script>");
document.write("<script language=javascript src='./js/createMesh.js'></script>");
document.write("<script language=javascript src='./js/changePos.js'></script>");
document.write("<script language=javascript src='./js/disposePos.js'></script>");
document.write("<script language=javascript src='./js/posJudge.js'></script>");
document.write("<script language=javascript src='./js/shpChange.js'></script>");
document.write("<script language=javascript src='./js/winEffects.js'></script>");



//default: '192.168.1.12' + ':3030'
//数据输入
function dataInput(ip, port) {
    
    //websocket 传输数据
    var ws = new WebSocket('ws://' + '127.0.0.1' + ':' + port);

    
    ws.onopen = function () {
      //alert("open WebSocket on server");
    };

    ws.onmessage = function (evt) {
    
        dataHandle(JSON.parse(evt.data), 2.5, 3)

        //console.log(data);
    };

    ws.onclose = function () {
      // websocket is closed.
      //alert("Connection is closed...");
    };

}


//some assisttan functions
//获取当前场景中所有mesh的id
function getAllmeshid() {
    //改进算法
    //遍历场景中的mesh数组，获取id及名称
    for (var i = 0; i < scene.meshes.length; i++) {
        var m = scene.meshes[i];
        var v = m.isVisible;
        // if (v == true) {
            if (m.state=="rec")//避免场景中其他初始mesh混入
            {
                sceneIds.push(parseInt(scene.meshes[i].id));
            }
            else {
                // console.log(m);
            }
        //}
    }
}

//比较两个数组的不同，求差
function getArrDifference(arr1, arr2) {

    var result = [];

    if (arr1.length != 0 || arr2.length != 0) {
          for(var i = 0; i < arr1.length; i++){

            var num = arr1[i]
            var isExist = false;
            
            for(var j = 0; j < arr2.length; j++){
                
                var n = arr2[j]
                
                if(n == num){
                    isExist = true;
                    break;

                }
            }
            if(!isExist){
                console.log('diff',num);
                result.push(num);
            }
        }
        return result;	
    }

    else {
        return result;
    }
}


//处理输入数据
//default 1.2 1.2 输入坐标的区间
function dataHandle(data, width, height) {

    if (realHeight == 0 && realWidth == 0) {
        realWidth = width;
        realHeight = height;
    }
        var i;
        for (i in data.tracks) {
            if (data.tracks[i].x >= -20 && data.tracks[i].x <= 20 && data.tracks[i].y >= -20 && data.tracks[i].y <= 20) {

                var z = data.tracks[i]["x"];
                var x = data.tracks[i]["y"];
                var h = data.tracks[i]["height"];
                // var confidence = data.tracks[i]["confidence"];
                var id = data.tracks[i]["id"];

                //存储此次输入的坐标id
                if(inputIds.indexOf(id)==-1)
                {
                    inputIds.push(id);
                }
                
                
                //在真实场景中的位置坐标
                pos = new BABYLON.Vector3(x, 1, -z);
        
                dataJudge(pos,id)
                
                
            }
        }
    
        removeMesh()
        
    }


function dataJudge(realPos,id) {
    //获取当前场景中存在的mesh的id
    getAllmeshid()

    if (sceneIds.indexOf(id) == -1)//id在当前场景数组中不存在,添加新的对象
    {

        // createShape(id, realPos);
        createShapePick(id, realPos);

    }
    else {
        

        changePos(id, realPos);//该id在现有场景数组中存在，更新其位置
        
        shpChange(id)

        judge(id);//对当前的位置做出判断

    }
    sceneIds = [];//清空当前的场景mesh数组
}

function removeMesh()
{
    getAllmeshid()//重新获取当前场景mesh数组，包含了新创建的mesh
    
    //场景数组中存在，但传入数据不存在，停止对其位置更新
    diffIds = getArrDifference(sceneIds,inputIds);

    if (diffIds.length != 0) {
        disposePos(diffIds);//清除不再更新的mesh
    }
    
    inputIds = [];//清空此次输入的meshid数组
    sceneIds = [];//清空场景中的meshid数组

  

}


//删除不再更新的mesh
function disposePos(ids) {

    for (var i = 0; i < ids.length; i++) {
        var m = scene.getMeshByID(ids[i].toString());
        m.isVisible=false;
        m.dispose();
        console.log("Dispose");
        var index = sceneIds.indexOf(ids[i]);
        //从场景数组删除
        if (index > -1) {
            sceneIds.splice(index, 1);
        }
    }
}         