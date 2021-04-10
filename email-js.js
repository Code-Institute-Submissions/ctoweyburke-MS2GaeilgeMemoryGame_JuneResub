//---------- Below JS was written with guidance from emailJS tutorial on 
// Code Institute Sessions & EMailJS instructions on website. //

emailjs.sendForm('service_3jvrzeb', 'template_ho1z60q', 'Learn Gaeilge for Primary School')
    .then(function(response) {
       console.log('Thank you for getting in touch', response.status, response.text);
    }, function(error) {
       console.log('Seems there has been an error with your submission. Please try again', error);
    });
