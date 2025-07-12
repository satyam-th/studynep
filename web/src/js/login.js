//For sign-up
const signUp=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(email && password){
        localStorage.setItem("Email",email);
        localStorage.setItem("Password",password);

        alert("Sign Up Successfully!");

    } else {
        alert("Please fill up both field to sign up!");
        }

}
 // For login 

 const logIn=()=>{
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    const savedEmail=localStorage.getItem("Email");
    const savedPassword=localStorage.getItem("Password");

    if(email==savedEmail && password==savedPassword){
        alert("Login Successfull!");

         setTimeout(() => {
            window.location.href = "../index.html";
        }, 1000);
    }
     

    else {
       alert("Invalid email or password!");
    }
 }