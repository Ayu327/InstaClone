const express = require('express')
const app = express()
const PORT = 5000
//BuCB77KjtvI5ymqv
const customMiddleware = (req,res,next)=>{
    console.log("middleware there")
    next()
}
app.use(customMiddleware)

app.get('/',(req,res)=>{
    console.log("home")
    res.send("Hello World")
})
app.get('/about',customMiddleware,(req,res)=>{
    console.log("homefdf")
    res.send("about World")
})




app.listen(PORT ,()=>{
    console.log("Sever is running on", PORT)
})