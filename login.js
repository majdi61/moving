


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


    var userEmail= document.getElementById ("email").value ;
    var userPassword= document.getElementById ("password").value ;
   
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("error" + errorMessage)
        // ...
      });
   
   
   
   
      
   }

   var messagesRef = firebase.database().ref('User');
function signup() {


    var firstname= document.getElementById("First-Name").value;
    var lastname= document.getElementById("Last-Name").value;
    var phone= document.getElementById("phone").value;
    var userEmail= document.getElementById ("email").value ;
    var userPassword= document.getElementById ("password").value ;

    saveMessage(firstname, lastname, phone, userEmail, userPassword);
   
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });


      function saveMessage(firstname, lastname, phone, userEmail, userPassword){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          name: firstname,
          company:lastname,
          email:email,
          phone:phone,
          message:userEmail,
          userPassword:userPassword,
        });
      }
   
   
   
   
      
   }