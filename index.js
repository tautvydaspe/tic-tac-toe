//Kaip ir viskas veikia ir viskas yra gerai, bet imanoma laimet,
//Jeigu dedi tarkim kampe apacioj desinej x, tada per viduri x,
//tada desinej per viduri x atsiranda proga laimet
//reiketu pirma O ejima daryt per viduri praktiskai visais atvejais,
//bet tada iskyla problema overwritimo ant vidurinio kvadratelio, tai sita
//problema irgi reiktu sprest
//let xo = true
let firstfilled = false
let secondfilled = false
let thirdfilled = false
let fourthfilled = false
let fifthfilled = false
let sixthfilled = false
let seventhfilled = false
let eighthfilled = false
let ninthfilled = false
let gametype
let isx=true

//Selectors

const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const fourth = document.getElementById("fourth")
const fifth = document.getElementById("fifth")
const sixth = document.getElementById("sixth")
const seventh = document.getElementById("seventh")
const eighth = document.getElementById("eighth")
const ninth = document.getElementById("ninth")
const v1btn = document.getElementById("1v1btn")
const vcompbtn = document.getElementById("1vcompbtn")
const overlay = document.getElementById("overlay")
const choise = document.querySelector(".choise")
const ending = document.querySelector(".ending")
const again=document.getElementById("again")

//Event Listeners

first.addEventListener("click", onGameType)
second.addEventListener("click", onGameType)
third.addEventListener("click", onGameType)
fourth.addEventListener("click", onGameType)
fifth.addEventListener("click", onGameType)
sixth.addEventListener("click", onGameType)
seventh.addEventListener("click", onGameType)
eighth.addEventListener("click", onGameType)
ninth.addEventListener("click", onGameType)
v1btn.addEventListener("click", start)
vcompbtn.addEventListener("click", start)
again.addEventListener("click", reload)


//Functions
function start(e) {
     overlay.classList.remove("active")
     choise.classList.add("inactive")
     if (e.target.id == "1v1btn") {
          gametype = "1v1"
     } else if (e.target.id == "1vcompbtn") {
          gametype = "1vcomp"
     }
}

function onGameType(e) {
     if (gametype === "1v1") {
          buttonClicked1v1(e)
     } else if (gametype === "1vcomp") {
          buttonClickedAI(e)
     }
}

function buttonClicked1v1(button) {
     if (button.target.children[0].textContent == "") {
          if (isx) {
               button.target.children[0].textContent = "X"
               isx=false
          } else {
               button.target.children[0].textContent = "O"
               isx=true
          }
          
          if (button.target.id == "first") {
               firstfilled=true
          } else if (button.target.id == "second") {
               secondfilled=true
          } else if (button.target.id == "third") {
               thirdfilled=true
          } else if (button.target.id == "fourth") {
               fourthfilled=true
          } else if (button.target.id == "fifth") {
               fifthfilled=true
          } else if (button.target.id == "sixth") {
               sixthfilled=true
          } else if (button.target.id == "seventh") {
               seventhfilled=true
          } else if (button.target.id == "eighth") {
               eighthfilled=true
          } else if (button.target.id == "ninth") {
               ninthfilled=true
          }
     }
     end()
}


function buttonClickedAI(button) {
     if (button.target.children[0].textContent == "") {
          button.target.children[0].textContent = "X"
          if (button.target.id == "first") {
               firstfilled=true
          } else if (button.target.id == "second") {
               secondfilled=true
          } else if (button.target.id == "third") {
               thirdfilled=true
          } else if (button.target.id == "fourth") {
               fourthfilled=true
          } else if (button.target.id == "fifth") {
               fifthfilled=true
          } else if (button.target.id == "sixth") {
               sixthfilled=true
          } else if (button.target.id == "seventh") {
               seventhfilled=true
          } else if (button.target.id == "eighth") {
               eighthfilled=true
          } else if (button.target.id == "ninth") {
               ninthfilled=true
          }
          AIzero()
          end()
     }

}

