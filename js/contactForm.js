let contactFormSubmit = () => {
    form = document.getElementById("contactForm");
    let fname = form.user_fname.value;
    let lname = form.user_lname.value;
    let email = form.user_email.value;
    let phone = form.user_phone.value;
    let message = form.user_message.value;
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