const express=require('express');
const app=express();
const port=8000;

app.listen(port,function(err){
           if(err)
           {
             console.log(`Error : ${err}`);
             return;
           }
           console.log(`server is reunning on port: ${port}`);
});