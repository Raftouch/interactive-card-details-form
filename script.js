const cardholderName = document.getElementById("cardholder-name")
const cardNumber = document.getElementById("card-number")
const expDateMm = document.getElementById("exp-date-mm")
const expDateYy = document.getElementById("exp-date-yy")
const cvc = document.getElementById("cvc" )
const confirmBtn = document.getElementById("button")

const errorCardholderName = document.getElementById("error-cardholder-name")
const errorCardNumber = document.getElementById("error-card-number")
const errorMmYy = document.getElementById("error-mm-yy")
const errorCvc = document.getElementById("error-cvc")





// function myFunction() {
//     var str = document.getElementById("demo").innerHTML; 
//     str = str.replace("apple", "grape");
//     str = str.replace("contents of box a", "contents of box b");
//     document.getElementById("demo").innerHTML = str;
//     }



confirmBtn.onclick = () => {

    // addEventListener --> target.value

    let str = document.getElementById("name").innerHTML
    str = str.replace("Jane Appleseed", cardholderName.value)
    document.getElementById("name").innerHTML = str

    let num = document.getElementById("four-zeros").innerHTML
    num = num.replace("0000 0000 0000 0000", cardNumber.value)
    document.getElementById("four-zeros").innerHTML = num

    let mm = document.getElementById("mm").innerHTML
    mm = mm.replace("00", expDateMm.value)
    document.getElementById("mm").innerHTML = mm

    let yy = document.getElementById("yy").innerHTML
    yy = yy.replace("00", expDateYy.value)
    document.getElementById("yy").innerHTML = yy

    let cvcBack = document.getElementById("div-card-back").innerHTML
    cvcBack = cvcBack.replace("000", cvc.value)
    document.getElementById("div-card-back").innerHTML = cvcBack


    if (cardholderName.value == "") { 
        errorCardholderName.innerHTML = "Can't be blank"
    }
    if (!isNaN(cardholderName.value)) {
        errorCardholderName.innerHTML = "Wrong format, letters only"
    }
    
    else if (isNaN(cardNumber.value)) {
        errorCardNumber.innerHTML = "Wrong format, numbers and max, min 16 digits"
    }
    
    else if (expDateMm.value == "" || expDateYy.value == "") {
        errorMmYy.innerHTML = "Can't be blank"
    }
    else if (isNaN(expDateMm.value) || isNaN(expDateYy.value)) {
        errorMmYy.innerHTML = "Wrong format, numbers only"
    }
    else if (cvc.value == "") {
        errorCvc.innerHTML = "Can't be blank and min 3 digits"
    }
    else if (isNaN(cvc.value)) {
        errorCvc.innerHTML = "Wrong format, numbers only"
    }
  
           

    // if (cardholderName.value == "" || cardNumber.value == "" || expDateMm.value == "" || expDateYy.value == "" || cvc.value == "") {
    //     alert("Please fill all required fields")
    // }

   
    else {
        // let thankYou = document.getElementById("div-card-details")
        // let thankYouHidden = document.getElementById("div-thank-you-hidden")
        // thankYou = thankYou.replace(thankYou, thankYouHidden)
        // document.getElementById("div-card-details") = thankYou

        document.getElementById("div-card-details").style.display = "none"
        document.getElementById("div-thank-you-hidden").style.display = "block"
    }
}

// const creditCardRegex