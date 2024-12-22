const Sequence = require('sequence').Sequence;
const mysql = require('mysql2');
const config = require('./../../config.json');
const connection = mysql.createConnection({
    host: config.host ,
    user: config.user,
    password: config.password,
    database: config.database
});

exports.getEmployeeData = (ip, cb) => {
    let seq = Sequence.create();
    seq
    .then((next) => {
        connection.connect((err) => {
            if(err) {
                console.log("ERROR", "unable to connect to DB sava data");
                process.exit(1);
            } else {
                console.log("Database connected");
                next();
            }
          });
    })
    .then((next) => {
        if(!ip.id) {
            let sql = "select * from employee";
            connection.query(sql, (err, result) => {
                cb(err, result);
            }); 
        } else {
            // let sql = "select * from employee where id = ? ";
            let sql = `select * from employee where id = ${ip.id}`;
            connection.query(sql, (err, result) => {
                cb(err, result);
            }); 
        }
    });
}

exports.deleteEmployeeData = (ip, cb) => {
    let seq = Sequence.create();
    seq
    .then((next) => {
        connection.connect((err) => {
            if(err) {
                console.log("ERROR", "unable to connect to DB sava data");
                process.exit(1);
            } else {
                console.log("Database connected");
                next();
            }
          });
    })
    .then((next) => {
        let sql = `delete from employee WHERE id = ${ip.id}`;
        connection.query(sql, (err, result) => {
            if((result.affectedRows) == 0) {
                cb(err, []);
            } else {
                next();
            }
        })  
    })
    .then((next) => {
        let sql = "select * from employee";
        connection.query(sql, (err, result) => {
            cb(err,result);
        })  
    });
}

exports.addUpdateEmployeeData = (ip, cb) => {
    let seq = Sequence.create();
    seq
    .then((next) => {
        connection.connect((err) => {
            if(err) {
                console.log("ERROR", "unable to connect to DB sava data");
                process.exit(1);
            } else {
                console.log("Database connected");
                next();
            }
          });
    })
    .then((next) => {
        if(ip.id) { 
            //Update command
            let query = '';
            if(ip.name && ip.salary) {
                query = `name = '${ip.name}', salary = '${ip.salary}'`;
            }else if(ip.name) {
                query = `name = '${ip.name}'`;
            } else if(ip.salary) {
                query = `salary = '${ip.salary}'`;
            }
            let updateEmployeeDetail = `UPDATE employee SET ${query} WHERE id = ${ip.id}`;
            connection.query(updateEmployeeDetail, (er,re) => {
                if(er) {
                    cb(er, re);  
                } else {
                    // console.log("Number of records inserted: " + re.affectedRows);
                    if((re.affectedRows) == 0) {
                        cb(er, []);
                    } else {
                        next();
                    }
                }
            })
        } else {
            //Add command
            var sql = "INSERT INTO employee (name, salary) VALUES ?";
            var values = ip.data;
            connection.query(sql, [values], function (err, result) {
                if (err){
                    cb(err, result);
                } else {
                    // console.log("Number of records inserted: " + result.affectedRows);
                    next();
                }
            }); 
        }
    })
    .then((next) => {
        let sql = "select * from employee";
        connection.query(sql, (err, result) => {
            cb(err,result);
        })  
    });

}


exports.deleteEmployeeDataWithParamsID = (ip, cb) => {
    let seq = Sequence.create();
    seq
    .then((next) => {
        connection.connect((err) => {
            if(err) {
                console.log("ERROR", "unable to connect to DB sava data");
                process.exit(1);
            } else {
                console.log("Database connected");
                next();
            }
          });
    })
    .then((next) => {
        let sql = `delete from employee WHERE id = ${ip.id}`;
        connection.query(sql, (err, result) => {
            if((result.affectedRows) == 0) {
                cb(err, []);
            } else {
                next();
            }
        })  
    })
    .then((next) => {
        let sql = "select * from employee";
        connection.query(sql, (err, result) => {
            cb(err,result);
        })  
    });
}



exports.updateEmployeeDataWithParamsID = (ip, cb) => {
    let seq = Sequence.create();
    seq
    .then((next) => {
        connection.connect((err) => {
            if(err) {
                console.log("ERROR", "unable to connect to DB sava data");
                process.exit(1);
            } else {
                console.log("Database connected");
                next();
            }
          });
    })
    .then((next) => {
        // if(ip.id) { 
            //Update command
            let query = '';
            if(ip.name && ip.salary) {
                query = `name = '${ip.name}', salary = '${ip.salary}'`;
            }else if(ip.name) {
                query = `name = '${ip.name}'`;
            } else if(ip.salary) {
                query = `salary = '${ip.salary}'`;
            }
            let updateEmployeeDetail = `UPDATE employee SET ${query} WHERE id = ${ip.id}`;
            connection.query(updateEmployeeDetail, (er,re) => {
                if(er) {
                    cb(er, re);  
                } else {
                    // console.log("Number of records inserted: " + re.affectedRows);
                    if((re.affectedRows) == 0) {
                        cb(er, []);
                    } else {
                        next();
                    }
                }
            })
        // } 
    })
    .then((next) => {
        let sql = "select * from employee";
        connection.query(sql, (err, result) => {
            cb(err,result);
        })  
    });

}

