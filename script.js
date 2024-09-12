function appendToCart(item) {
    cart[item] = products[item]
}

// Task 1

let loggedIN = false

if (loggedIN) {
    console.log("You may add items to your cart.");
} else {
    console.log("You are not logged in yet and need to log in to add items to your cart.");
}

// Task 2
let cart = {}

let products = {
    apple : 2,
    cheese : 3,
    towels : 7,
    watermelon : 5
}

for (const item in products) {
    console.log("Item:", item)
}

appendToCart('apple')
appendToCart('cheese')

console.log(cart)

// Task 3
let cost = 0

for (const item in cart) {
    cost = cost + products[item]
}

console.log("Your total cost is:", cost)

//  Assignment Part 2 ------------------------------------------------------------

// Task 1
let account = 0

function deposit(amount) {
    account = account + amount
    console.log("new balance is:", account)
} 

// Task 2
function withdraw(amount) {
    if ((account - amount) > 0) {
        account = account - amount
        console.log("new balance is:", account)
    } else {
        console.log("I'm sorry.  You have insufficient funds for that withdrawl")
    }
}

// Task 3
function checkBalance(account) {
    console.log("Your current balance is:", account)
}


// checking functions

deposit(100)

withdraw(50)

checkBalance(account)

withdraw(100)