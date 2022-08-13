// // ****************************************************      CHAPTER No 1  *************************************************
// // ****************************************************      Question No 1  *************************************************
// let userName = prompt("Enter Your Name");
// alert('Welcome!' +" " + userName);

// // ****************************************************      Question No 2  *************************************************
// alert("Error! Please enter valid password");
// // 
// // ****************************************************      Question No 3  *************************************************
// alert("Welcom to Js Land \nHappy Coding!");
// // ****************************************************      Question No 4  *************************************************
// alert("Welcom to Js Land");
// alert("Happy Coding!");


// // ****************************************************      Question No 5  *************************************************
// alert("Hello i can run JS through my web browser's console");
// console.log("Hello i can run JS through my web browser's console");













// // ****************************************************      CHAPTER No 2   *************************************************






// // ****************************************************      Question No 1  *************************************************
// var userName;
// // ****************************************************      Question No 2  *************************************************
// var myName;
// myName="MUHAMMAD FAYYAZ ANSARI"
// // ****************************************************      Question No 3  *************************************************
// var message;
// message = "Hello World";
// alert(message);
// // ****************************************************      Question No 4  *************************************************
// var age = "21";
// var profession = "Certified Professional Mobile App Developer"
// alert(myName);
// alert(age + " Years old");
// alert(profession);

// // ****************************************************      Question No 5  *************************************************
// var food = "P";
// alert("PIZZA\nPIZZ\nPIZ\nPI\n" + food);

// // ****************************************************      Question No 6  *************************************************
// var email = "fayyazansari268@gmail.com";
// alert("My email address is " + email);

// // ****************************************************      Question No 7  *************************************************
// var book = "A smarter way to learn JavaScript.";
// alert("I am trying to learn from Book " + book);

// // ****************************************************      Question No 8  *************************************************
// document.write("Yah! I can write HTML content through Javascript.");

// // ****************************************************      Question No 9  *************************************************
// var show = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(show);

// // ****************************************************      CHAPTER NO 02 COMPLETE  *************************************************










// // ****************************************************      CHAPTER NO 03 START  ********************************************************************************************
// var agee = 21;
// alert("I am "+ agee + " year old.");

// // ****************************************************      Question No 02 ********************************************************************************************
// var visitor_count= 15;
// alert("You have visited this site " + visitor_count + " times");

// // ****************************************************      Question No 03 ********************************************************************************************
// var my_birthday_year= 2001;
// document.write("My birth year is " + my_birthday_year + "<br>" +"Data type of my declared variable is " + typeof(my_birthday_year)) ;

// // ****************************************************      Question No 04 ********************************************************************************************
// var website = "www.muhammadfayyazansri.com";
// var visitorName = prompt('Enter your name');
// var productTitle = prompt('Enter product name');
// var productCount = prompt('Product Quantity');
// document.write("<h2>"+visitorName + " ordered " + productCount +" " + productTitle + ' on ' + website + "</h2>"); 


// // ****************************************************      CHAPTER NO 03 COMPLETE ********************************************************************************************












// // ****************************************************      CHAPTER NO 04 START ********************************************************************************************
// // Declare 3 variables in one statement.
// // var fayz,maoaz,asri;
// // Declare 5 legal
// // var ansri,abc,def,$ghi,$44;
// // 5 illegal variable names
// // var 3ansri,#abc,%$ghi,@44;*akki;

// // ****************************************************      Question No 03 ********************************************************************************************
// document.write("<h1> Rules for naming JS variables </h1>" 
// + "<p> Variable names can only contain, numbers, $ and _. For Example: $my_1stVariable</p>"
// + "<p>Variable must begin with a letter $or _. For example: $name, _name or name</p>"
// + "<p> Variables names are cas sensitive.</p>"
// +"<p> Variable names should not be JS Keywords.</p>"
// );



// // ****************************************************      CHAPTER NO 7 complete ********************************************************************************************

















// // ****************************************************      CHAPTER NO 5 START ********************************************************************************************
// // ****************************************************      Question No 01 ********************************************************************************************

