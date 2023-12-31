import {UserRegistration} from './registration.js';
export  enum UserStatus {
    Active,
    Blocked,
  }
  
  export interface UserAccess {
    username: string;
    password: string;
    status: UserStatus;
  }
  
  class Login {
    private users: UserAccess[] = [];
    
    
    constructor() {
        const usersData : string | null = localStorage.getItem("users");
        
        if (usersData) {
          const users : UserRegistration [] = JSON.parse(usersData);
          users.forEach( (user : UserRegistration)=> {
              const userAccess: UserAccess = {
                username: user[0],
                password : user[3],
                status : user[4]
          };
          this.users.push(userAccess);});
          
        }
      }
  
      login(username: string, password: string): UserStatus {
        const user: UserAccess | undefined = this.users.find((u: UserAccess) => u.username === username && u.password === password);
        return user ? user.status : UserStatus.Blocked;
      }
      
  }
  
  const loginForm  :HTMLElement | null  = document.getElementById("loginForm");
  
  if (loginForm) {
    loginForm.addEventListener("submit",  (e) => {
      e.preventDefault();
      const usernameInput : HTMLInputElement | null = document.getElementById("usernameInput") as HTMLInputElement;
      const passwordInput : HTMLInputElement | null = document.getElementById("passwordInput") as HTMLInputElement;
  
      if (usernameInput && passwordInput) {
        const username  : string = usernameInput.value;
        const password : string = passwordInput.value; 
        const loginObj : Login = new Login();
        const status : UserStatus = loginObj.login(username, password);

        if (status === UserStatus.Blocked) {
          alert("User is blocked. Cannot proceed to the next page.");
         window.location.href = "../pages/registration.html";
        } else {
          window.location.href = `../pages/details.html?username=${username}`; 
        }
      }
    });
  }

