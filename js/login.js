const email = document.getElementById('email');
const password = document.getElementById('password');
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event){
    event.preventDefault();

    if(email.value == ""){
        email.classList.add('is-invalid');
        setTimeout(() => {
            email.classList.remove('is-invalid');
        }, 2000);
    }
    if(password.value == ""){
        password.classList.add('is-invalid');
        setTimeout(() => {
            password.classList.remove('is-invalid');
        }, 2000);
    }

    if( email.value != "" && password.value != ""){
        const loginData = {
            email: email.value,
            password: password.value
        }

        var url = 'http://localhost:3000/login';
        var data = loginData;

        fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
        }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => {
                if(response.message){
                    alertHtml = `<div class="alert alert-danger" role="alert">
                        ${response.message}
                    </div>`

                    document.getElementById('alert-container').innerHTML = alertHtml;
                    setTimeout(() => {
                        document.getElementById('alert-container').innerHTML = "";
                    }, 3000);
                }
                else{
                    localStorage.setItem( 'authToken', response.authToken );
                    localStorage.setItem('email', email.value);
                    window.location.pathname = '/messages.html';
                }
            });
        }
});