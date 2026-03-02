const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const errorDiv = document.getElementById('errorMessage');
const countSpan = document.getElementById('countDisplay');


let invalidCount = 0;


function validateForm(event) {
    
    event.preventDefault();


    const email = emailInput.value.trim();
    const password = passwordInput.value;

    let errorMsg = '';


    if (!email.includes('@')) {
        errorMsg += 'Email must contain "@".<br>';
    }

   
    if (password.length < 6) {
        errorMsg += 'Password must be at least 6 characters.<br>';
    }
    if (!password.includes('#')) {
        errorMsg += 'Password must contain "#".<br>';
    }

    
    if (errorMsg !== '') {
       
        errorDiv.innerHTML = errorMsg;

        
        invalidCount++;
   
        countSpan.textContent = invalidCount;
    } else {
       
        errorDiv.innerHTML = '';

     
        alert('Form is valid! (no actual submission happens)');
    }
}


form.addEventListener('submit', validateForm);