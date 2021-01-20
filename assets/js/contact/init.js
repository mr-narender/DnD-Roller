// Sends email to the developer with the values in the contact form.
function sendEmail(contactForm) {
    emailjs.send("service_k93x9k9", "template_t0amjk4", {
    "from_email": contactForm.emailaddress.value,
    "subject": contactForm.emailsubject.value,
    "message": contactForm.emailmessage.value
    }, "user_8HlRxslkboMpSfraHqGLC")
    .then(
        function(response) {
            console.log("SUCCESS", response);
            // Triggers acknowledgement modal when email is sent successfully.
            $("#acknowledge-modal").modal();
            // Resets the form upon submission.
            $("#contact-form")[0].reset();
        },
        function(error) {
            console.log("FAILED", error);
        });
    return false;
}

