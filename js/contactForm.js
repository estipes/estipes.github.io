let contactFormSubmit = () => {
    form = document.getElementById("contactForm");
    let fname = form.user_fname.value;
    let lname = form.user_lname.value;
    let email = form.user_email.value;
    let phone = form.user_phone.value;
    let message = form.user_message.value;
    let validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    let validPhone = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    let errorM = "";
    if(fname == null || fname == "") {
        errorM += "Please enter first name<br>";
    }
    if(lname == null || lname == ""){
        errorM += "Please enter last name<br>";
    }
    if(email == null || email == ""){
        errorM += "Please enter an email<br>";
    }
    if(!email.match(validEmail)){
        errorM += "Please enter a valid email<br>";
    }
    if(phone == null || phone == ""){
        errorM += "Please enter phone number<br>";
    }
    if(!phone.match(validPhone)){
        errorM += "Please enter a valid phone number<br>";
    }
    if(message == null || message == ""){
        errorM += "Please enter a message";
    }
    if(errorM == ""){
        document.getElementById("errorMessage").innerHTML = ``;
        emailjs.init("49TdmJWKabdoNcKuL");
        const emailParams = {
            user_fname: fname,
            user_lname: lname,
            user_email: email,
            user_phone: phone,
            user_message: message
        };
        emailjs.send("service_2f7ujc8", "template_i4bg7km", emailParams);
    }
    else {
        document.getElementById("errorMessage").innerHTML =`${errorM}`;
    }
}