// var num1 = parseInt(prompt("Please enter a number"));
// var num2 = parseInt(prompt("Please enter second number"));
// var operator = prompt("Please enter a sign to perform action");
// var total = num1 + num2;
// // ****************************************************      Question No 02 ********************************************************************************************
// var result;
// if(operator === "-"){
//     subtraction = num1 - num2;
//    result = "Subtraction of " +num1 + " and " + num2 + " is " +subtraction;
// }
// else if (operator === "*"){
//     multiply = num1 * num2;
//    result = "Multiply of " +num1 + " and " + num2 + " is " +multiply;
// }
// else if (operator === '/'){
//     divide = num1 / num2;
//     result = "Division of " +num1 + " and " + num2 + " is " +divide;
// }
// else if (operator === '%'){
//     modulus = num1 % num2;
//     result = "Remainder of " +num1 + " and " + num2 + " is " +modulus;
// }
// else(result =  "Addition of " +num1 + " and " + num2 + " is " + total);
// document.write("<h1>" + result+"</h1>")


// // ****************************************************      Question No 03 ********************************************************************************************

// var num_variable;
// document.write("Value after variable declaration is " + num_variable + "<br>");
// num_variable = 5;
// document.write("Initial Value " + num_variable+ "<br>");
// document.write("Value After post increament " + num_variable++ + "<br>");
// document.write("Value After post "+ num_variable +" and pre increament  " + ++num_variable + "<br>");
// document.write("Value After addition of 7 is " + ( num_variable= 7 + num_variable) + "<br>");
// document.write("Value After post decreament " + num_variable-- + "<br>");
// document.write("Value After post decrement "+num_variable+" and after preincreament " + --num_variable + "<br>");
// document.write("Value After dividing by 3 is " + (divisioned = num_variable / 3) + "<br>The remainder is "+(num_variable%3) + "<br>");


// // ****************************************************      Question No 04 ********************************************************************************************
// var ticket = 600;
// var total_ticket = ticket*5;
// document.write("<h4>1 ticket is 600 <br> Total cost to buy 5 tickets to a movie is " + total_ticket+"PKR"+"</h4>")

// // // ****************************************************      Question No 05 ********************************************************************************************
// var num = +prompt("Enter a number to draw a table");
// var i=1;
// document.write("<h2> TABLE OF "+ num + "<br>")
// for(i; i<=10; i++){
    //    document.write(num + " x "+ " " + i + " "+ " = " + num*i + "<br>");
    // }
    // document.write("</h2>")
    
    // // // ****************************************************      Question No 06 ********************************************************************************************
    // var celsius = 90;
    // var convert_f = (90 *9/5) + 32;
    // var convert_into_celcius = (convert_f -32) *5/9;
    // document.write("<h3 align='center'> The Temperature Converter <br> conversion Formulae: <br> <sup>o</sup>C = (<sup>o</sup>F - 32 ) x 5/9"
    // + "<br><sup>o</sup>F = (<sup>o</sup>C x 9/5) + 32 )<br>"
    // + celsius + "<sup>o</sup>C is " + convert_f+ "<sup>o</sup>F"+ "<br>"
    // + convert_f + "<sup>o</sup>F is " + convert_into_celcius+ "<sup>o</sup>C"+ "<br>"
    // )
    
    
    
    // // // ****************************************************      Question No 07 ********************************************************************************************
// var price1 = 650;
// var price2 = 100;
// var quantity1 = 3;
// var quantity2 = 7;
// var shipping_charges = 100;
// var total_cost = (price1 *quantity1)+(price2 * quantity2)+shipping_charges;
// document.write("<h3> Price of item 1 is " + price1
// + "<br> Quantity of item 1 is " + quantity1
// + "<br> Price of item 2  is " + price2
// + "<br> Quantity of item 2 is " + quantity2
// + "<br> Shipping Charges " + shipping_charges
// + "<br>"
// + "<br> "
// +"Total cost of your order is " + total_cost
// )




    // // // ****************************************************      Question No 08 ********************************************************************************************
