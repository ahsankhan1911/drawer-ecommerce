function phonenumber(inputtxt){
  var regExp = /^\d{10}$/;
  if(inputtxt.match(regExp)) {

    return true
  }
     
  else {
      var erroMsg = document.getElementById('erroMsg')
      erroMsg.style.color = "red";
      erroMsg.innerText = "Invalid Phone number ! (10 digits)"
     
      return false;
  }
}