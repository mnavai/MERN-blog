const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.post('/register',(req,res) =>{
    res.json('test passed new');
});

app.listen(4000);
