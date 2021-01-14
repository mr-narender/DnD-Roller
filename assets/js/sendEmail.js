function sendEmail(contactForm) {
    console.log(contactForm);
    emailjs.send("service_k93x9k9", "template_t0amjk4", {
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.emailsubject.value,
        "message": contactForm.emailmessage.value
    }, "user_8HlRxslkboMpSfraHqGLC")
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}