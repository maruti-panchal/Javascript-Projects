const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const symbolSet = "!@#$%^&*()_+"
const numberSet = "0123456789"

const passResult = document.getElementById("result")
const passLength = document.getElementById("length")
const upperInput = document.getElementById("uppercase")
const lowerinput = document.getElementById("lowercase")
const symbolInput = document.getElementById("numbers")
const numberInput = document.getElementById("symbols")

// Genrating random data 
const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

// Generating Random Password
const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperCase);
    }
    if (lowerinput.checked) {
        password += getRandomData(lowerCase);
    }
    if (symbolInput.checked) {
        password += getRandomData(numberSet);
    }
    if (numberInput.checked) {
        password += getRandomData(symbolSet);
    }
    if (password.length <= passLength.value) {
        return generatePassword(password)
    }
    passResult.innerText = truncateString(password, passLength.value);
}
generatePassword();
document.getElementById("generate").addEventListener("click", function () {
    generatePassword();
})
function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}