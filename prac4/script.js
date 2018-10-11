
var submitButton = document.querySelector("#submit");
var userid= document.getElementsByName("userid")[0];
var password=  document.getElementsByName("password")[0];

userid.onfocus=()=>submitChangeText();
password.onfocus=()=>submitChangeText();

var submitChangeText=function(){
	submitButton.value= "Submit"
}
submitButton.onclick = ()=>{
  if(userid.value.trim()===""|| password.value.trim()===""){
	  submitButton.value= "Fill empty fields"
	  event.preventDefault();
  }
 
}
