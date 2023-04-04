import express from 'express'
const app=express();
const  port =3001;


app.get('/',(req,res)=>{
    res.send("hello this is my first commit");
    console.log("someone search at the home space");
})

app.listen(port, ()=>{
    console.log(`app is listening at ${port}`)
})