const express = require('express');
const users = require("./users");
const bodyParser = require('body-parser');
// const createUser = require('/createUser');
const server = express();
server.use(express.json());
// server.use(express.urlencoded({ extended: true })); 

server.use(bodyParser.json());


server.use(express.static('public'));

server.get('/', (req, res) => {
    
    res.sendFile(__dirname +'/public/accueil.html');

});

server.post('/inscription.html', (req,res) => {
    console.log(req.body);
    const user = {
        id: users.length + 1,
        email: req.body.email,
        psw: req.body.psw,
        name: req.body.name,
        surname: req.body.surname,
        birthdate: req.body.birthdate,
        delete: false
    }
    users.push(user);
    
    res.send(user);
    console.log(user);
});

server.get('/inscription', (req, res) => {
    res.sendFile(__dirname +'/public/inscription.html');
});



// server.post('/inscription.html', createUser);


const port = process.env.PORT || 8088;
server.listen(port, () => console.log(`Listening on port ${port}`));