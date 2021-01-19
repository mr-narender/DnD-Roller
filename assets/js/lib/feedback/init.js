// Sends email to the developer with the values in the contact form.
function sendEmail(contactForm) {
    emailjs.send("service_k93x9k9", "template_t0amjk4", {
        "from_email": contactForm.emailaddress.value,
        "subject": contactForm.emailsubject.value,
        "message": contactForm.emailmessage.value
    }, "user_8HlRxslkboMpSfraHqGLC")
        .then(
            function (response) {
                console.log("SUCCESS", response);
                // Triggers acknowledgement modal when email is sent successfully.
                $("#acknowledge-modal").modal();
                // Resets the form upon submission.
                $("#contact-form")[0].reset();
            },
            function (error) {
                console.log("FAILED", error);
            });
    return false;
}

function validateForm(input) {
    if ($(input).hasClass("number-of-dice")) {
        if (0 <= input.value && input.value <= 30) {

        } else {
            input.value = 0;
            console.log('Wrong amount of dice');
        }
    }
    if ($(input).hasClass("modifier")) {
        if (-50 <= input.value && input.value <= 50) {

        } else {
            input.value = 0;
            console.log('Wrong amount of dice');
        }
    }
    return false;
}

