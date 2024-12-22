const express = require('express');
const routerEmployee = express.Router();
const controller = require('./employeeController');

/* check employee connection */
routerEmployee.get('/', (req, res) => {
    res.status(200).send({result: 'employee connection done'});
});



//---------------------------------------------------------------------------------------------------//

/* Get employee data with for specific record with ID or without ID got the whole record. */

routerEmployee.get('/getEmp', (req, res) => {
    let cmd = "getEmployeeData";
    controller[cmd](req, res);
});


//--------------------------------------------------------------------------------------------------------//

/* Delete the employee record using the employee ID */

routerEmployee.post('/deleteEmp', (req, res) => {
    let cmd = "deleteEmployeeData";
    controller[cmd](req, res);
});


//---------------------------------------------------------------------------------------------------//

/* Add and Update record using the ID */

routerEmployee.post('/addUpdateEmp', (req, res) => {
    let cmd = "addUpdateEmployeeData";
    controller[cmd](req, res);
});


//---------------------------------------------------------------------------------------------------//

/* Delete the record using the DELETE method */

routerEmployee.delete('/deleteEmp/:id', (req, res) => {
    let cmd = "deleteEmployeeDataWithParamsID";
    controller[cmd](req, res);
})

//---------------------------------------------------------------------------------------------------//

/* Update record using PUT Method with the help of ID */
routerEmployee.put('/updateEmp/:id', (req, res) => {
    let cmd = "updateEmployeeDataWithParamsID";
    controller[cmd](req, res);
})









module.exports = routerEmployee;