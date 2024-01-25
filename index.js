let count = 0
let countEL = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment(){
    count += 1
    countEL.textContent = count
}

function decrement (){
    if (count > 0){
        count -= 1
        countEL.textContent = count
    }
 }

function save(){
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    count = 0
    countEL.textContent = 0
}

// CALCULATOR STARTS FROM HERE

let num1 = randomnumber()
let num2 = randomnumber()

let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

num1El.textContent = num1
num2El.textContent = num2

let resultEL = document.getElementById("result-el")

function add(){
   let sum = num1 + num2
   resultEL.textContent = "Sum: " + sum
}

function sub(){
   let diff = num1 - num2
   resultEL.textContent = "Difference: " + diff
}

function div(){
   let div = num1 / num2
   resultEL.textContent = "Division: " + div
}

function mul(){
   let prod = num1 * num2
   resultEL.textContent = "Product: " + prod
}


function randomnumber(){
   return Math.floor(Math.random() * 10)
}

function refresh(){
   window.location.reload("Refresh")
}