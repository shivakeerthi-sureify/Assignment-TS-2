import { UserStatus } from "./login.js";

export type UserRegistration = [string, string, string, string, UserStatus];

class MyRegistration {
  private users: UserRegistration[] = [];

  constructor() {
    const usersData : string | null = localStorage.getItem("users");
    if (usersData) {
      this.users = JSON.parse(usersData);
    }
  }

  register(username: string, name: string, email: string, password: string, status: UserStatus): void {
    const user: UserRegistration = [username, name, email, password, status];
    this.users.push(user);
    localStorage.setItem("users", JSON.stringify(this.users));
  }
}

const registrationForm = document.getElementById("registrationForm");

if (registrationForm) {
  registrationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const usernameInput : HTMLInputElement | null = document.getElementById("usernameInput") as HTMLInputElement;
    const nameInput : HTMLInputElement | null = document.getElementById("nameInput") as HTMLInputElement;
    const emailInput : HTMLInputElement | null = document.getElementById("emailInput") as HTMLInputElement;
    const passwordInput : HTMLInputElement | null = document.getElementById("passwordInput") as HTMLInputElement;

    if (usernameInput && nameInput && emailInput && passwordInput) {
      const username : string | null= usernameInput.value;
      const name : string | null = nameInput.value;
      const email : string | null = emailInput.value;
      const password : string | null = passwordInput.value;
      const regObj  : MyRegistration = new MyRegistration();
      regObj.register(username, name, email, password, UserStatus.Active);
      console.log("Registration is successful !!!");
      alert("Registration successful!");
      window.location.href = "../pages/index.html";
    } else {
      alert("Registration failed!");
      window.location.href = "../pages/registration.html";
    }
  });
}
