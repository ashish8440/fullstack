const express = require('express');
const router = express.Router();
const uuid = require('uuid');

let users = require('./../users');

//get all the users details
router.get('/', (req, res) => {
    res.status(200).json(users);
});


//get the user by id

router.get('/:id', (req, res) => {
    const found =  users.some(user => user.id === parseInt(req.params.id));
    console.log(found);
    if(found) {
        res.send(users.filter(user => user.id === parseInt(req.params.id)));
    } else {
        res.status(403).send({status: 'error'});
    }
});

//create the new user

router.post('/', (req, res) => {

    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    }

    if(!newUser.name || !newUser.email) {
        res.status(400).json({status: 'error'});
    } else {
        // console.log('successs');
        users.push(newUser);
    }

    res.json(users);
});

//delete the user
router.delete('/:id', (req, res) => {
    const found = users.some(user=> user.id == parseInt(req.params.id));

    if(found) {
        users = users.filter(user=> user.id !== parseInt(req.params.id));

        res.status(200).json({status:'success', users});
    } else {
        res.status(400).json({status:'error'});
    }
});

//update the user 
router.put('/:id', (req, res) => {
    const found = users.some(user => user.id === parseInt(req.params.id));
    
    if(found) {
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)) {
                user.name = req.body.name;
                user.email = req.body.email;
                res.json({msg: 'success', users});
            }
        })
    } else {
        res.status(400).json({status: 'error', msg: 'not found'});
    }
});

module.exports = router;