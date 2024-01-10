const form = document.querySelector('#login');
const email = document.querySelector('#email').value;
const password = document.querySelector('#pass').value;
const submit = document.querySelector('.btn').value;


// console.log(form,email,password,submit);


form.addEventListener('submit', (e) => 
{
    // let email = document.getElementById('#email') .value;
    // let password = document.querySelector('#pass') .value;
    
    localStorage.setItem('email' ,email);
    localStorage.setItem('password' ,password);
    
    localStorage.getItem('email');
    localStorage.getItem('password');
    alert('your infirmations have been saved');
    e.preventDefault();
}
)
let RegExp = /^([A-Za-z0-9_]+[@]{1}[a-z]+[.]{1}[a-z]{2,10})$/
let upercase = /[A-Z]/;
let lowerCase = /[a-z]/;
let number = /[0-9]/;
let specialCharacter = /[^A-Za-z0-9]/;

if (email.lenght == 0 && password.lenght == 0 )
{
    alert("fill in email and password");
}else if (!password.lenght == 0)
{
    alert("please fill in password");
}else if (!password.lenght < 8 )
{
    alert ("password must be atless 8 characters ");
}else if (!password.match(upercase))
{
    alert ("please add and upercase character");
}else if (!password.match(lowerCase))
{
    alert ("please add and lowerCase character");
}else if (!password.match(number))
{
    alert ("please add and number character");
}else if (!password.match(specialCharacter))
{
    alert ("please add and special character");
}else   if (RegExp.email(email)){
    alert('your email is valid');
    // return true;
}else if (!RegExp.email(email)){
    alert('incorect email');
    // return false;
}else {
    const hasrshedpas = CryptoJS.SHA256(password1).toString();
    //creating user object
    let userData = {
        email:email,
        password: hasrshedpas,
        password:password,
    }
    //saving to localStorage
    localStorage.setItem('userData',JSON.stringify(userData));
    alert('your detail has been succefuly saved to our system. thanks');
    let retrievedData = localStorage.getItem('userData');
    let parsedData = JSON.parse(retrievedData);
    let email = parsedData.email;
    let password = parsedData.password;
}