function AIzero() {
     //Kaip priority ziuri ar po du nera (dar vienas ir pralaimejimas butu, del to sitas ifas pirmas)
     if (first.children[0].textContent == "X" && second.children[0].textContent == "X" && thirdfilled==false) {
          third.children[0].textContent = "O"
          thirdfilled = true
          return
     } else if (second.children[0].textContent == "X" && third.children[0].textContent == "X" && firstfilled == false) {
          first.children[0].textContent = "O"
          firstfilled = true
          return
     } else if (fourth.children[0].textContent == "X" && fifth.children[0].textContent == "X" && sixthfilled == false) {
          sixth.children[0].textContent = "O"
          sixthfilled = true
          return
     } else if (fifth.children[0].textContent == "X" && sixth.children[0].textContent == "X" && fourthfilled == false) {
          fourth.children[0].textContent = "O"
          fourthfilled = true
          return
     } else if (seventh.children[0].textContent == "X" && eighth.children[0].textContent == "X" && ninthfilled == false) {
          ninth.children[0].textContent = "O"
          ninthfilled = true
          return
     } else if (eighth.children[0].textContent == "X" && ninth.children[0].textContent == "X" && seventhfilled == false) {
          seventh.children[0].textContent = "O"
          seventhfilled = true
          return
     } else if (first.children[0].textContent == "X" && fourth.children[0].textContent == "X" && seventhfilled == false) {
          seventh.children[0].textContent = "O"
          seventhfilled = true
          return
     } else if (fourth.children[0].textContent == "X" && seventh.children[0].textContent == "X" && firstfilled == false) {
          first.children[0].textContent = "O"
          firstfilled = true
          return
     } else if (second.children[0].textContent == "X" && fifth.children[0].textContent == "X" && eighthfilled == false) {
          eighth.children[0].textContent = "O"
          eighthfilled = true
          return
     } else if (fifth.children[0].textContent == "X" && eighth.children[0].textContent == "X" && secondfilled == false) {
          second.children[0].textContent = "O"
          secondfilled = true
          return
     } else if (third.children[0].textContent == "X" && sixth.children[0].textContent == "X" && ninthfilled == false) {
          ninth.children[0].textContent = "O"
          ninthfilled = true
          return
     } else if (sixth.children[0].textContent == "X" && ninth.children[0].textContent == "X" && thirdfilled == false) {
          third.children[0].textContent = "O"
          thirdfilled = true
          return
     } else if (first.children[0].textContent == "X" && fifth.children[0].textContent == "X" && ninthfilled == false) {
          ninth.children[0].textContent = "O"
          ninthfilled = true
          return
     } else if (fifth.children[0].textContent == "X" && ninth.children[0].textContent == "X" && firstfilled == false) {
          first.children[0].textContent = "O"
          firstfilled = true
          return
     } else if (third.children[0].textContent == "X" && fifth.children[0].textContent == "X" && seventhfilled == false) {
          seventh.children[0].textContent = "O"
          seventhfilled = true
          return
     } else if (fifth.children[0].textContent == "X" && seventh.children[0].textContent == "X" && thirdfilled == false) {
          third.children[0].textContent = "O"
          thirdfilled = true
          return
     //Vienas vienam gale pazymetas, kitas kitam
     } else if (first.children[0].textContent == "X" && ninth.children[0].textContent == "X" && fifthfilled == false) {
          fifth.children[0].textContent = "O"
          fifthfilled = true
          return
     } else if (third.children[0].textContent == "X" && seventh.children[0].textContent == "X" && fifthfilled == false) {
          fifth.children[0].textContent = "O"
          fifthfilled = true
          return
     } else if (first.children[0].textContent == "X" && third.children[0].textContent == "X" && secondfilled == false) {
          second.children[0].textContent = "O"
          secondfilled = true
          return
     } else if (fourth.children[0].textContent == "X" && sixth.children[0].textContent == "X" && fifthfilled == false) {
          fifth.children[0].textContent = "O"
          fifthfilled = true
          return
     } else if (seventh.children[0].textContent == "X" && ninth.children[0].textContent == "X" && eighthfilled == false) {
          eighth.children[0].textContent = "O"
          eighthfilled = true
          return
     } else if (first.children[0].textContent == "X" && seventh.children[0].textContent == "X" && fourthfilled == false) {
          fourth.children[0].textContent = "O"
          fourthfilled = true
          return
     } else if (second.children[0].textContent == "X" && eighth.children[0].textContent == "X" && fifthfilled == false) {
          fifth.children[0].textContent = "O"
          fifthfilled = true
          return
     } else if (third.children[0].textContent == "X" && ninth.children[0].textContent == "X" && sixthfilled == false) {
          sixth.children[0].textContent = "O"
          sixthfilled = true
          return
     }


     //Po viena iesko
     if (first.children[0].textContent == "X" && secondfilled==false) {
          second.children[0].textContent = "O"
          secondfilled=true
     } else if (second.children[0].textContent == "X" && thirdfilled==false) {
          third.children[0].textContent = "O"
          thirdfilled=true
     } else if (third.children[0].textContent == "X" && secondfilled==false) {
          second.children[0].textContent = "O"
          secondfilled=true
     } else if (fourth.children[0].textContent == "X" && fifthfilled==false) {
          fifth.children[0].textContent = "O"
          fifthfilled=true
     } else if (fifth.children[0].textContent == "X" && sixthfilled==false) {
          sixth.children[0].textContent = "O"
          sixthfilled=true
     } else if (sixth.children[0].textContent == "X" && fifthfilled==false) {
          fifth.children[0].textContent = "O"
          fifthfilled=true
     } else if (seventh.children[0].textContent == "X" && eighthfilled==false) {
          eighth.children[0].textContent = "O"
          eighthfilled=true
     } else if (eighth.children[0].textContent == "X" && fifthfilled==false) {
          fifth.children[0].textContent = "O"
          fifthfilled=true
     } else if (ninth.children[0].textContent == "X" && eighthfilled==false) {
          eighth.children[0].textContent = "O"
          eighthfilled=true
     }
}

