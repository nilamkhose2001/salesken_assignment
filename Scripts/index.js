

import { Navbar } from "../Component/Navbar.js";
let userData=JSON.parse(localStorage.getItem("userData"))||[];
document.querySelector("#navbar").innerHTML=Navbar()

document.querySelector("#btn").addEventListener("click",handleSubmit)




function handleSubmit()  {
    let email=document.querySelector("#email").value
    let userName=document.querySelector("#username").value
    let password=document.querySelector("#password").value
    let flag=false
    userData?.map((user)=>{
        if(user.email==email)
        {
            flag = true
            alert("User already exists")
        }
    })

    if(flag==false){
        let data={email,userName,password}
        userData.push(data)
        localStorage.setItem("userData",JSON.stringify(userData))
        alert("Sign Up Successfully...! Please Login!")
        
    }
}