// var total_marks = 980;
// var marks_obtained = 804;
// percentage = (marks_obtained/total_marks)*100;
// document.write("Total Marks: " + total_marks
// +"<br> Marks Obtained: " + marks_obtained
// +"<br> Percentage: " + percentage
// )

    // // // ****************************************************      Question No 09 ********************************************************************************************
    
    // var us = 10;
    // var riyal = 25;
    // var total_currency = (10 * 104.80)+ (25 *28);
    // document.write("<h3> Currency in PKR </h3>"
    // +"<br> Exchange rates:"
    // +"<br> 1 US Dollar = 104.80 Pakistani Rupee"
    // +"<br> 1 Saudi Riyal = 28 Pakistani Rupee"
    // +"<br>"
    // +"<br> "
    // +"<br> Total currency in PKR : "+ total_currency+ "rs"
    // )
    
    
    // // // ****************************************************      Question No 10 ********************************************************************************************
// var initial_number = 5;
// document.write(
//     "<h3> Initial Number = "
//     +  initial_number 
//     + "<br> After multiply by 10 = " + (initial_number = (initial_number *10)) 
//     + "<br> And After divided by 2 = " + (initial_number = (initial_number / 2))+ "</h3>"

// )

    // // // ****************************************************      Question No 11 ********************************************************************************************
//     var curren_year = 2022;
//     var birth_year = 2001;
    
// document.write(
//     "<h3 align='center'> AGE CALCULATOR "
//         + "<br> Current Year : "+curren_year 
//         + "<br> Birth Year :  " + birth_year 
//         + "<br> Your age is :  " + (curren_year - birth_year)+ "</h3>"
    
// )

// // ****************************************************      Question No 12 ********************************************************************************************

// var radius = 20;
// document.write(
// "<h3 align='center'> The Geometrizer "
//     + "<br> <br> Radius of a circle  : "+radius 
//     + "<br> The circumference is  :  " + (2*3.142*radius)
//     + "<br> The area is :  " + (3.142*(radius * radius))+ "</h3>"

// )

// ****************************************************      Question No 12 ********************************************************************************************

// var favorite_snack = "Lays";
// var your_age = 21;
// var est_age = 200;
// var snacks_per_day = 2;
// document.write(
// "<h3 align='center'> The Lifetime Supply Calculator "
//     + "<br> <br> Favorite Snack  : "+ favorite_snack 
//     + "<br> Current age   :  " + your_age
//     + "<br> Estimated Estimated Age   :  " + est_age
//     + "<br> Amount of Snacks per day   :  " + snacks_per_day
//     + "<br> You will need  " + ((200-21) * (365 * snacks_per_day))+" " +favorite_snack+" to last you until the ripe old age of "+est_age + "</h3>"

// )
// ****************************************************      CHAPTER NO 05 COMPLETE ********************************************************************************************















// // ****************************************************      CHAPTER 6-9 ********************************************************************************************
// // ****************************************************      Question No 01 ********************************************************************************************
// var a_num = parseInt(prompt("Please enter a number"));
// document.write(
    
//     "<h4> Result: <br> The value of a is : "+a_num
//     +" <br> ***************************** <br>"
//     + "<br> The value of ++a is: "+ ++a_num
//     + "<br> Now the value of a is : "+ a_num
    
//     + "<br> <br> The value of a++ is  : " + a_num++ 
//     + "<br> Now the value is  : "+ a_num
    
//     + "<br> <br> The value of --a is  : " + --a_num
//     + "<br> Now the value of --a is  : " + a_num

//     + "<br> <br> The value of --a is  : " + a_num--
//     + "<br> Now the value of a is  : " + a_num
//       +"</h4>"
//     )


