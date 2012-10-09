var user1.value = "user" 
var pass1.value = "password"

function checkPass()
{
    //Store the password field objects into variables ...
    var pass = document.getElementById('pass');
    var user = document.getElementById('user');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var goodColor = "#66cc66";
    var badColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if(pass.value == pass1.value){
        //The password + user match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        pass.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Login Successful!"
        //alert("Login Successful!");
    if(user.value == user1.value)
        //The password + user match. 
        //Set the color to the good color and inform
        //the user that they have entered the correct password 
        user.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "Login Successful!"
        //alert("Login Successful!");
    }else{
        //The password + user do not match.
        //Set the color to the bad color and
        //notify the user.
        pass.style.backgroundColor = badColor;
        user.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = "Login Unsuccessful!"
        alert("Login Unsuccessful!");
    }
}  

function newuser()
{
var x;

var name=prompt("Please enter your username","user");

  {
  user1.value = name.value 
  }

var word=prompt("Please enter your password","password");  
  {
  pass1.value = word.value 
  }
}