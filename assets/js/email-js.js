//---------- Below JS was written with guidance from emailJS tutorial on 
// Code Institute Sessions & EMailJS instructions on website. //

function sendMail(contactForm) {
    emailjs.send("template_ho1z60q", "Learn Gaeilge for Primary School", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "message": contactForm.message.value
        })
       .then(
            function (response) {
                alert("Thanks for contacting Learn Gaeilge");
                window.location.replace("/");
            },
            function (error) {
                alert("Whoops! There seems to be a problem. Please try again.");
            });
    return false;
          

}