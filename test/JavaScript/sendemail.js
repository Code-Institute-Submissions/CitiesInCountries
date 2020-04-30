function sendMail(contactForm) {
    emailjs.send("gmail", "website_feedback_form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
        .then(function (response) {
            // console.log('SUCCESS!', response.status, response.text);
            document.querySelector("#sendmail-status").innerHTML = "Thank you! Email sent successfully.";
            document.querySelector("#feedbackform").reset();
            setTimeout(() => {
                document.querySelector("#sendmail-status").innerHTML = "";
            }, 5000);
        }, function (error) {
            // console.log('FAILED...', error);
            document.querySelector("#sendmail-status").innerHTML = "Apologies, something went wrong. Please try again";
            setTimeout(() => {
                document.querySelector("#sendmail-status").innerHTML = "";
            }, 5000);
        });
    return false;
}