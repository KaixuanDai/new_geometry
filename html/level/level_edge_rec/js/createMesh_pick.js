//循环创建新的mesh 可以根据需要设置创建的mesh
var time = 0;
function createShapePick(id, pos)//id，位置参数
{
       
    var whiteMaterial = new BABYLON.StandardMaterial('whiteMat', scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147,112,219);

    var cir = BABYLON.MeshBuilder.CreateCylinder(id, {height:0.2, diameter:3,tessellation: 6}, scene);         
    cir.material=whiteMaterial;           
    cir.state="users";
    cir.isPickable=false;

    console.log("Create Circle");



    // var tri=[
    //     new BABYLON.Vector3(0,0.5,0),
    //     new BABYLON.Vector3(0,0.5,1),
    //     new BABYLON.Vector3(1,0.5,0),
    // ];

    // var box=[
    //     new BABYLON.Vector3(0,0.5,0),
    //     new BABYLON.Vector3(1.4,0.5,0),
    //     new BABYLON.Vector3(1.4,0.5,1.4),
    //     new BABYLON.Vector3(0,0.5,1.4),

    // ];
    
    // var para=[
    //     new BABYLON.Vector3(0,0.5,0),
    //     new BABYLON.Vector3(-2,0.5,0),
    //     new BABYLON.Vector3(-3,0.5,1),
    //     new BABYLON.Vector3(-1,0.5,1),

    // ];
    // var i = id.toString();
    // if (time == 0) {    
    //     var tri1 = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:tri, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     tri1.material=whiteMaterial;
    //     // tri1.position=new BABYLON.Vector3(1,1,1)
    //     tri1.scaling = new BABYLON.Vector3(4, 1, 4);
    //     tri1.rotation = new BABYLON.Vector3(0, -Math.PI,0);
    //     tri1.state="tri1"
        
    //     tri1.position.y = 0.5;
    //     console.log(tri1.state);
    //     time = 1;
    // }
    // else if (time == 1) {
    //     var tri2 = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:tri, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     tri2.material=whiteMaterial;
    //     // tri2.position=new BABYLON.Vector3(5,1,1)
    //     tri2.scaling = new BABYLON.Vector3(2/1.4*2, 1, 2/1.4*2);
    //     tri2.rotation = new BABYLON.Vector3(0, -Math.PI*3/4,0);
    //     tri2.state="tri2"   
    //     tri2.position.y = 0.5;
    //     console.log(tri2.state);
        
    //     time = 2;
    // }
    // else if (time == 2) {
        
    //     var tri3 = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:tri, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     tri3.material=whiteMaterial;
    //     // tri3.position=new BABYLON.Vector3(-3,1,1)
    //     tri3.scaling = new BABYLON.Vector3(2*1.4*2, 1, 2*1.4*2);
    //     tri3.rotation = new BABYLON.Vector3(0, Math.PI*3/4,0);
    //     tri3.state = "tri3";
    //     tri3.position.y = 0.5;
    //     console.log(tri3.state);

    //     time = 3;
    // }
    // else if (time == 3) {
        
    //     var tri4 = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:tri, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     tri4.material=whiteMaterial;
    //     // tri4.position=new BABYLON.Vector3(5,1,1)
    //     tri4.scaling = new BABYLON.Vector3(2*1.4*2, 1, 2*1.4*2);
    //     tri4.rotation = new BABYLON.Vector3(0, Math.PI*3/4,0);
    
    //     tri4.state = "tri4";
    //     tri4.position.y = 0.5;
    //     time = 4;
    //     console.log(tri4.state);

    // }
    // else if (time == 4) {
        
    //     var tri5 = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:tri, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     tri5.material=whiteMaterial;
    //     // tri5.position=new BABYLON.Vector3(-1,1,3)
    //     tri5.scaling = new BABYLON.Vector3(2/1.4*2, 1, 2/1.4*2);
    //     tri5.rotation = new BABYLON.Vector3(0, Math.PI*3/4,0);
    //     console.log(tri5.state);
        
    //     tri5.state = "tri5";
    //     tri5.position.y = 0.5;
    //     time = 5;
    // }
    // else if (time == 5) {
        
    //     var box = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:box, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     box.material=whiteMaterial;
    //     // box.position=new BABYLON.Vector3(1,1,5)
    //     box.scaling = new BABYLON.Vector3(1*2, 1, 1*2);
    //     box.rotation = new BABYLON.Vector3(0, Math.PI*3/4,0);
        
    //     box.state = "box";
    //     box.position.y = 0.5;
    //     time = 6;
    //     console.log(box.state);

    // }

    // else if (time == 6) {
        
    //     var para = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:para, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
    //     para.material=whiteMaterial;
    //     // para.position=new BABYLON.Vector3(1,1,-3)
    //     para.scaling = new BABYLON.Vector3(1*2, 1, 1*2);
    //     para.rotation = new BABYLON.Vector3(0, Math.PI/2,0);
    
        
    //     para.state = "para";
    //     para.position.y = 0.5;
    //     time = 0;
    //     console.log(para.state);

    // }
    // else {
    //     alert("error in creating");
    // }
    // console.log("Create");
}


