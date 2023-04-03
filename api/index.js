const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json()); //without it 500 internal error 
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
app.get('/test', (req,res)=> {
    res.json('test ok');
});

mongoose.connect(pr)
app.post('/register', (req,res) => {
    const {name, email, password} = req.body;
    res.json({name, email, password});
})
app.listen(4000);
//Tyagi@456
