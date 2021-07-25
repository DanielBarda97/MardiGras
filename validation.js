document.querySelector('#first_name').focus();
document.querySelector('#button').addEventListener('click', function(){
    let sub = document.querySelector('#subject');
    let namef = document.querySelector('#first_name');
    let namel = document.querySelector('#last_name');
    let message = document.querySelector('#message');
    let err0 = document.querySelector('#error0');
    let err1 = document.querySelector('#error1');
    let err2 = document.querySelector('#error2');
    let err3 = document.querySelector('#error3');
    let err4 = document.querySelector('#error4');

    if(sub.value == ""){
        err0.innerHTML = "*Please Enter Subject";
        err0.style.color = "red";
        sub.focus();
    } else {
        err0.innerHTML = "";
    }
    if(namef.value == ""){
        err1.innerHTML = "*Please Enter First Name";
        err1.style.color = "red";
        namef.focus();
    } else {
        err1.innerHTML = "";
    }
    if(namel.value == ""){
        err2.innerHTML = "*Please Enter Last Name";
        err2.style.color = "red";
        namel.focus();
    } else {
        err2.innerHTML = "";
    }
    if(email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        err3.innerHTML = "*Please Enter Valid Email";
        err3.style.color = "red";
        email.focus();
    } else {
        err3.innerHTML = "";
    }
    if(message.value == ""){
        err4.innerHTML = "*Please Enter Your Message";
        err4.style.color = "red";
        message.focus();
    } else {
        err4.innerHTML = "";
    }
    const btn = document.getElementById('button');
    document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_xws3s8t';

        emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send The Message';
            alert('Sent!');
        }, (err) => {
            btn.value = 'Send The Message';
            alert(JSON.stringify(err));
        });
    });
});