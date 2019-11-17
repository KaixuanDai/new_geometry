    
// document.write("<script language=javascript src='/js/scene.js'></script>");
//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
}     
    

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
    whiteMaterial.diffuseColor = BABYLON.Color3.FromInts(147,112,219);

    var randMaterial = new BABYLON.StandardMaterial('randMat', scene);
    randMaterial.diffuseColor = BABYLON.Color3.Random();

    var tri=[
        new BABYLON.Vector3(0,0.5,0),
        new BABYLON.Vector3(0,0.5,1),
        new BABYLON.Vector3(1,0.5,0),
    ];

    var box=[
        new BABYLON.Vector3(0,0.5,0),
        new BABYLON.Vector3(1.4,0.5,0),
        new BABYLON.Vector3(1.4,0.5,1.4),
        new BABYLON.Vector3(0,0.5,1.4),

    ];
    
    var para=[
        new BABYLON.Vector3(0,0.5,0),
        new BABYLON.Vector3(-2,0.5,0),
        new BABYLON.Vector3(-3,0.5,1),
        new BABYLON.Vector3(-1,0.5,1),

    ];
   
    var i = id;
    
    var hl = new BABYLON.HighlightLayer("hl1", scene);

    var alpha = 0;
    scene.registerBeforeRender(() => {
        alpha += 0.1;

        hl.blurHorizontalSize = 0.3 + Math.cos(alpha) * 0.6 + 0.6;        
        hl.blurVerticalSize = 0.3 + Math.sin(alpha / 3) * 0.6 + 0.6;
    });

    if (time == 0) {    
        
        var tri = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:tri, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
        tri.material=randMaterial;
        tri.position.y = 0.5;
        
        tri.scaling = new BABYLON.Vector3(randomNum(4,8), 1, randomNum(4,8));

        tri.rotation = new BABYLON.Vector3(0, Math.random()*Math.PI,0);
        tri.state="tri"
        
                
        hl.addMesh(tri, BABYLON.Color3.Random());
        
        
        time = 1;

    }
    else if (time == 1) {

        var box = BABYLON.MeshBuilder.ExtrudePolygon(i,{shape:box, depth: 0.2,sideOrientation: BABYLON.Mesh.DOUBLESIDE,updatable:true}, scene);
        box.material=randMaterial;
        
        side=randomNum(2,4);

        box.scaling = new BABYLON.Vector3(side, 1, side);
        box.rotation = new BABYLON.Vector3(0, Math.random()*Math.PI,0);
        box.state = "box";
        box.position.y = 0.5;

        hl.addMesh(box, BABYLON.Color3.Random());

        time = 2;

    }
    else if (time == 2) {
        
        var rec = BABYLON.MeshBuilder.ExtrudePolygon(i, { shape: box, depth: 0.2, sideOrientation: BABYLON.Mesh.DOUBLESIDE, updatable: true }, scene);
        
        rec.material = randMaterial;
        rec.position.y = 0.5;
        
        lon_side=randomNum(4,6);
        sht_side=randomNum(2,3);

        rec.scaling = new BABYLON.Vector3(lon_side, 1, sht_side);
        rec.rotation = new BABYLON.Vector3(0, Math.random()*Math.PI, 0);
        
        rec.state = "rec";
        hl.addMesh(rec, BABYLON.Color3.Random());

    
        
        time = 3;
    }
    else if (time == 3) {
        var cir = BABYLON.MeshBuilder.CreateCylinder(i, {height:0.2, diameter:randomNum(3,6),tessellation: 99}, scene);         
        cir.material=randMaterial;
        cir.position.y=0.5;
        
        cir.state="cir";
        hl.addMesh(cir, BABYLON.Color3.Random());

        time = 0;

    }
    else {
        alert("error in creating");
    }
    console.log("Create");
}


