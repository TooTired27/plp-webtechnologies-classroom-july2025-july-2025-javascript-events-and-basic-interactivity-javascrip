document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
let count=0;
const counterDisplay=document.getElementById('counter');
document.getElementById('increase').addEventListener("click", () => {
    count++;
    counterDisplay.textContent=count;
});
document.getElementById('decrease').addEventListener("click", () => {
    count--;
    counterDisplay.textContent=count;
});
document.getElementById('reset').addEventListener("click", () => {
    count=0;
    counterDisplay.textContent=count;
});
document.addEventListener("DOMContentLoaded", () => {
    const toggle=document.querySelector("faqToggle");
    const answer=document.querySelector("faqAnswer");
    toggle.addEventListener("click", () => {
        answer.style.display=answer.style.display==="none"?"block":"none";
    }); 
});
//form-validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const message=document.getElementById("FormMessage").value.trim();
    //basic validation
    if(name===""||email===""||password===""||message==="") {
        message.textContent="Please fill in all fields.";
        return;
    }
    //simple email format
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        message.textContent="Please enter a valid email address.";
        message.style.color="red";
        return;
    }
    if(password.length<8){
        message.textContent="Password must be at least 8 characters long.";
        message.style.color="red";
        return;
    }
    message.textContent="Form submitted successfully!";
    message.style.color="green";
    
});