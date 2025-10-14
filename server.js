import express from 'express'
const app = express()

app.get('/',(req,res)=>{
    res.status(200).json({message:"Hello Saurabh Singh 4"})
})

const port=3000
app.listen(port,()=>{
    console.log("Your Response ")
})