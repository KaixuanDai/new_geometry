   //删除不再更新的mesh
    function disposePos(ids)
    {

        // ids=unique1(ids);
        
        for(var i=0;i<ids.length;i++)
        {
            var m = scene.getMeshByID(ids[i]);
            console.log("Dispose");
            m.dispose();

            path=[];
            
            line=scene.getMeshByName('line'+m.id);
            line.isVisible=false;
            // line.isDisposed=false;
            //line.isActiveMesh=false;
            
            


            var index = sceneIds.indexOf(ids[i]);
            if (index > -1) {
                    sceneIds.splice(index, 1);
                } 
        }
        
    }
    
    
    // function unique1(arr){
    //     var hash=[];
    //     for (var i = 0; i < arr.length; i++) {
    //        if(hash.indexOf(arr[i])==-1){
    //         hash.push(arr[i]);
    //        }
    //     }
    //     return hash;
    //   }