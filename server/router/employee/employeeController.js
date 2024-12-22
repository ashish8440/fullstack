const model = require('./employeeModel');

//Get Request: GET Method
exports.getEmployeeData = (req, res) => {
	let ip = req.body;
    if(ip.id && checkId(ip.id)) {
        res.status(403).send({status: "error", result: "All conditions are not met: Bad Request"});
    } else {
        model.getEmployeeData(ip, (err, resuslt) => {
            if(err) {
                res.status(403).send({status: "error", result: "Result Not Found"});
            } else {
                res.status(200).send({status: "success", result: resuslt});
            }
        });
    }
}

//Delete Employee Data: POST method
exports.deleteEmployeeData = (req, res) => {
    let ip = req.body;
    if((ip.id && checkId(ip.id)) || (!ip.id)) {
        res.status(403).send({status: 'error', result: "All conditions are not met: Bad Request"});
    } else {
        model.deleteEmployeeData(ip, (err, result) => {
            if(err) {
                res.status(403).send({status: 'error', result: "Result Not Found"});
            } else {
                res.status(200).send({status: 'success', result: result});
            }
        });
    }
}

//Add or Update the record: POST method
exports.addUpdateEmployeeData = (req, res) => {
    let ip = req.body;
    if((ip.id && checkId(ip.id)) || (ip.salary && checkSalary(ip.salary)) || (ip.name && checkName(ip.name))) {
        res.status(403).send({status: 'error', result: "All conditions are not met: Bad Request"});
    } else {
        model.addUpdateEmployeeData(ip, (err, result) => {
            if(err) {
                res.status(403).send({status: 'error', result: "Result Not Found"});
            } else {
                res.status(200).send({status: 'success', result: result});
            }
        });
    }
}

// Delete Employee Data: DELETE method
exports.deleteEmployeeDataWithParamsID = (req, res) => {
    let ip = req.params;
    if((ip.id && checkId(ip.id)) || (!ip.id)) {
        res.status(403).send({status: 'error', result: "All conditions are not met: Bad Request"});
    } else {
        model.deleteEmployeeDataWithParamsID(ip, (err, result) => {
            if(err) {
                res.status(403).send({status: 'error', result: "Result Not Found"});
            } else {
                res.status(200).send({status: 'success', result: result});
            }
        });
    }
}

// Update Employee Data: PUT method
exports.updateEmployeeDataWithParamsID = (req, res) => {
    let ip = {id: req.params.id, ...req.body};
    if((ip.id && checkId(ip.id)) || (ip.salary && checkSalary(ip.salary)) || (ip.name && checkName(ip.name))) {
        res.status(403).send({status: 'error', result: "All conditions are not met: Bad Request"});
    } else {
        model.updateEmployeeDataWithParamsID(ip, (err, result) => {
            if(err) {
                res.status(403).send({status: 'error', result: "Result Not Found"});
            } else {
                res.status(200).send({status: 'success', result: result});
            }
        });
    }
}







function checkId(value){
    let idValue = value;
    return !(/^\d+$/.test(idValue));
}

function checkSalary(value) {
    let salaryValue = value;
    return !(/^[-+]?[0-9]+\.[0-9]+$/.test(salaryValue) || /^\d+$/.test(salaryValue));
}

function checkName(value) {
    let nameValue = value;
    return !(/^[a-zA-Z\s]+$/.test(nameValue));
}