function calculate() {
    let celcius = document.getElementById("celcius").value;
    let label = document.getElementById("labelC").innerText
    if (validate(celcius)) {
        let result = label.includes("Celcius") ? (celcius * 1.8) + 32 : (celcius - 32) * 5 / 9
        result = Number.isInteger(result) ? result : result.toFixed(2)
        document.getElementById("fahrenheit").value = result;
        document.getElementById("result").value = label.includes("Celcius") ? `${celcius} C x (9/5) + 32 = ${result} F` : `(${celcius} F - 32) x 5/9 = ${result} C`
    }
}

function reserve() {
    let label = document.getElementById("labelC").innerText
    let celcius = document.getElementById("celcius").value;

    label.includes("Celcius") ? isCelcius(true) : isCelcius(false)
    if (celcius != "") {
        calculate()
    }
    removeClass()
}

function isCelcius(status) {
    if (status) {
        document.getElementById("labelC").innerHTML = "Fahrenheit (<sup>o</sup>F)"
        document.getElementById("labelF").innerHTML = "Celcius (<sup>o</sup>C)"
    } else {
        document.getElementById("labelC").innerHTML = "Celcius (<sup>o</sup>C)"
        document.getElementById("labelF").innerHTML = "Fahrenheit (<sup>o</sup>F)"
    }
}



function validate(data) {
    if (data == "") {
        addClass("Form ini tidak boleh kosong!")
        return false;
    } else if (isNaN(data)) {
        addClass("Form ini harus berupa angka!")
        return false
    } else {
        removeClass()
        return true
    }
}

function removeClass() {
    document.getElementById("celcius").classList.remove("error")
    document.getElementById("err_msg").classList.remove("msg_show")
}

function addClass(error_msg) {
    let field = document.getElementById("celcius");
    let msg = document.getElementById("err_msg");
    field.classList.add("error")
    msg.classList.add("msg_show")
    msg.innerText = error_msg
}