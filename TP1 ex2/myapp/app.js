const express =require('express');
const app=express();
const port=3000;
app.use(express.json());//middleware pour analyser les requettes JSON
app.use(express.urlencoded({extended:true}));

    //jusqu'a la cette partie doit figurer dans n'importe quel projet


let users=[
    {id:1,name:'alice',email:'alice@example.com'},
    {id:2,name:'bob',email:'bob@example.com'}
    
];
//get all uers 
app.get('/users',(req,res)=>{
    res.json(users);
});


//get a user by id 
app.get('/users/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id));
    if(!user)return res.status(404).send('user not found');
    res.json(user);

});


//POST a new user 
app.post('/users',(req,res)=>{
    const newUser ={id:users.length+1,...req.body}
    users.push(newUser);
    res.json(newUser);
});


//Put to update user
app.post('/users/:id',(req,res)=>{
    let user=users.find(u=>u.id===parseInt(req.params.id));
    if(!user)return res.status(404).send('User not found');
    user={...user,...req.body};
    res.json(user);

});


//Delete a user
app.delete('/users/:id',(req,res)=>{
    const userIndex=users.findIndex(u=>u.id===parseInt(req.params.id));
    if(userIndex===-1)return res.status(404).send('User Not Found');
    users.splice(userIndex,1);
    res.json({message:'User deleted'});

});





app.listen(port,()=>{
    console.log(`application exemple a l ecoute sur le port ${port}`)});