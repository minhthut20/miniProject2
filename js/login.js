// con mắt ở phần nhập mật khẩu 
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

//check định dạng mật khẩu
// password.addEventListener('input', function () {
//     let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,15}$/;
//     let alert0 = document.getElementById("alert0");
//     if (password.value.match(decimal)) {
//         document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
//         alert0.style.color = 'green';
//         return true;
//     }
//     else {
//         document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
//         alert0.style.color = 'red';
//         return false;
//     }
// })

//check email có tồn tại hay chưa
let email = document.querySelector("#email")
// let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let alertEmail = document.querySelector("#alertEmail");
email.addEventListener('input', function () {
    for (i = 0; i < arr.length; i++) {
        if (email.value == arr[i].id) {
            alertEmail.innerHTML = "Email hợp lệ";
            alertEmail.style.color = "green"
            return true
        }
        else {
            alertEmail.innerHTML = "Email không tồn tại"
            alertEmail.style.color = "red"
            return false
        }
    }
})



//check tài khoản đki rồi thì mới vào được trang chủ
let accountList = localStorage.getItem("key")
let arr = JSON.parse(accountList)
function checkPassword() {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == email.value) {
            if (arr[i].pass == password.value) {
                // console.log("thanh cong");
                alert("Đăng nhập thành công")
                return true
            }
            else {
                // console.log("mk sai");
                alert("Mật khẩu không đúng")
                return false
            }
        }
        else {
            // console.log("emai k ton tai");
            alert("Tài khoản này không tồn tại")
            return false
        }
    }
}




