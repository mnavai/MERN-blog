const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blogger:8XoYG0n44rxta3fX@cluster0.2tiperl.mongodb.net/?retryWrites=true&w=majority');

app.post('/register',(req,res) =>{
    const {username, password} = req.body;
    res.json({requestData: {username, password}});
});

app.listen(4000);
// blogger 8XoYG0n44rxta3fX
//mongodb+srv://blogger:8XoYG0n44rxta3fX@cluster0.2tiperl.mongodb.net/?retryWrites=true&w=majority