// // ****************************************************      Question No 02 ********************************************************************************************
// var a = 2, b = 1;
// var result= "";
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:
// document.write(
//         "<h4> var a = 2, b = 1;<br> var result = --a - --b + ++b + b--; <br>Explain the output at each stage:<br> --a;<br>--a - --b;<br>--a - --b + ++b;<br>--a - --b + ++b + b--; </h4>"
//         +"<h4> Result: <br> The value of a is : "+ a
//         + "<br> The value of b is : "+ b
//         +" <br> ***************************** <br>"
//         + "<br> The value of --a is: 1"
//         + "<br> The value of --b is: 0"
//         + "<br><br> The value of --a - --b is: 1 - 0"
//         + "<br> The result of --a - --b is: " +  (--a - --b)

//         + "<br><br> The value of --a - --b + ++b is: 1 - 0 + 1"
//         + "<br> The result of --a - --b + ++b is: "+ (a-b + ++b )

//         + "<br><br> The value of --a - --b + ++b + b-- is: 1 - 0 + 1 + 1 "
//         + "<br> The result of --a - --b + ++b + b-- is: "+ (++a - b + b + b--)     
       
//  )


// // ****************************************************      Question No 05 ********************************************************************************************
// var user_input = prompt("Please enter a number",5);
// document.write("Wellcome! Sir " + user_input);
// var i=1;
// document.write("<h2> TABLE OF "+ user_input + "<br><br>")
// for(i; i<=10; i++){
//        document.write(user_input + " x "+ " " + i + " "+ " = " + user_input*i + "<br>");
//     }
//     document.write("</h2>")

// // ****************************************************      Question No 06 ********************************************************************************************

// var subject1 = prompt("Enter your first subject name");
// var subject2 = prompt("Enter your second subject name");
// var subject3 = prompt("Enter your third subject name");
// var sub_marks1 = +prompt("Enter your "+subject1+" marks");
// var sub_marks2 = +prompt("Enter your "+subject2+" marks");
// var sub_marks3 = +prompt("Enter your "+subject3+" marks");
// var complete_mrk = sub_marks1 + sub_marks2 + sub_marks3;
// var full_marks = 300;


// document.write("<table  align='center'>"
//                 +"<th colspan='10' id='heading'>"+ "<h1 aligh='center'>"+ "MARK SHEET" + "</h1>" +"</th>"
//                 +"<tr id='firstrow'>"
//                 +"<td>"+"<h4 align='center'>"+" subject "+"</h4>"+"</td>"   
//                 +"<td>"+"<h4 align='center'>"+ " Total Marks " +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ " Obtained Marks " +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ " Percentage " +"</h4>"+"</td>" 
       
//                 +"</tr>"
//                +"<tr id='firstrow'>"
//                 +"<td>"+"<h4 align='center'>"+subject1+"</h4>"+"</td>"   
//                 +"<td>"+"<h4 align='center'>"+100  +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ sub_marks1 +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ (sub_marks1 /100)*100+"%</h4>"+"</td>" 
       
//                 +"</tr>"
//                 +"<tr id='secondRow'>"
//                 +"<td>"+"<h4 align='center'>"+ subject2+"</h4>"+"</td>"   
//                 +"<td>"+"<h4 align='center'>"+100  +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ sub_marks2 +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ (sub_marks2 /100)*100+"%</h4>"+"</td>" 
               
//                 +"</tr>"
//                 +"<tr id='secondRow'>"
//                 +"<td>"+"<h4 align='center'>"+ subject3+"</h4>"+"</td>"   
//                 +"<td>"+"<h4 align='center'>"+100  +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ sub_marks3 +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ (sub_marks3 /100)*100+"%</h4>"+"</td>"  
               
//                 +"</tr>"
//                 +"<tr id='secondRow'>"
//                 +"<td>"+"<h4 align='center'>"+ "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +"</h4>"+"</td>"   
//                 +"<td>"+"<h4 align='center'>"+full_marks  +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ complete_mrk +"</h4>"+"</td>" 
//                 +"<td>"+"<h4 align='center'>"+ (complete_mrk /full_marks)*100+"%</h4>"+"</td>"  
               
//                 +"</tr>"
//                +"</table>");
// // ****************************************************CHAPTER 6-9 COMPLETE ********************************************************************************************












