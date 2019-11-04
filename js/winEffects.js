//还需要加入一个转到下一个界面的函数

function winwin(){
    //load the sound
    var volume = 0.5;
    var playbackRate = 1; //播放速率
    var winmusic = new BABYLON.Sound("winmusic","/video/Congratsbell.mp3",scene); 
    
    winmusic.onended = function(){
        if(volume < 2){
            volume +=0.5;
            winmusic.setVolume(volume);
        }
    }//第二遍放的时候声音变大

    var light0 = new BABYLON.PointLight("omni",new BABYLON.Vector3(0,2,8),scene);
    
    var emitter1 = BABYLON.Mesh.CreateBox("emitter1",0.01,scene);
    emitter1.isVisible=false;

    

    //create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles",4000,scene);
    
    particleSystem.particleTexture = new BABYLON.Texture("/picture/flare0.png",scene);
    particleSystem.emitter = emitter1;
    particleSystem.minEmitBox = new BABYLON.Vector3(-0.1,0,0);
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.1,0,0);

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;
    
    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -1, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
    particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 5;
    particleSystem.maxEmitPower = 9;
    particleSystem.updateSpeed = 0.005;
    // Start the particle system
    particleSystem.start();

    //运动轨迹
    var dx=0;
    scene.registerBeforeRender(function(){
        dx += 0.05;
        emitter1.position.x = -6+dx;
        emitter1.position.z = 0;
        //write "w"
        if(emitter1.position.x<=-5)
        {
            emitter1.position.y = -5*emitter1.position.x-23; 
        }
        if(emitter1.position.x>-5 && emitter1.position.x<-4)
        {
            emitter1.position.y = 5*emitter1.position.x+27;
        }
        if(emitter1.position.x>=-4 && emitter1.position.x<-3)
        {
            emitter1.position.y = -5*emitter1.position.x-13;
        }
        if(emitter1.position.x>=-3 && emitter1.position.x<=-2)
        {
            emitter1.position.y = 5*emitter1.position.x+17;
        }
        //write "I"
        if(emitter1.position.x>-2 && emitter1.position.x<-0.5)
        {
            emitter1.position.y = -20;
        }
        if(emitter1.position.x>-0.5 && emitter1.position.x<=0.5)
        {
            emitter1.position.y = -5*emitter1.position.x+4.5;
        }
        if(emitter1.position.x>0.5 && emitter1.position.x<2)
        {
            emitter1.position.y = -20;
        }
        //write "N"
        if(emitter1.position.x>=2 && emitter1.position.x<3)
        {
            emitter1.position.y = 5*emitter1.position.x-8;
        }
        if(emitter1.position.x>=3 && emitter1.position.x<4)
        {
            emitter1.position.y = -5*emitter1.position.x+22;
        }
        if(emitter1.position.x>=4 && emitter1.position.x<=5)
        {
            emitter1.position.y = 5*emitter1.position.x-18;
        }
        if(emitter1.position.x>5)
        {
            emitter1.position.x=-6;
            dx=0;
        }


        
    });
}