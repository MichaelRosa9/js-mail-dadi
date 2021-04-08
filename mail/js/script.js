var emails = ["frankstart@gmail.com", "arbi@gmail.com", "johndoe@gmail.com"];
//var mailRequest = prompt("Inserisci mail.")
var insertEmail = prompt("Inserishi mail.")

//email search
userEmail = false //flag
for(var i = 0; i < emails.length; i++){
 var nameEmail = emails[i];
 if(nameEmail === insertEmail ){
  userEmail = true
  break;
 }
}
if(userEmail){
  userEmail = "Ben tornato, " + insertEmail + "!"
 }else{
  userEmail = "Siamo spiacenti, la mail inserita non é registrata "
 }

 document.getElementById("output").innerHTML = userEmail