//DOM Traversal
let cardNum = document.querySelectorAll(".four")
let cardName = document.querySelector(".card_name")
let cardMonth = document.querySelectorAll(".month")
let cardYear = document.querySelectorAll(".year")
let cardCvc = document.querySelectorAll(".card_cvc")
let inputName = document.querySelector("[name=input_name]")
let inputNum = document.querySelector("[name=input_num]")
let inputMonth = document.querySelector("[name=input_month]")
let inputYear = document.querySelector("[name=input_year]")
let inputCvc = document.querySelector("[name=input_cvc]")
let confirmBtn = document.querySelector(".confirm")
let completeBtn = document.querySelector(".complete")
let form = document.querySelector("form")
let completeState = document.querySelector(".complete_state")

//Tracker
let numCounter = 0
let monthCounter = 0
let yearCounter = 0
let cvcCounter = 0

let reg = {
  "input_name": /^\w+\s\w+$/,
  "input_num": /^\d{16}$/,
  "input_month": /^(0[1-9]|1[0-2])$/,
  "input_year": /^\d{2}$/,
  "input_cvc": /^\d{3}$/
}


//Event Listeners && Functions
inputName.addEventListener("keyup", function (e) {
  let val = e.target.value
  let parent = e.target.parentElement
  let err = parent.querySelector(".error")
  cardName.innerHTML = val
  if(reg["input_name"].test(val)) {
    parent.classList.remove("invalid")
    err.style.display = "none"
    e.target.style.borderColor = "var(--gradient-2)"
  }
  else if (val == "") {
    err.style.display = "none"
    e.target.style.borderColor = "var(--violet-300)"
  }
  else {
    err.style.display = "block"
    e.target.style.borderColor = "var(--red)"
    parent.classList.add("invalid")
  }
})

inputNum.addEventListener("keyup", function (e) {
  let val = e.target.value
  let parent = e.target.parentElement
  let err = parent.querySelector(".error")
  if(e.key == "Backspace") {
    numCounter--
    if(numCounter < 0) {
      numCounter = 0
    }
    if (numCounter < cardNum.length) {
      cardNum[numCounter].innerHTML = 0
    }
  }else {
    if(val.length <= cardNum.length) {
      cardNum[numCounter].innerHTML = val[numCounter]
    }
    numCounter++
  }
  if(reg["input_num"].test(val)) {
    parent.classList.remove("invalid")
    err.style.display = "none"
    e.target.style.borderColor = "var(--gradient-2)"
  }
  else if (val == "") {
    err.style.display = "none"
    e.target.style.borderColor = "var(--violet-300)"
  }
  else {
    parent.classList.add("invalid")
    err.style.display = "block"
    e.target.style.borderColor = "var(--red)"
  }
})

inputMonth.addEventListener("keyup", function (e) {
  let val = e.target.value
  let parent = e.target.parentElement.parentElement
  let top = parent.parentElement
  let err = parent.querySelector(".error")
  if(e.key == "Backspace") {
    monthCounter--
    if(monthCounter < 0) {
      monthCounter = 0
    }
    if (monthCounter < cardMonth.length) {
      cardMonth[monthCounter].innerHTML = 0
    }
  }else {
    if(val.length <= cardMonth.length) {
      cardMonth[monthCounter].innerHTML = val[monthCounter]
    }
    monthCounter++
  }
  if(reg["input_month"].test(val)) {
    if(top.classList.contains("invalid")) {
      top.classList.remove("invalid")
    }
    err.style.display = "none"
    e.target.style.borderColor = "var(--gradient-2)"
  }
  else if (val == "") {
    err.style.display = "none"
    e.target.style.borderColor = "var(--violet-300)"
  }
  else {
    if(!top.classList.contains("invalid")) {
      top.classList.add("invalid")
    }
    err.style.display = "block"
    e.target.style.borderColor = "var(--red)"
  }
})

inputYear.addEventListener("keyup", function (e) {
  let val = e.target.value
  let parent = e.target.parentElement.parentElement
  let top = parent.parentElement
  let err = parent.querySelector(".error")
  if(e.key == "Backspace") {
    yearCounter--
    if(yearCounter < 0) {
      yearCounter = 0
    }
    if (yearCounter < cardYear.length) {
      cardYear[yearCounter].innerHTML = 0
    }
  }else {
    if(val.length <= cardYear.length) {
      cardYear[yearCounter].innerHTML = val[yearCounter]
    }
    yearCounter++
  }
  if(reg["input_year"].test(val)) {
    if(top.classList.contains("invalid")) {
      top.classList.remove("invalid")
    }
    err.style.display = "none"
    e.target.style.borderColor = "var(--gradient-2)"
  }
  else if (val == "") {
    err.style.display = "none"
    e.target.style.borderColor = "var(--violet-300)"
  }
  else {
    if(!top.classList.contains("invalid")) {
      top.classList.add("invalid")
    }
    err.style.display = "block"
    e.target.style.borderColor = "var(--red)"
  }
})

inputCvc.addEventListener("keyup", function (e) {
  let val = e.target.value
  let parent = e.target.parentElement
  let top = parent.parentElement
  let err = parent.querySelector(".error")
  if(e.key == "Enter") {
    return
  }
  if(e.key == "Backspace") {
    cvcCounter--
    if(cvcCounter < 0) {
      cvcCounter = 0
    }
    if (cvcCounter < cardCvc.length) {
      cardCvc[cvcCounter].innerHTML = 0
    }
  }else {
    if(val.length <= cardCvc.length) {
      cardCvc[cvcCounter].innerHTML = val[cvcCounter]
    }
    cvcCounter++
  }
  if(reg["input_cvc"].test(val)) {
    if(top.classList.contains("invalid")) {
      top.classList.remove("invalid")
    }
    err.style.display = "none"
    e.target.style.borderColor = "var(--gradient-2)"
  }
  else if (val == "") {
    err.style.display = "none"
    e.target.style.borderColor = "var(--violet-300)"
  }
  else {
    if(!top.classList.contains("invalid")) {
      top.classList.add("invalid")
    }
    err.style.display = "block"
    e.target.style.borderColor = "var(--red)"
  }
})

confirmBtn.addEventListener("click", function (e) {
  e.preventDefault()
  let invalid = form.querySelector(".invalid");
  if(invalid == null) {
    form.style.transform = "rotateY(180deg)"
    completeState.style.transform = "rotateY(360deg)"
  }
  else {
    e.preventDefault()
  }
})

completeBtn.addEventListener("click", function () {
  completeState.style.display = "none"
})