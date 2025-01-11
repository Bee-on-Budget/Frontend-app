
const ALLOWEED_CHARACTERS = `abcdefghijklmnopqrstuvwxyz1234567890~!$%^&*_=+}{'?-.@`

export function validateEmail(email){
    if ((email != "")) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let emailAddress = email;
        
        emailAddress = emailAddress.trim();
        emailAddress = emailAddress.toLowerCase();
        
        if (emailRegex.test(emailAddress)) {
            let emailValid = true; 
            
            for(let char of emailAddress) {
                if (!ALLOWEED_CHARACTERS.includes(char)) {
                    emailValid = false;
                    break;
                }
            }
            
            if (emailValid) {
                console.log(emailAddress);
                console.log("AUTH THROUGH EMAIL NOT IMPLEMENTED YET")
                return 'valid'
            }
            else {
                console.log("email invalid!")
                return 'invalid'
            }
        }
        else {
            console.log("email invalid!")
            return 'invalid'
        }
        
    }
    else{
        return 'empty'
    }
}

export function validatePassword(password) {

    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
  
    if (!/[A-Z]/.test(password)) {
      return "Password must contain at least one uppercase letter.";
    }
  
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return "Password must contain at least one special character.";
    }
  
    if (!/[0-9]/.test(password)) {
      return "Password must contain at least one number.";
    }

    return "valid";
  }