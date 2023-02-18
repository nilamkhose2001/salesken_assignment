import { Navbar } from "../Component/Navbar.js";

let userData = JSON.parse(localStorage.getItem("userData"));

document.querySelector("#navbar").innerHTML = Navbar();
document.querySelector("#btn").addEventListener("click", handleLogin);

function handleLogin() {
  let userName = document.querySelector("#username").value;
  let password = document.querySelector("#password").value;
  let flag = false;
  if (!userName || !password) {
    alert("Please enter all credentials");
  } else {
    userData?.map((user) => {
      if (user.userName == userName) {
        if (user.password == password) {
          flag = true;
          alert("Login successful...!");
          window.location.href = "quiz.html";
        } else {
          flag = true;
          alert("Wrong Credentials...");
        }
      }
    });

    if (flag == false) {
      alert("User not found....please Sign Up First");
    }
  }
}
