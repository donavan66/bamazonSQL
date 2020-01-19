require("dotenv").config(); // couldnt get the .env working
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
  
    port: 3306,
  
    user: "root",
  
    // Use Database password
    password: "Sayasith@368",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to database")
    console.log("Welcome to Bamazon")
    runBamazon();
  });

  function runBamazon() {
    connection.query("SELECT * FROM products", function(err, res) {
        console.log(res)
        inquirer.prompt([{
            type: 'input',
            name: 'product',
            message: 'Enter the ID for the product you want to buy.',
            validate: function(value) {
              var valid = !isNaN(parseFloat(value));
              return valid || 'Please enter a number';
            },
            filter: Number
          },
          {
            type: 'input',
            name: 'quantity',
            message: 'How many do you need?',
            validate: function(value) {
              var valid = !isNaN(parseFloat(value));
              return valid || 'Please enter a number';
            },
            filter: Number
          }
        ]).then(function(input){
            var productID = input.product - 1;
            if (res[productID].stock_quantity < input.quantity) {
                console.log("Insufficient quantity, try again")
                connection.end();
            }
            else{
                var newQuantity = res[productID].stock_quantity - input.quantity;
                var totalCost = res[productID].price * input.quantity;
                connection.query("UPDATE products SET stock_quantity = ? WHERE id = ?" [newQuantity, productID], function(err, result){
                    console.log("Successful Traction, your total cost was for your " + res[productID].product_name + " is $" + totalCost);
                })
                connection.end();
            }
          })
    })
};