// // ****************************************************CHAPTER 9-11 START ********************************************************************************************
// // ****************************************************      Question No 01 ********************************************************************************************
// var user_car = prompt("Enter your city name");
// if(user_car ==="karachi"){
//     document.write("Welcome to city of lights")
// }

// // ****************************************************      Question No 02 ********************************************************************************************
// var user_gender = prompt("Please enter your gender");
// var m = "male";
// var f = "female";
// if (user_gender == m){
//     document.write("Good Morning Sir")
// }
// else if(user_gender==f){(document.write("Good Morning Ma'am"))}



// // ****************************************************      Question No 03 ********************************************************************************************
// var user_signal = prompt("Please enter your signal color");
// if(user_signal == "red"){
//     document.write("<h3> Must Stop</h3>")
// }else if(user_signal == "yellow"){
//     document.write("<h3> Ready to move</h3>")
// }else if(user_signal == "green"){
//     document.write("<h3> Move Now</h3>")
// }


// // ****************************************************      Question No 04 ********************************************************************************************
// var user_fuel = prompt("Please enter remaining fuel value in litres");
// if(user_fuel < 0.25){
    //     document.write("Please refill the fuel in your car.")
    // }
    
    
    
// // ****************************************************      Question No 05 ********************************************************************************************
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }

// if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }
    

// // ****************************************************      Question No 06 ********************************************************************************************

// var math_marks = +prompt("Please enter math marks");
// var physics_marks = +prompt("Please enter physics marks");
// var chemistry_marks = +prompt("Please enter chemistry marks");
// var obtaine_mrk = math_marks + physics_marks + chemistry_marks;
// var total_subject_mrk = 300;
// var user_percentage= (obtaine_mrk /total_subject_mrk)*100;
// var grade;
// var remarks;
// if(user_percentage<=100 && user_percentage>=80){
//     grade = "A-One";
//     remarks = "Excellent";
// }else if(user_percentage<80 && user_percentage>=70){
//     grade = "A";
//     remarks = "Good";
// }else if(user_percentage<70 && user_percentage>=60){
//     grade = "B";
//     remarks = "You need to improve ";
// }else if(user_percentage<60 && user_percentage>=50){
//     grade = "Fail";
//     remarks = "Sorry";
// }
// document.write("<h1> Marks Sheet </h1>"
// +"<br> <br> <h3>Total marks :  "+ total_subject_mrk
// +"<br> Total marks :  "+ obtaine_mrk
// +"<br> Percentage  :  "+ user_percentage+"%"
// +"<br> Grade  :  "+ grade
// +"<br> Remark  :  "+ remarks
// +"</h3>"

// )


// // ****************************************************      Question No 07 ********************************************************************************************

// var secrete = 6;
// var user_secrete = +prompt("Guesse number between 1 to 10");
// var result;
// if(user_secrete == secrete){
// result="Bingo! Correct answer"
// }else if(user_secrete == 7 || user_secrete==5){
//     result = "Close enough to the correct answer."
// }
// document.write("<h1> Guess Game </h1>"
// +"<h3>"+ result + "</h3>"
// )


// // ****************************************************      Question No 08 ********************************************************************************************

// var user_divide = +prompt("Please enter a number to check is divisible by 3.");
// var divide = user_divide % 3;
// var result_divide;
// if(divide === 0){
//     result_divide = "Yes! Your number is divisible by 3 <br> and your division result is "+ user_divide /3;
// }else(result_divide="No! Your number is not divisible by 3 <br> and your division result is " + user_divide /3)
// document.write("<h1> Division Check </h1>"
// +"<h3>"+ result_divide + "</h3>"
// )

// // ****************************************************      Question No 09 ********************************************************************************************

// var user_even_odd = +prompt("Enter a number to check even or odd");
// var check_even_odd = user_even_odd%2;
// if(check_even_odd===0){
//     document.write("Your number is Even")
// }else if(check_even_odd!==0){
//     document.write("Your number is odd")
// }


