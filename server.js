const express = require('express');
const bodyParser = require('body-parser');
const users = require("./users");
// const createUser = require('/createUser');
const server = express();

server.use(bodyParser.json({ limit: '15mb', type: 'application/json' }));
server.use(bodyParser.urlencoded({ extended: false }));

server.use(express.static(__dirname + '/public'));

server.set('view engine', 'ejs');

server.get('/connexion', (req, res) => {
    res.render('connexion', {
        isUserRegistred: req.query.isUserRegistred
    });
});

// server.post('connexion', (req, res) => {
    
// })
server.post('/inscription', (req, res) => {
    console.log(req.body);
    const errors = [];

    // [
    //     [ 'email', 'azerty@gmail.com' ],
    //     [ 'psw', 'azerty' ],
    //     [ 'name', 'Youssouf' ],
    //     [ 'surname', 'Messaad' ],
    //     [ 'birthdate', '1995-09-12' ]
    //   ]
    console.log(Object.entries(req.body));
    for ([field, value] of Object.entries(req.body)) {
        if (!value) {
            errors.push(field);
        }
    }
    if (errors.length) {
        res.render('inscription', {
            errors
        });

    } else {
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

        res.redirect("/connexion?isUserRegistred=true");

        console.log(user);

    }
    console.log(errors);


});

server.get('/inscription', (req, res) => {
    res.render('inscription', {errors: []}
    );
});


const port = process.env.PORT || 8088;
server.listen(port, () => console.log(`Listening on port ${port}`));


// for (const i of [1, 2, 3]) {
    //     console.log('i = ', i);
    // }

    // for (const obj of [{ id: 1, type:'type1' }, { id: 2, type:'type2' }, {id: 3, type:'type3'}]) {
    //     console.log('obj = ', obj);
    // }

    // for ({id} of [{ id: 1, type:'type1' }, { id: 2, type:'type2' }, {id: 3, type:'type3'}]) {
    //     console.log('id = ', id);
    // }

    // for (array of [
    //     ['key1', 'value1', 'type1'],
    //     ['key2', 'value2', 'type2'],
    //     ['key3', 'value3', 'type3'],
    // ]) {
    //     console.log('array = ', array);
    // }

    // for ([key, value] of [
    //     ['key1', 'value1', 'type1'],
    //     ['key2', 'value2', 'type2'],
    //     ['key3', 'value3', 'type3'],
    // ]) {
    //     console.log('key = ', key);
    //     console.log('value = ', value);
    // }