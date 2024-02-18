const showpassword = document.querySelector("#eyeclose");
const password = document.querySelector("#id_userpasswordid");

showpassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    this.classList.toggle("fa-eye", !this.classList.contains("fa-eye-slash"));
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
})