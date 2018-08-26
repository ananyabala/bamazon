// // TODO: 
// // If the stock quantity is lesser than my inventory quantity, I need to print an error message

// var mysql = require('mysql');

// var inquirer = require('inquirer');


// function printData() {

//     var con = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         port: 3306,
//         password: "ab429630",
//         database: "bamazon"
//     });

//     con.connect(function (err) {
//         if (err) throw err;
//         console.log("Connected!");
//     });

//     var table = "products";
//     // var my_quantity;
//     // I want to specify which columns I print out into my terminal. I can do so by specifying the column names below:
//     var inventory = "select item_id,product_name,department_name,price from " + table;
//     var item_id = "select item_id from " + table;
//     // var product_name ="select product_name from " + table; 
//     // var department_name ="select department_name from " + table; 
//     // var price ="select price from " + table; 
//     var stock_quantity = "select stock_quantity from " + table;
//     var myresult;

//     con.query(inventory, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         myData = result;
//     });

//     con.query(stock_quantity, function (err, result) {
//         if (err) throw err;
//         console.log(result);
//         myStockQuantity = result;
//     });

//     runInquirer();
// }

// function runInquirer() {
//     inquirer.prompt([
//         {
//             "name": "ID",
//             "type": "input",
//             "message": "Choose the ID (Between 1-10) of the product they would like to buy"
//         },
//         {
//             "name": "quantity",
//             "type": "input",
//             "message": "What quantity would you like to buy?"
//         }
//     ])
//         .then(function (inquirerResponse) {
//             // console.log(inquirerResponse.quantity);

//             var myQuantity = inquirerResponse.quantity;
//             console.log(myQuantity);
//             console.log("Product ID: " + inquirerResponse.ID);
//             console.log("Product Quantity: " + inquirerResponse.quantity);


//             if (myQuantity(inquirerResponse.ID) > myStockQuantity(inquirerResponse.ID){
//                 console.log("We do not have that amount in stock. Please try an amount that is lower");
//             } else {
//                 console.log("OK!")
//             }


//         })
// }

// printData();

// // TODO: 
// // If the stock quantity is lesser than my inventory quantity, I need to print an error message
// // Imported Modules to run the application
// var mysql = require('mysql');
// var inquirer = require('inquirer');

// // Establishing the connection to the SQL server
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     port: 3306,
//     password: "ab429630",
//     database: "bamazon"
// });

// // Initialized variables to be used in the application
// var myData;
// var myStockQuantity;
// var table = "products";
// var itemQuantity;
// var inventory = "select item_id,product_name,department_name,price from " + table;
// var stock_quantity = "select stock_quantity from " + table;

// // Initialized functions to be used later
// // This function returns the inventory value of an item
// function inventoryQuery(value) {
//     return 'select * from ' + table + ' where item_id = ' + value
// }




// function printData() {
//     // Confirming whether a connection is available. will throw an error if the connection cannot be made.    
//     con.connect(function (err) {
//         if (err) throw err;
//         // console.log("Connected!");
//     });


//     // I want to specify which columns I print out into my terminal. I can do so by specifying the column names below:
//     con.query(inventory, function (err, result) {
//         if (err) throw err;
//         myData = result;
//         // console.log('Here is what\'s currently available in my store');
//         console.table(myData);
//         // console.log('Press the Space Bar to continue to your selection.');
//     });

//     con.query(stock_quantity, function (err, result) {
//         if (err) throw err;
//         myStockQuantity = result;
//         // console.log(myStockQuantity)
//     });

//     runInquirer();
// }

// function runInquirer() {
//     inquirer.prompt([
//         {
//             name: "confirmation",
//             type: "confirm",
//             message: "Welcome to my store! Would you like to purchase something today?"
//         }
//     ]).then(function (inquirerResponse) {

