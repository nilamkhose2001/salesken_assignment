
import data from "../db.json" assert { type: "json" }
let quetions=data.quetions

let report=[]
let i=0
console.log("i",i)
let ansElement=document.querySelectorAll(".answer")
console.log("ansElement",ansElement)
let que=document.querySelector("#que")


let a=document.querySelector("#a")
let b=document.querySelector("#b")
let c=document.querySelector("#c")
let d=document.querySelector("#d")


let label_a=document.querySelector("#A")
let label_b=document.querySelector("#B")
let label_c=document.querySelector("#C")
let label_d=document.querySelector("#D")

let nextButton=document.querySelector("#nextbtn")


display()

function display()
{
    deselectAns()

    

    que.innerText=quetions[i].que

    label_a.innerText=quetions[i].ans.a
    label_b.innerText=quetions[i].ans.b
    label_c.innerText=quetions[i].ans.c
    label_d.innerText=quetions[i].ans.d

    console.log("Q")
   // let your_answer=getAnswer()
}


function deselectAns(){
    ansElement.forEach(el=>el.checked=false)
}


function getAnswer(){
    let c
    ansElement.forEach((el,i)=>{
        if(el.checked){
           c= el.id
        }
    })
    return c
}


nextButton.addEventListener("click",(e)=>{
e.preventDefault()
    let your_answer=getAnswer()
    let obj={
        quetion:quetions[i].que,
        currect:quetions[i].ans.correct,
        your_answer
    }
    report.push(obj)
    i++
    console.log(i)
    if(i<quetions.length){
       display() 
    }
    else{
        localStorage.setItem('Report',JSON.stringify(report))
        window.location.href='Report.html'
    }
})