function end() {
     if ((firstfilled == true && secondfilled == true && thirdfilled == true && fourthfilled == true && fifthfilled == true && seventhfilled == true && eighthfilled == true && ninthfilled == true && sixthfilled == true) || (first.children[0].textContent == "X" && second.children[0].textContent == "X" && third.children[0].textContent == "X") || (first.children[0].textContent == "O" && second.children[0].textContent == "O" && third.children[0].textContent == "O") || (fourth.children[0].textContent == "X" && fifth.children[0].textContent == "X" && sixth.children[0].textContent == "X") || (fourth.children[0].textContent == "O" && fifth.children[0].textContent == "O" && sixth.children[0].textContent == "O") || (seventh.children[0].textContent == "O" && eighth.children[0].textContent == "O" && ninth.children[0].textContent == "O") || (seventh.children[0].textContent == "X" && eighth.children[0].textContent == "X" && ninth.children[0].textContent == "X") || (first.children[0].textContent == "X" && fourth.children[0].textContent == "X" && seventh.children[0].textContent == "X") || (first.children[0].textContent == "O" && fourth.children[0].textContent == "O" && seventh.children[0].textContent == "O") || (second.children[0].textContent == "X" && fifth.children[0].textContent == "X" && eighth.children[0].textContent == "X") || (second.children[0].textContent == "O" && fifth.children[0].textContent == "O" && eighth.children[0].textContent == "O") || (third.children[0].textContent == "X" && sixth.children[0].textContent == "X" && ninth.children[0].textContent == "X") || (third.children[0].textContent == "O" && sixth.children[0].textContent == "O" && ninth.children[0].textContent == "O") || (first.children[0].textContent == "X" && fifth.children[0].textContent == "X" && ninth.children[0].textContent == "X") || (first.children[0].textContent == "O" && fifth.children[0].textContent == "O" && ninth.children[0].textContent == "O") || (third.children[0].textContent == "X" && fifth.children[0].textContent == "X" && seventh.children[0].textContent == "X") || (third.children[0].textContent == "O" && fifth.children[0].textContent == "O" && seventh.children[0].textContent == "O")) {
          overlay.classList.add("active")
          ending.classList.add("active")
     }
}

function reload() {
     location.reload();
}