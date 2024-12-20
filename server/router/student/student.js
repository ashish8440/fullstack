const express = require('express');
const routerStudent = express.Router();

/* check student connection */
routerStudent.get('/', (req, res) => {
    res.status(200).send({name: 'student connection done'});
});

module.exports = routerStudent;
;