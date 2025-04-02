document.getElementById("signup").addEventListener('submit',function(event){
    event.preventDefault();
    document.querySelectorAll('.error').forEach(e =>e.textContent="");

   let isValid=true;

   let name = document.getElementById('name').value.trim();
   let email = document.getElementById('email').value.trim();
   let password = document.getElementById('password').value.trim();
   let confirmPassword = document.getElementById('confirmPassword').value.trim();

   if(name === ""){
    document.getElementById('nameError').textContent='Name is required';
    isValid=false;
   }
   
   let Email = document.getElementById('email').value.trim();
   if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
} else if (!email.includes("@") || email.indexOf(".") === -1 || email.indexOf("@") > email.lastIndexOf(".")) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
}
   if(password.length < 8){
    document.getElementById('passwordError').textContent ='password must be atleast 8 character long ';
    isValid=false;
   }
   if(confirmPassword !== password){
    document.getElementById('confirmPasswordError').textContent ='passwords do not match';
    isValid=false;
   }

   if(isValid) {
    alert("Signup successful!");
   }
});