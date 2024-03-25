const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname,"public")))
app.use(cors())
app.use(express.json())

const port = 8000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "redsox"
})

app.post('/add_user', (req,res)=>{
    const sql = "INSERT INTO users (`firstName`,`lastName`, `gender`, `email`, `password`) VALUES (?,?,?,?,?)"
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.gender,
        req.body.email,
        req.body.password
    ]

    db.query(sql, values, (err, result)=>{
        if(err) return res.json({message: 'An error has occured' + err})
        return res.json({success:"User added successfully"})
    })
})


app.listen(port, ()=>{
    console.log("listening on port: " + port)
})