import {UserRegistration} from './registration.js';

export namespace UserDetails {
  
    export function getUserDetails(username: string): UserRegistration | undefined {
      const userDetailsJson : string | null = localStorage.getItem("users");
      const userDetails: UserRegistration[] = userDetailsJson ? JSON.parse(userDetailsJson) : [];
      return userDetails.find(user => user[0] === username);
    }
  }

  