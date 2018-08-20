// TODO: 
// If the stock quantity is lesser than my inventory quantity, I need to print an error message

var mysql = require('mysql');

var inquirer = require('inquirer');


function printData() {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "ab429630",
        database: "bamazon"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    var table = "products";
    // var my_quantity;
    // I want to specify which columns I print out into my terminal. I can do so by specifying the column names below:
    var inventory = "select item_id,product_name,department_name,price from " + table;
    var item_id = "select item_id from " + table;
    // var product_name ="select product_name from " + table; 
    // var department_name ="select department_name from " + table; 
    // var price ="select price from " + table; 
    var stock_quantity = "select stock_quantity from " + table;
    var myresult;

    con.query(inventory, function (err, result) {
        if (err) throw err;
        console.log(result);
        myData = result;
    });

    con.query(stock_quantity, function (err, result) {
        if (err) throw err;
        console.log(result);
        myStockQuantity = result;
    });

    runInquirer();
}

function runInquirer() {
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
    ])
        .then(function (inquirerResponse) {
            // console.log(inquirerResponse.quantity);

            var myQuantity = inquirerResponse.quantity;
            console.log(myQuantity);
            console.log("Product ID: " + inquirerResponse.ID);
            console.log("Product Quantity: " + inquirerResponse.quantity);


            if (myQuantity(inquirerResponse.ID) > myStockQuantity(inquirerResponse.ID){
                console.log("We do not have that amount in stock. Please try an amount that is lower");
            } else {
                console.log("OK!")
            }


        })
}

printData();


// TODO: 
// If the stock quantity is lesser than my inventory quantity, I need to print an error message

var mysql = require('mysql');

var inquirer = require('inquirer');


function printData() {

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "ab429630",
        database: "bamazon"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    var table = "products";
    // var my_quantity;
    // I want to specify which columns I print out into my terminal. I can do so by specifying the column names below:
    var inventory = "select item_id,product_name,department_name,price from " + table;
    var item_id = "select item_id from " + table;
    // var product_name ="select product_name from " + table; 
    // var department_name ="select department_name from " + table; 
    // var price ="select price from " + table; 
    var stock_quantity = "select stock_quantity from " + table;
    var myresult;

    con.query(inventory, function (err, result) {
        if (err) throw err;
        console.log(result);
        myData = result;
    });

    con.query(stock_quantity, function (err, result) {
        if (err) throw err;
        console.log(result);
        myStockQuantity = result;
    });

    runInquirer();
}

function runInquirer() {
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
    ])
        .then(function (inquirerResponse) {
            // console.log(inquirerResponse.quantity);

            var myQuantity = inquirerResponse.quantity;
            console.log(myQuantity);
            console.log("Product ID: " + inquirerResponse.ID);
            console.log("Product Quantity: " + inquirerResponse.quantity);

            if(myQuantity(inquirerResponse.ID)>myStockQuantity(inquirerResponse.ID)){
                console.log("Please pick a lower amount. The Quantity that you need is not in stock")
            } else {
                console.log("OK!");
            }

            // If the quantity that I have picked is greater than the quantity in stock, console.log the error message
            // con.connect(function(err) {
            //     if (err) throw err;
            //     con.query("SELECT * FROM products WHERE item_id = '" + inquirerResponse.ID + ", function (err, result) " + {
            //       if (err) throw err;
            //       console.log(result);
            //     });
            //   });

        })
}

printData();
























