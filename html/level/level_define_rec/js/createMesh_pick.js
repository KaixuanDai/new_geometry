//循环创建新的mesh 可以根据需要设置创建的mesh
var time = 0;
function createShapePick(id, pos)//id，位置参数
{
       
    var whiteMaterial = new BABYLON.StandardMaterial('whiteMat', scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147,112,219);

    var cir = BABYLON.MeshBuilder.CreateCylinder(id, {height:0.2, diameter:3,tessellation: 6}, scene);         
    cir.material=whiteMaterial;           
    cir.state="rec";
    cir.isPickable=false;

    console.log("Create User!");

    
}


