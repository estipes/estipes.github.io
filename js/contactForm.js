let contactFormSubmit = () => {
    form = document.getElementById("contactForm");
    let fname = form.user_fname.value;
    let lname = form.user_lname.value;
    let email = form.user_email.value;
    let phone = form.user_phone.value;
    let message = form.user_message.value;
    let validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let validPhone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    if(fname == null || fname == "") {
        alert("Please enter first name");
    }
    else if(lname == null || lname == ""){
        alert("Please enter first name");
    }
    else if(email == null || email == ""){
        alert("Please enter an email");
    }
    else if(email != validEmail){
        alert("Please enter a valid email");
    }
    else if(phone == null || phone == ""){
        alert("Please enter phone number");
    }
    else if(phone != validPhone){
        alert("Please enter a valid phone number")
    }
    else if(message == null || message == ""){
        alert("Please enter a message");
    }
    else{
        emailjs.init("49TdmJWKabdoNcKuL");
        const emailParams = {
            user_fname: fname,
            user_lname: lname,
            user_email: email,
            user_phone: phone,
            user_message: message
        };
        emailjs.send("service_2f7ujc8", "template_i4bg7km", emailParams);
        location.href="https://estipes.github.io/"
    }
}