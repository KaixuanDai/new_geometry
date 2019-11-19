//循环创建新的mesh 可以根据需要设置创建的mesh
function createShapePick(id)//id，位置参数
{
       
    var whiteMaterial = new BABYLON.StandardMaterial('whiteMat', scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147,112,219);

    var randMaterial = new BABYLON.StandardMaterial('redMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();
    
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


    var hl = new BABYLON.HighlightLayer("hl1", scene);

    var alpha = 0;
    scene.registerBeforeRender(() => {
        alpha += 0.1;

        hl.blurHorizontalSize = 0.3 + Math.cos(alpha) * 0.6 + 0.6;        
        hl.blurVerticalSize = 0.3 + Math.sin(alpha / 3) * 0.6 + 0.6;
    });

    var cir = BABYLON.MeshBuilder.CreateCylinder(id, options, scene);         
    cir.material=randMaterial;           
    cir.state="users";
    cir.isPickable=false;
    cir.rotation = new BABYLON.Vector3(Math.PI,0,0);
    
    hl.addMesh(cir, BABYLON.Color3.Random());
    
    console.log("Create Circle");
    
    var lineMesh=createLink(cir);

    // var cir = BABYLON.Mesh.MergeMeshes([cir, lineMesh]);


}


function createLink(mesh) {


    // put positions into path 
    var path = [];
    path.push(new BABYLON.Vector3(0.4, 0.1, -13.5));
    path.push(mesh.position);

    // path.push(box1.position);
    // path.push(box3.position);


    var linesMesh = BABYLON.Mesh.CreateLines('line'+mesh.id, path, scene, true);
    linesMesh.color = new BABYLON.Color3.Red;
    linesMesh.state='line'+mesh.id;



    scene.registerAfterRender(function () {
        
        
        //path = [];
    
        updatePath(mesh);

        if(path.length>1)
        {

            //linesMesh = BABYLON.Mesh.CreateLines(null, path, null, null, linesMesh);
            linesMesh = BABYLON.Mesh.CreateLines('line'+mesh.id,path, scene, true, linesMesh);
        
        }
        
    });


    return linesMesh;

}

    // your custom updatePath funcion
    var updatePath = function (mesh) {
        
        path = [];
        path.push(new BABYLON.Vector3(0.25, 0.1, -13.5));
        path.push(mesh.position);

        // path.push(box1.position);
        // path.push(box3.position);


    };

    

   
