//实际场地长宽
var realWidth = 2.5;
var realHeihgt = 3;
//长宽缩放的尺度
var scaleW = 40 / realWidth;
var scaleH = 30 / realHeihgt;

//var box;


//计算转换矩阵
var matrix = BABYLON.Matrix.Compose(

    new BABYLON.Vector3(scaleW, 1, scaleH),//需要变动的就是x z 轴的比例，要根据 交互区域 与平面的大小决定每个方向上的缩放比例

    BABYLON.Quaternion.Identity(),//旋转矩阵，暂不考虑，为单位阵

    new BABYLON.Vector3(0, 0, 0),//平移向量，构建平移矩阵

);

//更新已有mesh的位置
//更新已有mesh的位置
function changePos(id, pos)//id，位置参数
{
    var m = scene.getMeshByID(id);

    m.setAbsolutePosition(BABYLON.Vector3.TransformCoordinates(pos, matrix));//坐标的投影变换


    //getAngle(m.position.x,m.position.z+13.5,0.25,-13.5,16,-13.5);
    var angle=getAngle(m.position.x-0.25,m.position.z+13.5);

    console.log("Change");

    showText(parseInt(angle).toString(),m);

    //createLink(m,pos);

}



function getAngle(x, y) {
    var l = Math.sqrt(x*x + y*y);
    var a = Math.acos(x/l);
    var ret = a * 180 / Math.PI; //弧度转角度，方便调试
    if (y < 0) {
        return 360 - ret;
    }
    console.log(ret);
    return ret;
}

function showText(text,mesh)
    {
    
    //Create dynamic texture
    var textureResolution = 512;
	var textureGround = new BABYLON.DynamicTexture("dynamic texture", {width:512, height:256}, scene); 
	var textureContext = textureGround.getContext();
	
	var materialGround = new BABYLON.StandardMaterial("Mat", scene);    				
	materialGround.diffuseTexture = textureGround;
	
    mesh.material = materialGround;
    
	
    //Add text to dynamic texture
    var font = "bold 120px monospace";
    
    textureGround.drawText(text+'度', 135, 150, font, "yellow", "blue", false, true);
	

    }

    