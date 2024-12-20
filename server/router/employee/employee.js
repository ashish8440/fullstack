const express = require('express');
const routerEmployee = express.Router();
const controller = require('./employeeController');

/* check employee connection */
routerEmployee.get('/', (req, res) => {
    res.status(200).send({name: 'employee connection done'});
});

routerEmployee.get('/getEmpByID', (req, res) => {
    // console.log("----",req.body, req.body == {}, Object.keys(req.body).length);


    // if(Object.keys(req.body).length>0) {
    //     // res.send("body is available..");
    //     // var cmd = req.body;
    //     // controller[cmd](req, res);
    // } else {
    //     res.send("body is not available.");
    // }

     

    var cmd = "getData";

    controller[cmd](req, res);

    

    
});



module.exports = routerEmployee;