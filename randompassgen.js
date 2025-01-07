function genMyPass(passlen,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols){
 
    const lowercaseChars = "abcedefghijklmnopqrtuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercaseChars : "";
    allowedChars += includeUpperCase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars: "";

    if(passlen<=0)
    {
        return `(The password length must be at least 1)`;
    }
    if(allowedChars.length === 0)
    {
        return `(atleast one charcterset must be true to generate a password)`;
    }

    for(let i = 0 ; i < passlen ; i++){
      
        randomIndex = Math.floor(Math.random()*allowedChars.length);
        password += allowedChars[randomIndex];

    }

    return password;
}




let newPass = document.getElementById("newPass");
const button = document.getElementById("myButton");
const passlen = 8;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumbers = true;
const includeSymbols = true;

button.addEventListener("click",()=>{
  const pass  = genMyPass(passlen,includeLowerCase,includeUpperCase,includeNumbers,includeSymbols);
  newPass.textContent = pass;
  console.log(`Generated Password is: ${newPass}`);
})
