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

    // var sql = "SELECT * FROM drinks";
    var table = "products";
    // I want to specify which columns I print out into my terminal. I can do so by specifying the column names below:
    var name = "select item_id,product_name,department_name,price from " + table;
    var stock_quantity = "select stock_quantity from " + table;
    var myresult;

    con.query(name, function (err, result) {
        if (err) throw err;
        console.log(result);
        myData = result;
    });

    con.query(stock_quantity, function (err, result) {
        if (err) throw err;
        console.log(result);
        myStockQuantity=result;
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
            console.log("Product ID: " + inquirerResponse.ID);
            console.log("Product Quantity: " + inquirerResponse.quantity);

            if(inquirerResponse.quantity(inquirerResponse.ID)>myStockQuantity(inquirerResponse.ID)){
                console.log("Not in stock. Try a different quantity")
            }
            else{
              console.log("OK!")  
            }
            
        })
}
printData();










