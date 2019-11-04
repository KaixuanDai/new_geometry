var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);

        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        var sphereM = BABYLON.Mesh.CreateSphere("sphereM", 16, 1, scene);
            sphereM.position.set(0, 2, 0);
            sphereM.showBoundingBox = true;
    
        // Create a clone of sphereM called sphereA, and create instances of sphereA
        var sphereA = sphereM.clone("sphereA");
        var materialA = new BABYLON.StandardMaterial("materialA", scene); // A single green sphere appears; sphereA.
            materialA.diffuseColor = new BABYLON.Color3(0, 1, 0);
            sphereA.material = materialA;
            sphereA.position.set(-1, 0, 0);
            sphereA.showBoundingBox = true;
       
        var sphereAA = sphereA.createInstance("sphereAA"); // An instance of sphereA appears; sphereAA
            sphereAA.position.set(-2.25, -1, 0);
            sphereAA.showBoundingBox = true;
        var sphereAB = sphereA.createInstance("sphereAB"); // A second instance of sphereA appears; sphereAB
            sphereAB.position.set(-1.75, -1, 0);
            sphereAB.showBoundingBox = true;
    
        // // Create a clone of sphereM called sphereB, and create instances of sphereB
        var sphereB = sphereM.clone("sphereB");
        var materialB = new BABYLON.StandardMaterial("materialB", scene); // A single cyan sphere appears; sphereB.
            materialB.diffuseColor = new BABYLON.Color3(0, 1, 1);
            sphereB.material = materialB;
            sphereB.position.set(1, 0, 0);
        // /*
        //     This is where the tragic happens.
        // */
        var sphereBA = sphereB.createInstance("sphereBA"); // An instance of that cyan sphere appears, but sphereA, sphereAA, and sphereAB are no longer rendered.
            sphereBA.position.set(2.25, -1, 0);
            sphereBA.showBoundingBox = true;
        var sphereBB = sphereB.createInstance("sphereBB"); // A second instance of that green sphere appears.
            sphereBB.position.set(1.75, -1, 0);
            sphereBB.showBoundingBox = true;
    
        return scene;
    
}