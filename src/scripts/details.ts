 import { UserRegistration } from './registration.js';
import {UserDetails} from './userDetails.js';
 
 export function build(username : string) {
  if (username){
    const user : UserRegistration | undefined  = UserDetails.getUserDetails(username);
    if (user) {
      const detailsContainer  : HTMLElement | null = document.getElementById("detailsContainer");
      if (detailsContainer) {
        detailsContainer.innerHTML = `
            <p>Username: ${user[0]}</p>
            <p>Name: ${user[1]}</p>
            <p>Email: ${user[2]}</p>
        `;
    }   
    } else {
      alert("User details not found. Please Register");
      window.location.href = "../pages/registration.html";
    }
  } else {
    alert("User not logged in.");
    window.location.href = "../pages/index.html";
  }
} 

const url : URL = new URL(window.location.href);

build(url.searchParams.get('username')!);
 

 
  