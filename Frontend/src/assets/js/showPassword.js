const togglePasswordVisibility = (e) => {
    const passwordInput = document.getElementById('password'); 
    const passwordIcon = document.querySelector('.password-icon i'); 
    if (passwordInput.type === 'password') {
         passwordInput.type = 'text'; 
         passwordIcon.className = 'fas fa-eye-slash'; 
        } 
        else { passwordInput.type = 'password'; 
        passwordIcon.className = 'fas fa-eye'; 
}
}

export default togglePasswordVisibility;