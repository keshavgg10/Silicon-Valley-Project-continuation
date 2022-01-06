
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCOz5q4HbDFPWqYd_rJ6q5434-MES1F420",
      authDomain: "kwitter-81261.firebaseapp.com",
      databaseURL: "https://kwitter-81261-default-rtdb.firebaseio.com",
      projectId: "kwitter-81261",
      storageBucket: "kwitter-81261.appspot.com",
      messagingSenderId: "831474300951",
      appId: "1:831474300951:web:411e7fde7d05be76f68452"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+ " !";

    function addRoom() {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }

function getData()
 {
       firebase.database().ref("/").on('value', function(snapshot) 
       {
             document.getElementById("output").innerHTML = "";
             snapshot.forEach(function(childSnapshot) 
             {
                   childKey  = childSnapshot.key;
                         Room_names = childKey;
row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      });
});
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}