// Exploring Conditional Statements and Loops

let loggedIn = true;
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey to Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato',];

if (loggedIn) {
    console.log("Items in cart:")
    for (let i = 0; i < cart.length; i++) {
        console.log(cart[i])
    }
} else {
    console.log("Please log in to view your cart.")
}


// Exploring Functions in JavaScript

function deposit(initialAmount, totalDeposits) {
    console.log(`Old Balance: $${initialAmount}`);
    console.log(`Total Deposits: $${totalDeposits}`);
    console.log(`New Balance: $${initialAmount + totalDeposits}`);
}

deposit(1000, 500);

function withdrawal(initialAmount, totalWithdrawals) {
    console.log(`Old Balance: $${initialAmount}`);
    console.log(`Total Withdrawals: $${totalWithdrawals}`);
    console.log(`New Balance: $${initialAmount - totalWithdrawals}`);
}

withdrawal(1000, 200);



