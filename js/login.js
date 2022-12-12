let togglePassword = document.querySelector("#togglePassword");
let password = document.querySelector("#password");

//Password Eye show/hidden
togglePassword.addEventListener('click', function () {
    let type = (password.getAttribute("type") === "password") ? "text" : "password";
    console.log(type)
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
})



//Email format check
let email = document.querySelector("#email");
let alert_email = document.querySelector("#alert_email");
email.addEventListener('input', checkEmail)
function checkEmail() {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

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


//Check Password

// function checkForm() {
//     if (checkEmail() == true && checkPassword() == true) {
//         console.log("Đăng ký thành công");
//         return true;
//     }
//     else {
//         console.log("Thông tin không trùng khớp");
//         return false;
//     }
// }

function validateInfo() {
    if (localStorage.getItem("email") == email.value) {
        if (localStorage.getItem("password") == password.value) {
            alert("Đăng nhập thành công");
            window.location.href = './index.html';
            return true;
        }
        else {
            alert("Sai mật khẩu");
            return false;
        }
    }
    else {
        alert("Tài khoản không tồn tại");
        return false;
    }
}