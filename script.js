const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// Registered users array
const users = [];

function signup() {
    let username = document.getElementById("u-Name").value;
    let email = document.getElementById("signup-Email").value;
    let password = document.getElementById("pwd").value;
    
    if (username && email && password) {
        users.push({ username: username, email: email, password: password });

        alert("Sign up successful");
        console.log("You have successfully added a user");
        console.log(users);
        
        document.getElementById("u-Name").value = '';
        document.getElementById("signup-Email").value = '';
        document.getElementById("pwd").value = '';
        
     }
    //  else {
    //      alert("Please fill in all fields for registration");
    //  }
}

function signin() {
    let username = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
    let user = users.find(user => user.username === username && user.password === password);

    if (user) {
        console.clear();
        otp = Math.floor(1000 + Math.random() *9000);
        console.log(`Generated otp: ${otp}`);
        let containerClose = document.getElementById("cnclose");
        containerClose.style.display = "none";
        let otpopen = document.getElementById("containerotp");
        otpopen.style.display = "flex";
        // alert("Sign in successful");
      
    }
    else {
        alert("Invalid username or password");
    }
}

// Attach event listeners to the forms
document.querySelector(".sign-in-form").addEventListener("submit", function(e) {
    e.preventDefault();
    signin();
});

document.querySelector(".sign-up-form").addEventListener("submit", function(e) {
    e.preventDefault();
    signup();
});

// find method start

const stds = document.getElementById("u-Name");
function add() {
    console.clear();
    const email = prompt("plx enter you Name");

    const found = stds.find( ( items)=>{  return items == email } );
console.log(found); 

if(!found){
   stds.push(email);
    console.log(stds);
}
else{
    console.log("already exist");
}
}
function verfiotp(){
    let otpInput = [
        document.getElementById("otp1").value,
        document.getElementById("otp2").value,
        document.getElementById("otp3").value,
        document.getElementById("otp4").value,
    ].join('');

    if (parseInt(otpInput) === otp) {
        alert("OTP VERIFIED SUCCESSFUL");
        console.log("OTP verified successfully");
        
        // Clear the OTP input fields and hide the OTP section
        clearOtpFields();
        document.getElementById("containerotp").style.display = "none";
    } else {
        alert("OTP verification failed. Please try again.");
        console.log("OTP verification failed");
    }
}
function clearOtpFields() {
    document.getElementById("otp1").value = '';
    document.getElementById("otp2").value = '';
    document.getElementById("otp3").value = '';
    document.getElementById("otp4").value = '';
}

// loader start here

const myLoader = document.getElementById("loader");

// Show the loader as soon as the script runs
myLoader.style.display = "block";

// Hide the loader after 1 second
setTimeout(() => {
    myLoader.style.display = "none";
}, 2000);
