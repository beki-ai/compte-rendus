const express =require('express');
const app=express();
const port=8001;
app.use(express.json());//middleware pour analyser les requettes JSON
app.use(express.urlencoded({extended:true}));

//middelare de journalisation 
const loggerMiddelware=(req,res,next)=>{
    const now=new Date();
    const date=now.toLocaleDateString();
    const time=now.toLocaleTimeString();
    console.log(`[${date}  ${time} ${req.method} ${req.path}`);
    next()
};


    //utiliser le middelware dans l'applications 
    app.use(loggerMiddelware);


    // exemple de route pour tester le middelware 
    app.get('/',(req,res)=>{
        res.send('Exercice 1!');
    });
    app.listen(port,()=>{
        console.log(`application exemple a l ecoute sur le port ${port}`)});
        