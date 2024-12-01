const express=require('express');//importer le module express
const app=express();//créer une instance d'application express
const port=8000;//définir le port d'ecoute 
//définir la route pour laracine 
app.get('/',(req,res)=>{
    res.send('Hello World!');
//répondre avec"hello world!

});
//écouter sur le port défini
app.listen(port,()=>{
    console.log(`application exemple al ecoute sur le port ${port}` );
});