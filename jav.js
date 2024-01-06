let navbar = document.querySelector('nav')
window.onscroll = function(){
    if(window.scrollY > 0){
        navbar.style.background = "#eefff9"
    }else{
        navbar.style.background = "#eefff9"
    }
}
var meuLinks = document.getElementById('menulinks');
function toggleMenu(){
    meuLinks.classList.toggle('Show-menu');
}
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    

    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 ){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length >=140){
      text = "Please Enter Less Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    console.log(name);
    console.log(subject);
    console.log(email);
    console.log(message);

    alert("Form Submitted Successfully!");
    return true;
  }