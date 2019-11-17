//循环创建新的mesh 可以根据需要设置创建的mesh
var time = 0;
function createShapePick(id, pos)//id，位置参数
{

    var randMaterial = new BABYLON.StandardMaterial('randMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();
    var hl = new BABYLON.HighlightLayer("hl1", scene);

    var alpha = 0;
    scene.registerBeforeRender(() => {
        alpha += 0.1;

        hl.blurHorizontalSize = 0.3 + Math.cos(alpha) * 0.6 + 0.6;        
        hl.blurVerticalSize = 0.3 + Math.sin(alpha / 3) * 0.6 + 0.6;
    });
       
    var whiteMaterial = new BABYLON.StandardMaterial('whiteMat', scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147,112,219);

    var cir = BABYLON.MeshBuilder.CreateCylinder(id, {height:0.2, diameter:3,tessellation: 6}, scene);         
    cir.material=randMaterial;           
    cir.state="users";
    cir.isPickable=false;

    //hl.addMesh(cir, BABYLON.Color3.Random());


    console.log("Create Circle");

}


