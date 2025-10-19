var basic_salary = prompt("Enter your basic salary");
var house_rent = prompt("enter your house rent amount");
var medical_allowance = prompt("Enter your medical allowance");
var gross_salary = parseInt(basic_salary) + parseInt(house_rent) + parseInt(medical_allowance);
var tax = gross_salary * 0.2;
var net_income = gross_salary - tax;
document.write("<br>Your Gross pay is \t " + gross_salary);
document.write("<br>Your net Income is \t " + net_income);
document.write("<br>Tax Deducated on Gross pay was\t " + tax);