


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
          firstname: firstname,
          lastname:lastname,
          email:email,
          phone:phone,
          message:userEmail,
          userPassword:userPassword,
        });
      }
   
   
   
   
      
   }

   var messagesRef = firebase.database().ref('booknow');
   function booknow() {
     console.log("test")

    var date= document.getElementById("date").value;
    var sizes= document.getElementById ("sizes").value ;

    var firstnameb= document.getElementById("firstname").value;
    var lastnameb= document.getElementById("lastname").value;
    var originadressb= document.getElementById("origin-adress").value;
    var destinationadressb= document.getElementById("destination-adress").value;

    var phoneb= document.getElementById("phone").value;
    var userEmailb= document.getElementById ("email").value ;
    var descriptionb= document.getElementById ("description").value ;


    saveMessage(date, sizes, firstnameb, lastnameb, originadressb,destinationadressb,phoneb,userEmailb,descriptionb);
   
    


      function saveMessage(date, sizes, firstnameb, lastnameb, originadressb,destinationadressb,phoneb,userEmailb,descriptionb){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          date: date,
          sizes:sizes,
          firstnameb:firstnameb,
          lastnameb:lastnameb,
          originadressb:originadressb,
          destinationadressb:destinationadressb,
          phoneb: phoneb,
          userEmailb:userEmailb,
          descriptionb:descriptionb,
        });
      }
   
   
      document.getElementById('myform').reset();

      
   }

   var messagesRef = firebase.database().ref('booknow');
   function contact() {


    var fullname= document.getElementById("fullname").value;
    var how= document.getElementById("how").value;

    var phoneb= document.getElementById("phone").value;
    var userEmailb= document.getElementById ("email").value ;
    var message= document.getElementById ("message").value ;


    saveMessage(fullname, how,phoneb,userEmailb,message);
   
    


      function saveMessage( fullname, how, phoneb,userEmailb,message){
        var newMessageRef = messagesRef.push();
        newMessageRef.set({
          fullname: fullname,
          how_did_your_hear_about_us:how,
          userEmailb:userEmailb,
          phoneb: phoneb,
          message:message,
        });
      }
   
      document.getElementById('myform').reset();
   
   
      
   }