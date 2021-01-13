function sendEmail(contactForm) {
    emailjs.send("service_k93x9k9", "template_t0amjk4", {
        "from_email": contactForm.email-address.value,
        "subject": contactForm.email-subject.value,
        "message": contactForm.email-content.value
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