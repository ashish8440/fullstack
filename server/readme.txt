
to run the ENV file run   "node --env-file=.env index.js" or "nodemon --env-file=.env index.js"

NOTE: forgot the .env setup. Update you soon... with "Nginx"




Get Record


/* get employee data with for specific record with ID or without ID got the whole record. 

    postman request like 
    
    {
        "id":"9"     // perticular record
    } 

        or
    {}       // all record

    or
    //nothing no {} also     // all record
*/





Delete Record


/* delete the employee record using the employee ID 

    {
        "id":"13"     // id must required to delete the perticular record. 
    }
*/




Add or Update Record


/* add and update record using the ID 

for add postman request like 
{
    "data": [["ashish34", 9.99],["qwerty", "33.99"], ["grer", 4.99]]
}

for update like
{
    "id":"9",
    "name":"ashish",
    "salary":"55"
}    

    or

{
    "id":"9",
    "salary": 99666.99
}

    or

{
    "id":"9",
    "name":"ggggg"
}

*/


Writer: Ashish Chaurasia(ashish8440@gmail.com)