// // ****************************************************      Question No 10 ********************************************************************************************
// var user_temperature = +prompt("Enter temperature");
// var weather;
// if(user_temperature > 40){
// weather = "It is too hot outside."
// }else if(user_temperature > 30){
//     weather = "The Weather today is Normal."
// }
// else if(user_temperature > 20){
//     weather = "Today's Weather is cool."
//     }
// else if(user_temperature > 10){
//  weather = "OMG! Today's weather is so Cool."
// }
// document.write("<h1> Temperature Check </h1>"
// +"<h3> "+ weather+ "</h3>"
// )


// // ****************************************************      Question No 11 ********************************************************************************************

// var first_number = +prompt("Ener a number ");
// var second_number = +prompt("Enter second number");
// var operation = prompt("Enter operator");
// var result_operation;
// if(operation == "+"){
// result_operation = first_number + second_number;
// }else if(operation == "-"){
//     result_operation = (first_number -second_number);
// }
// else if(operation == "*"){
//     result_operation = (first_number *second_number);
// }
// else if(operation == "/"){
//     result_operation = (first_number/second_number);
// }
// else if(operation == "%"){
//     result_operation = (first_number %second_number);
// }
// document.write("<h1> Calculator </h1>"
// + "<h3> Your result of "+ first_number + " " + operation +" "+second_number +" is "+ result_operation + "</h3>"
// )
// // ****************************************************      CHAPTER 9-11 COMPLETE ********************************************************************************************









// // ****************************************************      CHAPTER 12-13 START ********************************************************************************************
// // ****************************************************      Question No 01 ********************************************************************************************
// var user_check = prompt("Enter a character");
// var check =  user_check.charCodeAt();
// var result_check;
// if(check>=65 && check<=90){
//     result_check = "Character is Capital";
// }
// if(check>=97 && check<=122){
//     result_check = "Character is Small";
// }
// if(check>=48 && check<=57){
//     result_check = "Character is Number";
// }
// alert(result_check)


// // ****************************************************      Question No 02 ********************************************************************************************
// var user_large = +prompt("Enter a number to check large of small");
// var user_small = +prompt("Enter second number which is greater or small");
// var show;
// if(user_large === user_small){
// show = "Your both number are equal to each other." +user_large +" "+user_small;
// }
// if(user_large>user_small){
//     alert( "Your first number "+user_large + " is larger than " + "Your second number "+user_small)
// }
// if(user_large<user_small){
//     alert("Your second number "+user_small + " is larger than " + "Your first number "+user_large)
// }


// // ****************************************************      Question No 03 ********************************************************************************************
// var user_negative = +prompt("Enter a number for check");
// if(user_negative>0){
//     alert("your number is Positive")
// }
// if(user_negative<0){
//     alert("your number is Negative")
// }
// if(user_negative==0){
//     alert("your number is 0")
// }


// // ****************************************************      Question No 04 ********************************************************************************************
// var user_vowel = prompt("Enter a character");
// if(user_vowel== "a" || user_vowel=="e" || user_vowel=="i" || user_vowel=="o" ||user_vowel=="u" ){
//     alert("True")
// }else(alert(false))


// // ****************************************************      Question No 05 ********************************************************************************************
// var password = "fayyazansari";
// var user_password = prompt("Enter your password");
// if(user_password === ""){
//     alert("Please enter your password")
//     window.location.reload();
// }
// if(user_password === password){
//     document.write("Correct! The password you entered matches the original password.")
// }else(document.write("Incorrect Password"))



// // ****************************************************      Question No 06 ********************************************************************************************

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else(greeting = "Good evening")
// document.write(greeting);

// // ****************************************************      Question No 07 ********************************************************************************************
// var user_clock = +prompt("Enter your time");
// var clock;
// var day;
// if(user_clock===12){
//     day = "pm"
//     clock = 0;
//     }
// if(user_clock>12){
// day = "pm"
// clock = user_clock-12;
// }else(day="am")
// var time = clock+day;
// document.write("Your time is " +time )
// // ****************************************************      CHAPTER 12-13 COMPLETE ********************************************************************************************







