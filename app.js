const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT =process.env.PORT || 5000
const {MONGOURI} = require('./Server/config/keys')




mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongoose")
})
mongoose.connection.on('error',(err)=>{
    console.log("error connecting",err)
})

require('./Server/models/user')
require('./Server/models/post')

app.use(express.json())
app.use(require('./Server/routes/auth'))
app.use(require('./Server/routes/post'))


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
}

if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}

app.listen(PORT ,()=>{
    console.log("Sever is running on", PORT)
})