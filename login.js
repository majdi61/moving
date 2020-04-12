firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("connect").style.display ="block"
      document.getElementById("connected").style.display ="none"

    } else {
        document.getElementById("connect").style.display ="none"
        document.getElementById("connected").style.display ="block"
  
    }
  });



function login () {


 var userEmail= document.getElementById ("email_field").value ;
 var userPassword= document.getElementById ("password_field").value ;

 firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert ("error"+errorMessage)
    // ...
  });




   
}


function signup() {


    var userEmail= document.getElementById ("email_field").value ;
    var userPassword= document.getElementById ("password_field").value ;
   
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("error" + errorMessage)
        // ...
      });
   
   
   
   
      
   }

   
function signup() {


    var userEmail= document.getElementById ("email_field").value ;
    var userPassword= document.getElementById ("password_field").value ;
   
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
   
   
   
   
      
   }