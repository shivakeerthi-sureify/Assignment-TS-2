import { UserStatus } from "./login.js";
class MyRegistration {
    constructor() {
        this.users = [];
        const usersData = localStorage.getItem("users");
        if (usersData) {
            this.users = JSON.parse(usersData);
        }
    }
    register(username, name, email, password, status) {
        const user = [username, name, email, password, status];
        this.users.push(user);
        localStorage.setItem("users", JSON.stringify(this.users));
    }
}
const registrationForm = document.getElementById("registrationForm");
if (registrationForm) {
    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById("usernameInput");
        const nameInput = document.getElementById("nameInput");
        const emailInput = document.getElementById("emailInput");
        const passwordInput = document.getElementById("passwordInput");
        if (usernameInput && nameInput && emailInput && passwordInput) {
            const username = usernameInput.value;
            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;
            const regObj = new MyRegistration();
            regObj.register(username, name, email, password, UserStatus.Active);
            console.log("Registration is successful !!!");
            alert("Registration successful!");
            window.location.href = "../pages/index.html";
        }
        else {
            alert("Registration failed!");
            window.location.href = "../pages/registration.html";
        }
    });
}
