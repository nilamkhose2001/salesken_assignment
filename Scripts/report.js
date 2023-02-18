import data from "../db.json" assert { type: "json" }
let quetions=data.quetions

let report=JSON.parse(localStorage.getItem("Report"))
console.log(report)

let score=0

let container=document.querySelector("#container")

displayReport()

function displayReport()
{

    container.innerHTML=""

    report.map((el,i)=>{
        let div=document.createElement("div")
        let que=document.createElement("h3")
        que.innerText=`${i+1}) ${el.quetion}`
        let answer=document.createElement("div")

        let correct=document.createElement("h4")
        let op=el.currect
        let z=quetions[i].ans
        correct.innerText=`Answer : ${z[op]}`
        let your_answer=document.createElement("h4")
        op=el.your_answer
        your_answer.innerText=`Your Answer : ${z[op]}`

        answer.setAttribute("class", "Answers")
        correct.setAttribute("class", "correct")
        if(el.currect==el.your_answer)
        {
            score++
        }
        else{
            your_answer.style.color="red"
        }
        answer.append(correct,your_answer)

        div.append(que,answer)
        container.append(div)
    })
}

document.getElementById("score").innerText=`Your Score:${score}/${quetions.length}`