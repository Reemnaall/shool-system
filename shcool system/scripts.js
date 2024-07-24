 document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(event) {
            event.preventDefault();
           const username = document.getElementById('username').value;
           const email = document.getElementById('email').value;
           const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
           const message = document.getElementById('message');
            
            // Dummy email check
           const usedEmails = ['test@example.com']; // Example of used emails

           if (password !== confirmPassword) {
                message.textContent = 'Password does not match';
                return;
            }

       if (usedEmails.includes(email)) {
               message.textContent = 'Email has already been registered';
               return;
            }

            message.textContent = 'Registration successful!';
        });
   }
});
