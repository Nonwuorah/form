
    //Adding the JS functions

    const form = document.getElementById("form");
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const password2 = document.getElementById("password2");

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInput();
    })

    function checkInput(){
        //Get the vale from the input

        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const password2Value = password2.value.trim();

        //Username validation
        if(usernameValue === ''){
            setErrorFor(username, 'Username can not be blank');
        }

        else if(usernameValue.length < 6){
            setErrorFor(username, 'Username most be at least 6 characters long');
        }

        else{
            setSuccessFor(username);
        }

        //Email Validation
        if(emailValue === ''){
            setErrorFor(email, 'Email can not be blank');
        }

        else{
            setSuccessFor(email);
        }

         //Password Validation
         if(passwordValue === ''){
            setErrorFor(password, 'Password can not be blank');
        }

        else if(passwordValue.length < 8){
            setErrorFor(password, 'password most contain: uppercase and lowercase letters, number, sign');
        }

        else{
            setSuccessFor(password);
        }

         //Confirm Password Validation
         if(password2Value === ''){
            setErrorFor(password2, 'Confirm password can not be blank');
        }

        else if(passwordValue !== password2Value){
            setErrorFor(password2, 'password not same');
        }

        else{
            setSuccessFor(password2);
        }
    }

    function setErrorFor(input, message){
        const formControl = input.parentElement;    //.form-control
        const small = formControl.querySelector('small');

        //Add error message inside small
        small.innerText = message;

        //Add error class
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input, message){
        const formControl = input.parentElement;    //.form-control
        const small = formControl.querySelector('small');

        
        //Add success class
        formControl.className = 'form-control success';
    }