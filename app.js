function signin() {
    const email = document.getElementById("email1").value
    const password = document.getElementById("password").value
    const fullName = document.getElementById("fullName").value
    const number = document.getElementById("number").value
    const pin = document.getElementById("pin").value

    var message = ""
    console.log(email)
    console.log(password)
    console.log(fullName)
    console.log(number)
    console.log(pin)

    if (!validateEmail(email)) {
        message +="Emaili nuk eshte i sakte"
    }

    if (!validatePassword(password)) {
        message += "\nPasswordi nuk eshte i sakte"
    }

    if (!validateFullname(fullName)) {
        message += "\nEmer dhe mbiemer nuk eshte i sakte"
    }

    if (!validateNumber(number)) {
        message += "\nNumri telefonit nuk eshte i sakte"
    }
    if (!validatePin(pin)) {
        message +=  "\nNumri PIN eshte i gabuar"
    }
    if (validateEmail(email) && validatePassword(password) && validateFullname(fullName) && validateNumber(number) && validatePin(pin)) {

        AddRow(email, password, fullName, number, pin)
        document.getElementById("email1").value = ''
        document.getElementById("password").value = ''
        document.getElementById("fullName").value = ''
        document.getElementById("number").value = ''
        document.getElementById("pin").value = ''
    }
    else
    {
        alert(message)
    }

}

// funksioni qe ben validimin e e-mailit
function validateEmail(email) {
    const characters = "ABCÇDEËFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = characters.toLowerCase()

    if (!characters.includes(email[0]) && !lowercaseChars.includes(email[0])) {
        return false
    }

    const splitEmail = email.split("@")
    if (splitEmail.length !== 2) {
        return false
    }

    const secondPart = splitEmail[1]

    const mailServer = secondPart.split(".")
    if (mailServer.length < 2 || mailServer.length > 3) {
        return false
    }

    const domainName = mailServer[0]
    if (!beginsWithCharacter(domainName) || containsSymbols(domainName)) {
        return false
    }

    const tld = mailServer[1]
    if (containsNumbers(tld) || containsSymbols(tld)) {
        return false
    }

    const countryCode = mailServer[2]
    if (countryCode !== undefined && countryCode.length !== 2) {
        return false
    }

    return true
}
// funksion qe ben validimin e fjalekalimit
function validatePassword(password) {
    const characters = "ABCÇDEËFGHIJKLMNOPQRSTUVWXYZ"
    //gjatesia te jete te pakten 9 karaktere

    if (password.length < 9) {
        return false
    }
    // germa e pare te jete karakter i madh
    if (!characters.includes(password[0])) {
        return false
    }
    // fjalekalimi te permbaj numra dhe simbole (therasim 2 funksionet containsNumbers dhe containsSymbols)
    if (!containsNumbers(password) || !containsSymbols(password)) {
        return false
    }
    return true
}
//funksion qe ben validimin e emrit
function validateFullname(fullName) {

    const nameSplit = fullName.split(" ");
    // Emri i plote duhet te permbaje patjeter dy strings.(shembull Juerald Hoxha).
    if (nameSplit.length !== 2) {
        return false;
    }
    // Emri i plote NUK mund te permbaje karaktere speciale apo numra.
    if (containsNumbers(fullName) || containsSymbols(fullName)) {
        return false
    }
    // Emri ose Mbiemri duhet te jete minimalisht 3 karaktere
    if (nameSplit[0].length < 3 || (nameSplit[1].length < 3)) {
        return false
    }
    return true
}
//funksion qe ben validimin e numrit
function validateNumber(number) {
    /// numri telefonit te permbaje vetem numra
    if (!containsNumbers(number)) {
        return false
    }
    /// numri telefonit te jete vetem 10 elemente
    if (number.length !== 10) {
        console.log("nuk duhet te ekzekutohet")
        return false
    }
    //numri telefonit te filloj vetem me 067 ,068 , 069
    if (!number.startsWith("067") && !number.startsWith("068") && !number.startsWith("069")) {
        return false
    }

    return true
}
//funksion qe ben validimin e PIN
function validatePin(pin) {
    if (pin !== "Mark003" && pin !== "Giulio002" && pin !== "Rafa001") {
        return false
    }
    return true
}

function _containsCharaters(string, chars) {
    for (let i = 0; i < string.length; i++) {
        if (chars.includes(string[i])) {
            return true
        }
    }
    return false
}

function containsSymbols(string) {
    const symbols = "!@#'$%^&*()_-=+{}[]<>`?/~\\|\""

    return _containsCharaters(string, symbols)
}

function containsNumbers(string) {
    const numbers = "1234567890"

    return _containsCharaters(string, numbers)
}

function beginsWithCharacter(string) {
    const characters = "ABCÇDEËFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = characters.toLowerCase()

    return characters.includes(string[0]) || lowercaseChars.includes(string[0])
}

function isVeryLongArray(array) {
    return (array.length > 20)
}

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];

var n = 1;
var x = 0;

function AddRow(email1, password1, fullName1, number1, pin1) {

    if (email1 === undefined) {
        alert("Luli e ka ne joge")
    }
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] =fullName1 ///document.getElementById("fullName").value;
    list2[x] = number1///document.getElementById("number").value;
    list3[x] = email1///document.getElementById("email1").value;
    list4[x] = password1///document.getElementById("password").value;
    list5[x] = pin1///document.getElementById("pin").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);
    var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];
    cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

    n++;
    x++;
}
