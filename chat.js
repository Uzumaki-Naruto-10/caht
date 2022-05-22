// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPXrAcqUile06_ZuHzR9OvYt_nii5ln7A",
    authDomain: "project-100-ab076.firebaseapp.com",
    databaseURL: "https://project-100-ab076-default-rtdb.firebaseio.com",
    projectId: "project-100-ab076",
    storageBucket: "project-100-ab076.appspot.com",
    messagingSenderId: "495456266252",
    appId: "1:495456266252:web:31f568337d94aed6eee629"
  };
  

  
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