//         if (inquirerResponse.confirmation === true) {
//             // this initial query will go and grab the quantity from the data
//             inquirer.prompt([
//                 {
//                     "name": "ID",
//                     "type": "input",
//                     "message": "Choose the ID (Between 1-10) of the product they would like to buy"
//                 },
//                 {
//                     "name": "quantity",
//                     "type": "input",
//                     "message": "What quantity would you like to buy?"
//                 }
//             ]).then(function (inquirerResponse){
//                 // retrieves the amount available in the database
//                 con.query(inventoryQuery(inquirerResponse.ID), function (err, result) {
//                     if (err) throw err;
//                     // console.log(result);
//                     // console.log(result[0]);
//                     // console.log(result[0].stock_quantity)
//                     itemQuantity = result[0].stock_quantity

//                     // this statement validates whether the mount selected is available or not.
//                     if (inquirerResponse.quantity < itemQuantity) {
//                         console.log('its available!')
//                         // You can change this section to display other things, but this will atleast validate 
//                         // the user choice is available
//                     } else {
//                         console.log('There are currently only ' + itemQuantity + ' available. Please select another quantity')
//                     }
//                 });    
//             })        
//         } else {
//             console.log("Thank you for visiting my site!")
//         }
//     })
// }

// printData();


// TODO: 
// If the stock quantity is lesser than my inventory quantity, I need to print an error message
// Imported Modules to run the application
var mysql = require('mysql');
var inquirer = require('inquirer');

// Establishing the connection to the SQL server
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "password123",
    database: "bamazon"
});

// Initialized variables to be used in the application
var myData
var myStockQuantity
var table = "products";
var itemQuantity
var inventory = "select item_id,product_name,department_name,price from " + table;
var stock_quantity = "select stock_quantity from " + table;

// Initialized functions to be used later
// This function returns the inventory value of an item
function inventoryQuery(value) {
    return 'select * from ' + table + ' where item_id = ' + value
}




function printData() {
    // Confirming whether a connection is available. will throw an error if the connection cannot be made.    
    con.connect(function (err) {
        if (err) throw err;
        // console.log("Connected!");
    });

    // I want to specify which columns I print out into my terminal. I can do so by specifying the column names below:
    con.query(inventory, function (err, result) {
        if (err) throw err;
        myData = result;
        console.log('Here is what\'s currently available in my store')
        console.table(myData)
        console.log('Press the Space Bar to continue to your selection.')
    });

    con.query(stock_quantity, function (err, result) {
        if (err) throw err;
        myStockQuantity = result;
        // console.log(myStockQuantity)
    });
}

function runInquirer() {
    inquirer.prompt([
        {
            name: "confirmation",
            type: "confirm",
            message: "Welcome to my store! Would you like to purchase something today?"
        }
    ]).then(function (inquirerResponse) {

        if (inquirerResponse.confirmation === true) {
            printData()
            // this initial query will go and grab the quantity from the data
            inquirer.prompt([
                {
                    "name": "ID",
                    "type": "input",
                    "message": "Choose the ID (Between 1-10) of the product they would like to buy"
                },
                {
                    "name": "quantity",
                    "type": "input",
                    "message": "What quantity would you like to buy?"
                }
            ]).then(function (inquirerResponse){
                // retrieves the amount available in the database
                con.query(inventoryQuery(inquirerResponse.ID), function (err, result) {
                    if (err) throw err;
                    // console.log(result);
                    // console.log(result[0]);
                    // console.log(result[0].stock_quantity)
                    itemQuantity = result[0].stock_quantity

                    // this statement validates whether the mount selected is available or not.
                    if (inquirerResponse.quantity < itemQuantity) {
                        console.log('its available!')
                        // You can change this section to display other things, but this will atleast validate 
                        // the user choice is available
                    } else {
                        console.log('There are currently only ' + itemQuantity + ' available. Please select another quantity')
                    }
                });    
            })        
        } else {
            console.log("Thank you for visiting my site!")
        }
    })
}

runInquirer();