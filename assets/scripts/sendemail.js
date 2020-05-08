/*
The "Why?", "What?", and "How?" of this code is fully documented here: https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Code%20Documentation%20and%20Walkthrough.md
*/

function sendMail(contactForm) {
    emailjs.send("gmail", "website_feedback_form", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
        .then(function (response) {
            document.querySelector("#sendmail-status").innerHTML = "Thank you! Email sent successfully.";
            document.querySelector("#feedbackform").reset();
            setTimeout(() => {
                document.querySelector("#sendmail-status").innerHTML = "";
            }, 5000);
        }, function (error) {
            document.querySelector("#sendmail-status").innerHTML = "Apologies, something went wrong. Please try again.";
            setTimeout(() => {
                document.querySelector("#sendmail-status").innerHTML = "";
            }, 5000);
        });
    return false;
}