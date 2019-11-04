
//待测试 2019年4月30日23点19分 图形的更换待测试


function shpChange(id) {
    var inMesh = scene.getMeshByID(id);

    // var pos = m.getAbsolutePosition();
    // var state = inMesh.state;
    // inMesh=scene.getMeshByID('box2');

    var origin = inMesh.position;//起点
    var forward = new BABYLON.Vector3(1, 0, 1);//出射方向
    var length = 2;//长度
    var ray = new BABYLON.Ray(new BABYLON.Vector3(origin.x, origin.y - 0.1, origin.z), forward, length);

    // let rayHelper = new BABYLON.RayHelper(ray);
    // rayHelper.show(scene);

    var pickinfo = scene.pickWithRay(ray);

    var randMaterial = new BABYLON.StandardMaterial('randMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();

    if (pickinfo.hit) {

        var pickMesh = pickinfo.pickedMesh;//被碰撞的形状

        if (pickMesh.state != inMesh.state.slice(1)) {
            if (pickMesh.id == 'box' || pickMesh.id == 'tri1' || pickMesh.id == 'tri2' || pickMesh.id == 'tri3' || pickMesh.id == 'tri4' || pickMesh.id == 'tri5' || pickMesh.id == 'para') {
                // var tempMesh=inMesh;

                // inMesh.dispose(true,false);

                // tempMesh.isVisual=false;
                if (true)//当用户为初始状态圆时 选了之后消失
                {

                    newMesh = pickMesh.clone();//直接克隆一个 改变形状

                    // inMesh.id=id.toString();

                    newMesh.id = id;
                    newMesh.state = "u".concat(pickMesh.state);

                    inMesh.dispose();
                    //inMesh.id=id.toString();
                    // console.log(newMesh);

                    // inMesh.dispose();
                    // inMesh.isVisual=false;
                    // console.log(tempMesh);


                    //inMesh.isVisual=false;

                    console.log('shape change')
                    var music = new BABYLON.Sound("music", "../../audio/win2.mp3",scene, null, { loop: false, autoplay: true, spatialSound: true });

                    //pickMesh.id=99999;
                    //pickMesh.dispose();

                }
                // else//如果不是初始圆，则说明是选了的形状要互换一下
                // {
                //     inMesh=pickMesh.clone();
                //     inMesh.id=id;

                //     pickMesh=tempMesh.clone();
                //     // pickMesh.id=99999;
                // }

            }

            // print(inMesh);

        }


        //afterShpChange(pickMesh)

        // if(pickMesh.id==inMesh.state)
        // {
        //     console.log(pickMesh.id);
        //     pickMesh.material=redMaterial;
        //     afterJudge(id)
        // }




        // if (m.state == inMesh.state) {

        //     m.material = redMaterial
        //     console.log(m.name);
        // }
        // console.log(m.name);


    }
}


