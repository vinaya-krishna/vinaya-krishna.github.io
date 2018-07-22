const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
const contactForm = document.getElementById('contact-form');

let messageSend = false;

contactForm.addEventListener('submit', function(event){
    event.preventDefault();
    if(messageSend){
        if(name.value == ""){
            name.classList.add('is-invalid');
            $('#name').tooltip('show');
            setTimeout(() => {
                name.classList.remove('is-invalid');
                $('#name').tooltip('hide');
            }, 2000);
        }
    
        if(email.value == ""){
            email.classList.add('is-invalid');
            $('#email').tooltip('show');
            setTimeout(() => {
                email.classList.remove('is-invalid');
                $('#email').tooltip('hide');
            }, 2000);
        }
        
        if(message.value == ""){
            message.classList.add('is-invalid');
            $('#message').tooltip('show');
            setTimeout(() => {
                message.classList.remove('is-invalid');
                $('#message').tooltip('hide');
            }, 2000);
        }
        if( name.value != "" && email.value != "" && message.value != ""){
            const userData = {
                name : name.value,
                email: email.value,
                phone: phone.value,
                message: message.value
            }
            console.log(userData);
            var url = 'https://personal-portfolio-page.herokuapp.com/messages';
            var data = userData;
    
            fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
            }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        }
    }
    else{
        console.log("Alert");
        $("#feedback").css({'display': 'block'});
        setTimeout(()=>{
            $("#feedback").css({'display': 'none'});
        },5000)
        
    }
    
});




