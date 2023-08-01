export var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Active"] = 0] = "Active";
    UserStatus[UserStatus["Blocked"] = 1] = "Blocked";
})(UserStatus || (UserStatus = {}));
class Login {
    constructor() {
        this.users = [];
        const usersData = localStorage.getItem("users");
        if (usersData) {
            const users = JSON.parse(usersData);
            users.forEach((user) => {
                const userAccess = {
                    username: user[0],
                    password: user[3],
                    status: user[4]
                };
                this.users.push(userAccess);
            });
        }
    }
    login(username, password) {
        const user = this.users.find((u) => u.username === username && u.password === password);
        return user ? user.status : UserStatus.Blocked;
    }
}
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const usernameInput = document.getElementById("usernameInput");
        const passwordInput = document.getElementById("passwordInput");
        if (usernameInput && passwordInput) {
            const username = usernameInput.value;
            const password = passwordInput.value;
            const loginObj = new Login();
            const status = loginObj.login(username, password);
            if (status === UserStatus.Blocked) {
                alert("User is blocked. Cannot proceed to the next page.");
                window.location.href = "../pages/registration.html";
            }
            else {
                window.location.href = `../pages/details.html?username=${username}`;
            }
        }
    });
}
