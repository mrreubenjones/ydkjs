/* 

Exercise from YDKJS book 1, chapter 1.
---

Write a program to calculate the total price of your phone purchase. 
You will keep purchasing phones (hint: loop!) until you run out of money
in your bank account. You'll also buy accessories for each phone as long 
as your purchase amount is below your mental spending threshold.

After you've calculated your purchase amount, add in the tax, then print 
out the calculated purchase amount, properly formatted.

Finally, check the amount against your bank account balance to see if you 
can afford it or not.

You should set up some constants for the "tax rate," "phone price," 
"accessory price," and "spending threshold," as well as a variable for your 
"bank account balance.""

You should define functions for calculating the tax and for formatting the 
price with a "$" and rounding to two decimal places.

Bonus Challenge: Try to incorporate input into this program, perhaps with 
the prompt(..) covered in "Input" earlier. You may prompt the user for their 
bank account balance, for example. Have fun and be creative!

_____

Interpretation of requirements:
---

This is a program for calculating the maximum number of phones and matching
accessories that a customer can buy, given their spending budget 
(threshold), the phone price, and accessory price. 

1. On page load, ask customer for their bank balance, and what percentage
   of that balance they are willing to spend
2. Give them a selection of phones and accessories to choose from
3. Calculate how many phones and matching accessories they can buy
4. Print the total cost of phones, accessories, and tax
5. Remind the customer of their spending threshold and bank balance, and
   ask if they would like to purchase.

Rules:
---
1. Buy as many phones as possible, up until spending threshold (contrary
   to instructions)
2. Once phone limit has been reached, buy as many accessories as possible
   until they match the number of phones, or will exceed the bank balance
   (whichever happens first)
3. Include tax in the phone/accessory buying calculations

*/

const TAX_RATE = 0.08;
const phoneCost = 299.99;
const accessory = 19.99;

const spendingThreshold = 1700;

// const spendingThreshold = balance - (balance * 0.1);

/* Ask for bank balance
var balance = prompt("What is your bank balance?");
*/

var balance = 2000;




// Ask how many phones the customer would like
var phoneCount = prompt("How many phones would you like to purchase?");





//- plus accessories for each phone as long as your purchase amount is below your mental threshold
var purchaseTotal = (phoneCount * (phoneCost + accessory));




// grandTotal = total + tax
var grandTotal = purchaseTotal + (purchaseTotal * TAX_RATE);





// Subtract purchase from bank balance
if (spendingThreshold > grandTotal) {
    balance = balance - grandTotal;
    console.log("Your old balance was $2000, your new balance is $" + balance + ". Go enjoy your " + phoneCount + " phones!");
} else {
  console.log("It is too expensive, I will not pay.");
}




/*
PRACTICE
Write a program (p.26)...

REQUIREMENTS
PROGRAM - calculate total price of phone purchase
- purchase phones until you run out of money in bank account
- plus accessories for each phone as long as your purchase amount is below your spending threshold
-
- then calculated purchase amount + tax
- print out purchase amount (w/ proper format)


- check amount >= bank account
- can you afford it?

Further NOTE:

• set up some constants
“tax rate”
“phone price”
“accessory price”
“spending threshold"

variable
“bank account balance”

• define functions for calculating the tax
and for formatting the price with a “$” & rounding to two decimal places.

• Bonus Challenge: Try to incorporate input into this program,
perhaps with the prompt(..) covered in “Input” on page 6. You
may prompt the user for their bank account balance, for example.
Have fun and be creative!
*/
