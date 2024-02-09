const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User')
const bcrypt = require('bcryptjs')
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10)
const secret = 'dsjfgfhdgdgdfgkdfbndvjbd'

app.use(cors({credentials:true, origin:'http://localhost:3000',methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
allowedHeaders: ['Content-Type', 'Authorization']}));
app.use(express.json());
app.use(cookieParser())

mongoose.connect('mongodb+srv://blogger:8XoYG0n44rxta3fX@cluster0.2tiperl.mongodb.net/?retryWrites=true&w=majority');

app.post('/register',async (req,res) =>{
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt),
        })
        res.json(userDoc)
    } catch(e){
        console.log(e)
        res.status(400).json(e)
    }
});

app.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username:username})
    const passOk = bcrypt.compareSync(password, userDoc.password)
    
    if (passOk){
        jwt.sign({username, id:userDoc._id},secret, {}, (err,token) => {
            if (err) throw err;
            res.cookie('token',token).json('ok');
        });
    } else {
        res.status(400).json('wrong credential')
    }
})

app.get('/profile', (res,req) => {
    const {token} = req.cookies
    res.json(req.cookies)
})

app.listen(4000);

