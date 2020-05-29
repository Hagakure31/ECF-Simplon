const users = require('/users');

function createUser(req,res) {
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

    res.status(201).json(user);
}


module.exports = createUser;