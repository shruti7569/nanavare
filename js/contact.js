function sendmail(){
    
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var phone = $('#phone').val();
    var message = $('#message').val();
    var file = $('#file').val();
    // var body = $('#body').val();

    var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Phone: '+phone+'<br>Message: '+message+'<br>File: '+file;
    //console.log(name, phone, email, message);

    Email.send({
        SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
        To: 'shrutikadhumal147@gmail.com',
        From: email,
        Subject: "New Patient Contacted For "+subject,
        Body: Body,
        Attachments: [ 
            { 
                name: "File_Name_with_Extension", 
                path: "Full Path of the file" 
            }] 
    }).then(
        message =>{
            //console.log (message);
            if(message=='OK'){
                window.open('../confirmation.html', "_self");
                document.getElementById("contact-form").reset();
            }
            else{
                console.error (message);
                alert('There is error at sending message. ')
                
            }

        }
    );



}
