let LoginForm = document.getElementById("LoginForm");
let RegForm = document.getElementById("RegForm");
let Indicator = document.getElementById("indicator");

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(10rem)"
}
function login(){
    RegForm.style.transform = "translateX(30rem)";
    LoginForm.style.transform = "translateX(30rem)";
    Indicator.style.transform = "translateX(0px)";

}
RegForm.addEventListener("submit",function(event){
    event.preventDefault();
    window.location.href="./index.html"
})