// // ****************************************************      CHAPTER 14-16 START ********************************************************************************************
// // ****************************************************      Question No 01 - 07 ********************************************************************************************
// var student = [];
// var student1 = {};
// var string_array = ['1','2','3'];
// var mixed_array = ['fayyaz',1,2,3,false,true];
// var number_array = [1,2,3,4,5,6];
// var education = ['SSC','HSC','BCS','BS','BCOM','MS','M.PHIL','PHD'];
// document.write("<h1> QUALIFICATIONS: </h1><br>")
// for(var i=0; i<8; i++){
//     document.write((i+1) + ") " + education[i] + "<br>")
// }

// // ****************************************************      Question No 08********************************************************************************************
// var studen_names = [' Muhammad ' , ' Fayyaz ', ' Ansari '];
// var studentMarks = [320,230,480];
// var text = "Score of ";
// var is = " is ";
// var percentage;
// for(var i=0; i<3; i++){
//     document.write(text+ studen_names[i] + is + studentMarks[i] +". Percentage: " + ((studentMarks[i]/500)*100) + "% <br>")
// }


// // ****************************************************      Question No 09********************************************************************************************
// var colors = ['red','green','blue'];
// var begin_string = prompt("Enter a color name to add in array");
// colors.unshift(begin_string);
// document.write(colors + "<br>");
// var end_string = prompt("Enter a color name to add in array");
// colors.push(end_string);
// document.write(colors + "<br>");

// colors.unshift("purple",'yellow');
// document.write(colors + "<br>");

// colors.shift();
// document.write(colors + "<br>");

// colors.pop();
// document.write(colors + "<br>");

// var user_index = +prompt('Enter your desired position');
// var user_position = prompt("Enter you color name");
// colors.splice(user_index,0,user_position);
// document.write(colors + "<br>");

// var user_delete = +prompt("enter your desired position where colors name deletion start");
// var user_many = +prompt("How many colors you want to delete");
// colors.splice(user_delete,user_many)
// document.write(colors + "<br>");


// // ****************************************************      Question No 10********************************************************************************************

// var scores = [320,230,480,120];
// document.write( "Scored of Students : "+ scores);
// scores.sort()
// document.write("<br>"+"Ordered Scored of Students : "+ scores);

// // ****************************************************      Question No 11********************************************************************************************

// var cities = ['karachi','Lahore','Islamabad','Quetta','Peshawar'];
// var selected_cities = cities.slice(2,4);
// document.write("Cities List: <br>" +
// cities +"<br>"
// +"<br>"+"Selected Cities list:"
// +"<br>"+ selected_cities
// )




// // ****************************************************      Question No 12********************************************************************************************
// var arr = ["This ", " is ", " my ", " cat"];
// var new_arr = arr.join(" ")

// document.write("<h1>Array: <br>"+arr+"<br>"
// +"<br>"+"<br>"+"<br> String: <br>"+new_arr
// )

// // ****************************************************      Question No 13********************************************************************************************
// var computer = ['keyboard','mouse','printer','monitor'];
// document.write("<h1> Devices: <br>" + computer+
// "<br> <br> Out:"
// +"<br>"+computer.shift()
// +"<br>Out:"
// +"<br>"+computer.shift()
// +"<br>Out:"
// +"<br>"+computer.shift()
// +"<br>Out:"
// +"<br>"+computer.shift()+"</h1>"

// )

// // ****************************************************      Question No 14********************************************************************************************

// var computer_end = ['keyboard','mouse','printer','monitor'];
// document.write("<h1> Devices: <br>" + computer_end+
// "<br> <br> Out:"
// +"<br>"+computer_end.pop()
// +"<br>Out:"
// +"<br>"+computer_end.pop()
// +"<br>Out:"
// +"<br>"+computer_end.pop()
// +"<br>Out:"
// +"<br>"+computer_end.pop()+"</h1>"

// )

// // ****************************************************      Question No 15********************************************************************************************
// var android = ['Apple','Samsung','Motorola','Nokia','Sony','Haier'];
// var andlength = android.length;
// document.write("<h1 align='center'>Drop Down</h1>");
// var text = "<select>";
// for (var i = 0; i < andlength; i++) {
//     text += "<option>" + android[i] + "</option>";
// }
// text += "</select>";
// document.write("<center>"+ text+"</center>"  );
// // ****************************************************   CHAPTER 14-16 END********************************************************************************************










