
// document.write("<script language=javascript src='/js/scene.js'></script>");



//循环创建新的mesh 可以根据需要设置创建的mesh
var time = 0;
function createShape(id, pos)//id，位置参数
{
    var greenMaterial = new BABYLON.StandardMaterial('greenMat', scene);
    greenMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 0);

    var yellowMaterial = new BABYLON.StandardMaterial('yellowMat', scene);
    yellowMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 255, 0);

    var blueMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    blueMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 0, 255);

    var blue1Material = new BABYLON.StandardMaterial('blueMat', scene);
    blue1Material.diffuseColor = BABYLON.Color3.FromInts(0, 0, 128);

    var redMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    redMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 0, 0);

    var cyanMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    cyanMaterial.diffuseColor = BABYLON.Color3.FromInts(0, 255, 255);

    var pinkMaterial = new BABYLON.StandardMaterial('blueMat', scene);
    pinkMaterial.diffuseColor = BABYLON.Color3.FromInts(255, 20, 147);

    var whiteMaterial = new BABYLON.StandardMaterial('whiteMat', scene);
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147, 112, 219);



    var box = [
        new BABYLON.Vector3(0, 0.5, 0),
        new BABYLON.Vector3(40, 0.5, 0),
        new BABYLON.Vector3(36.54, 0.5, 2),
        new BABYLON.Vector3(3.46, 0.5, 2),

    ];




    if (time == 0) {
        // var box_top = BABYLON.MeshBuilder.ExtrudePolygon(id, { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
        // box_top.material = blueMaterial;
        // box_top.scaling = new BABYLON.Vector3(20, 1, 1);
        // box_top.state = "ubox_top"
        // box_top.isPickable=false;

        // console.log(box_top.state);
        time = 1;
    }
    else if (time == 1) {
        var box_bottom = BABYLON.MeshBuilder.ExtrudePolygon(id, { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
        box_bottom.material = redMaterial;
        // box_bottom.scaling = new BABYLON.Vector3(20, 1, 1);
        box_bottom.state = "ubox_bottom";
        box_bottom.isPickable=false;


        time = 2;
    }
    else if (time == 2) {
        
        var box_right = BABYLON.MeshBuilder.ExtrudePolygon(id, { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
        box_right.material = yellowMaterial;
        // box_right.scaling = new BABYLON.Vector3(13, 1, 1);
        box_right.rotation = new BABYLON.Vector3(0, Math.PI / 2, 0);
        box_right.state = "ubox_right";
        box_right.isPickable=false;
        box_right.rotation = new BABYLON.Vector3(0 , -Math.PI*5.32 / 8, 0);

       
        time = 3;
    }
    else if (time == 3) {

        var box_left = BABYLON.MeshBuilder.ExtrudePolygon(id, { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
        box_left.material = greenMaterial;
        // box_left.scaling = new BABYLON.Vector3(13, 1, 1);
        box_left.rotation = new BABYLON.Vector3(0, Math.PI / 2, 0);
        box_left.state = "ubox_left";
        box_left.isPickable=false;
        box_left.rotation = new BABYLON.Vector3(Math.PI , -Math.PI*5.32 / 16, 0);

        time = 0;

    }
    else {
        alert("error in creating");
    }
    console.log("Create");
}


