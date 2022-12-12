let togglePassword = document.querySelector("#togglePassword");
let password = document.querySelector("#password");

//Password Eye show/hidden
togglePassword.addEventListener('click', function () {
    let type = (password.getAttribute("type") === "password") ? "text" : "password";
    console.log(type)
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
})


let re_togglePassword = document.querySelector("#re-togglePassword");
let re_password = document.querySelector("#re-password");

re_togglePassword.addEventListener('click', function () {
    let type = re_password.getAttribute("type") === "password" ? "text" : "password";
    re_password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
})


//Email format check
let email = document.querySelector("#email");
let alert_email = document.querySelector("#alert_email");
email.addEventListener('input', checkEmail)
function checkEmail() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userinfo = JSON.parse(localStorage.getItem("user"));
    for (let i = 0; i < userinfo.length; i++) {
        if (email.value == userinfo[i].email) {
            alert_email.innerHTML = "Email is exits!!!"
            alert_email.style.color = 'red'
            email.style.outline = '3px solid red'
            return false;
        }
    }
    if (email.value.match(mailformat)) {
        alert_email.innerHTML = "Valid email address!!!"
        alert_email.style.color = 'green'
        email.style.outline = '3px solid green'
        return true;
    }
    else {
        alert_email.innerHTML = "Invalid email address!!!"
        alert_email.style.color = 'red'
        email.style.outline = '3px solid red'
        return false;
    }
}



//Check Password's length
let alert0 = document.getElementById("alert0");
password.addEventListener('input', checkPassword)
function checkPassword() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (password.value.match(decimal)) {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, Special char, and length 8-15";
        alert0.style.color = 'green';
        password.style.outline = '3px solid green'
        return true;
    }
    else {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, Special char, and length 8-15";
        alert0.style.color = 'red';
        password.style.outline = '3px solid red'
        return false;
    }
}

//Re-password check
let alert1 = document.getElementById("alert1");
re_password.addEventListener('input', checkRepassword)
function checkRepassword() {
    if (password.value == re_password.value) {
        alert1.innerHTML = "Passwords match!";
        alert1.style.color = 'green';
        re_password.style.outline = '3px solid green';
        return true;
    }
    else {
        alert1.innerHTML = "Passwords do NOT match!";
        alert1.style.color = 'red';
        re_password.style.outline = '3px solid red';
        return false
    }
}


//Check Password
let usersRegister = []
function checkForm() {
    if (checkEmail() == true && checkPassword() == true && checkRepassword() == true) {
        return true;
    }
    else {
        // console.log("Thông tin không trùng khớp");
        return false;
    }
}

//Save info to localStorage
let account = [];
let check = localStorage.getItem('user');
console.log(check == null);
if (check == null) {
    account = [];
}
else {
    account = JSON.parse(check);
    // console.log(account);
}

let register = document.querySelector("button#register");
register.addEventListener('click', function () {
    if (checkForm() == true) {
        account.push({
            email: email.value,
            password: password.value
        })
        localStorage.setItem("user", JSON.stringify(account));
        alert("Đăng ký thành công");
    }
})





//Other Info
// let user = localStorage.getItem("user");
// console.log(userinfo[1].email);

// let account = [];
// let register = document.querySelector("button#register");
// register.addEventListener('click', function () {
//     if (checkForm() == true) {
//         alert("Đăng ký thành công");
//         localStorage.setItem('email', email.value);
//         localStorage.setItem('password', password.value);
//     }
// })