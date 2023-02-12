const cardholderNameInput = document.getElementById("cardholder-name")
const cardNumberInput = document.getElementById("card-number")
const cardExpDateMmInput = document.getElementById("exp-date-mm")
const cardExpDateYyInput = document.getElementById("exp-date-yy")
const cardCvcInput = document.getElementById("cvc" )
const confirmBtn = document.getElementById("button")

const error = document.getElementsByClassName('error-msg')
const errorCardholderName = document.getElementById("error-cardholder-name")
const errorCardNumber = document.getElementById("error-card-number")
const errorMmYy = document.getElementById("error-mm-yy")
const errorCvc = document.getElementById("error-cvc")

const cardholderName = document.getElementById('name')
const cardNumber = document.getElementById('four-zeros')
const cardExpDateMm = document.getElementById('mm')
const cardExpDateYy = document.getElementById('yy')
const cardCvc = document.getElementById('div-card-back-cvc')

const formCompleted = document.getElementById("div-card-details")
const thankYou = document.getElementById("div-thank-you-hidden")


function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value) 
}
function format(s) {
    return s.toString().replace(/^[^0-9]$/)
}
function setCardholderName(e) {
    cardholderName.innerText = e.target.value
}
function setCardExpDateMm(e) {
    cardExpDateMm.innerText = e.target.value
}
function setCardExpDateYy(e) {
    cardExpDateYy.innerText = e.target.value
}
function setCardCvc(e) {
    cardCvc.innerText = e.target.value
}



cardNumberInput.addEventListener("keyup", setCardNumber)
cardholderNameInput.addEventListener("keyup", setCardholderName)
cardExpDateMmInput.addEventListener("keyup", setCardExpDateMm)
cardExpDateYyInput.addEventListener("keyup", setCardExpDateYy)
cardCvcInput.addEventListener("keyup", setCardCvc)
confirmBtn.addEventListener("click", handleSubmit)


function handleSubmit(e) {
    e.preventDefault()

    if (!isNaN(cardholderNameInput.value) || cardholderNameInput.value == null) {
        errorCardholderName.innerText = "Can't be blank and letters only"
    } else {
        errorCardholderName.innerText = ""
    }
    if (isNaN(cardNumberInput.value) || cardNumberInput.value.length !== 16 || cardNumberInput.value == null) {
        errorCardNumber.innerText = "Can't be blank, numbers only and max, min 16 digits"
    } else { 
        errorCardNumber.innerText = ""
    }
    if (isNaN(cardExpDateMmInput.value) || cardExpDateMmInput.value == null || isNaN(cardExpDateYyInput.value) || cardExpDateYyInput.value == null) {
        errorMmYy.innerText = "Can't be blank and numbers only"
    } else {
        errorMmYy.innerText = ""
    }
    if (cardCvcInput.value == null || cardCvcInput.value.length < 3 || isNaN(cardCvcInput.value)) {
        errorCvc.innerText = "Can't be blank, numbers only and min 3 digits"
    } else {
        errorCvc.innerText = ""
    }
    if (cardholderNameInput.value && cardNumberInput.value && cardExpDateMmInput.value && cardExpDateYyInput.value && cardCvcInput.value) {
            formCompleted.style.display = "none"
            thankYou.style.display = "block"
    }
}