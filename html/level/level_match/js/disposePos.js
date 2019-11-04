   //删除不再更新的mesh
    function disposePos(ids)
    {
        
        for(var i=0;i<ids.length;i++)
        {
           var m = scene.getMeshByID(ids[i]);
            console.log("Dispose");
            m.dispose();
            var index = sceneIds.indexOf(ids[i]);
            if (index > -1) {
                    sceneIds.splice(index, 1);
                } 
        }
        
    }