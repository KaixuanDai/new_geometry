//循环创建新的mesh 可以根据需要设置创建的mesh
function createShapePick(id)//id，位置参数
{
       
    var whiteMaterial = new BABYLON.StandardMaterial('whiteMat', scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147,112,219);


    var faceUV = new Array(6);

       //set all values to zero
    for (var i = 0; i < 6; i++) {
        faceUV[i] = new BABYLON.Vector4(0, 0, 0, 0);
    }

    //overwrite wanted face with sprite coordinates
    //faceUV[4] = new BABYLON.Vector4(1,1, 0, 0)

    var options = {
        // faceUV: faceUV,
         wrap: true,
        // topBaseAt: 0, 
        // bottomBaseAt: 4,
        
        height:0.2, 
        diameter:3,
        tessellation: 6
    };


    var cir = BABYLON.MeshBuilder.CreateCylinder(id, options, scene);         
    cir.material=whiteMaterial;           
    cir.state="users";
    cir.isPickable=false;
    cir.rotation = new BABYLON.Vector3(Math.PI,0,0);
    
    console.log("Create Circle");
    
    createLink(cir);

}


function createLink(mesh) {


    // put positions into path 
    var path = [];
    path.push(new BABYLON.Vector3(0.25, 0.1, -13.5));
    path.push(mesh.position);

    // path.push(box1.position);
    // path.push(box3.position);


    var linesMesh = BABYLON.Mesh.CreateLines('line'+mesh.id, path, scene, true);
    linesMesh.color = new BABYLON.Color3.Red;
    linesMesh.state='line'+mesh.id;



    scene.registerAfterRender(function () {
        
        
        //path = [];
    
        updatePath(mesh);
        //console.log(path[0],path[1]);
        
        // getAngle(true_cir_center.position.x,true_cir_center.position.z,mesh.position.x,mesh.position.z,true_cir_bottom.position.x,true_cir_bottom.position.z);
        
        //getAngle(mesh.position.x,mesh.position.z,0.25,-13.5,16,-13.5);

        if(path.length>1)
        {

            //linesMesh = BABYLON.Mesh.CreateLines(null, path, null, null, linesMesh);
            linesMesh = BABYLON.Mesh.CreateLines('line'+mesh.id,path, scene, true, linesMesh);
        
        }
        
    });

}

    // your custom updatePath funcion
    var updatePath = function (mesh) {
        
        path = [];
        path.push(new BABYLON.Vector3(0.25, 0.1, -13.5));
        path.push(mesh.position);

        // path.push(box1.position);
        // path.push(box3.position);


    };

    