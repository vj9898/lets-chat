
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC03H3ifp8CCJcif8FD662WJJLBCxIebTE",
      authDomain: "kwitter-46e4a.firebaseapp.com",
      projectId: "kwitter-46e4a",
      storageBucket: "kwitter-46e4a.appspot.com",
      messagingSenderId: "312882515919",
      appId: "1:312882515919:web:821b68b455d34e13dfccba"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
