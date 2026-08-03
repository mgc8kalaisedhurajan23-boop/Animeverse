function login() {

    let myemail = document.getElementById("email").value;
    let mypassword = document.getElementById("password").value;

    if (myemail === "anime@123" && mypassword === "654321") {

        localStorage.setItem("isLoggedin", "true");
        localStorage.setItem("user", myemail);

        window.location.replace("home.html");
    } 
    else {
        alert("Invalid username or password");
    }
}