// // ****************************************************   CHAPTER 17-20 START********************************************************************************************
// // ****************************************************   Question No 01-02********************************************************************************************

// var multi = [[],[],[],[]];
// var multidirection = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// document.write("<h2 align=center> Multidimentional Array <br>")
// for(var i=0; i<3; i++){
//     for(var j=0; j<4; j++){
//         document.write( multidirection[i][j] + " ")
//     }
//     document.write("<br>")
// }
// document.write("</h2>")

// // ****************************************************   Question No 03********************************************************************************************
// for(var i=0; i<=10; i++){
//     document.write(i+"<br>")
// }


// // ****************************************************   Question No 04********************************************************************************************
// var user_table= +prompt("Enter a number to show its multiplication table");
// var table_length = +prompt("Enter length multiplication table");
// document.write("<h2> Multiplication table of "+ user_table+" <br>Length: "+table_length+"</h2><br>")
// for(var i=0; i<=table_length; i++){
//     document.write(user_table + " x "+ i + " = "+(i*user_table) +"<br>")
// }
// // ****************************************************   Question No 05********************************************************************************************
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];   
// document.write("<h3 > Arrays with for loop <br> " + fruits +"<br><br>")
// for(var i=0; i<fruits.length; i++){
//     document.write(fruits[i] +"<br>")
// } 
// document.write("<br><br><br><br>")
// for(var i=0; i<fruits.length; i++){
//     document.write("Element at index " + i + " is "+ fruits[i]+ "<br>")
// }
// document.write("</h3>")

// // ****************************************************   Question No 06********************************************************************************************
// var a=[];

// for(var i = 0; i<=15; i++){
//     a.push(i)
// }
// var reverse = [];
// for(var i = 10; i>0; i--){
//     reverse.push(i)
// }
// var even = [];
// for(var i = 0; i<=20; i++){
//     even.push(i);
//     i++;
// }
// var odd = [];
// for(var i=1; i<20; i++){
//     odd.push(i)
//     i++
// }
// var series = [];
// for(var i=2; i<20; i++){
//     series.push(i+"K")
// i++
// }

// document.write("<h3> Counting : <h3>" + a +"<br>")
// document.write("<br><h3> Reverse Counting : " + reverse +"</h3>")
// document.write("<br><h3> Even Counting : " + even +"</h3>")
// document.write("<br><h3> Odd Counting : " + odd +"</h3>")
// document.write("<br><h3> Series : " + series +"</h3>")





// // ****************************************************   Question No 07********************************************************************************************

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_find = prompt("Enter your product which is you want");
// var result;
// for(var i=0; i<A.length; i++){
//     if(user_find ===A[i]){
//        result= "<h3>"+user_find + " is available at index " + i + " in our bakery.<h3>"
//        break;
//     }else(
//        result= "<h3> we are sorr! "+ user_find + " is not available in our bakery.<h3>"
//     )
// }
// document.write(result)



// // ****************************************************   Question No 08********************************************************************************************
// var max_num = [24, 53, 78, 91, 12];
// document.write("<h1> Array items: " + max_num)
// var large_num = max_num.sort();
// document.write( " <br> The largest number is "+large_num.pop() + "</h1>")


// // ****************************************************   Question No 09********************************************************************************************
// var min_num = [24, 53, 78, 91, 12];
// document.write("<h1> Array items: " + min_num)
// var small_num = min_num.sort();
// document.write( " <br> The smallest number is "+small_num.shift() + "</h1>")



// // ****************************************************   Question No 10********************************************************************************************

// var count100 = [];
// for(var i=5; i<=100;){
//     count100.push(i)
//     i += 5;
// }
// document.write("COUNT 100 = " +count100);

// // ****************************************************   CHAPTER 1-20 COMPLETE********************************************************************************************






































