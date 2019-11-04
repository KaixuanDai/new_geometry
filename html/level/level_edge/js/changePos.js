    //实际场地长宽
    var realWidth=2.5;
    var realHeihgt=3;
    //长宽缩放的尺度
    var scaleW=40/realWidth;
    var scaleH=30/realHeihgt;
    
    //var box;


    //计算转换矩阵
    var matrix = BABYLON.Matrix.Compose(
      
        new BABYLON.Vector3(scaleW,1,scaleH),//需要变动的就是x z 轴的比例，要根据 交互区域 与平面的大小决定每个方向上的缩放比例
        
        BABYLON.Quaternion.Identity(),//旋转矩阵，暂不考虑，为单位阵
        
        new BABYLON.Vector3(0,0,-10),//平移向量，构建平移矩阵
    
    );

//更新已有mesh的位置
    //更新已有mesh的位置
    function changePos(id,pos)//id，位置参数
            {
                var m = scene.getMeshByID(id);
                
                m.setAbsolutePosition(BABYLON.Vector3.TransformCoordinates(pos, matrix));//坐标的投影变换
                
                console.log("Change");

            }
    