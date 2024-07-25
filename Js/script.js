function sendMail(){
    let parms ={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        mobile : document.getElementById("mobile").value,
        msgContent : document.getElementById("msgContent").value,
    }
    emailjs.send("service_r1993id","template_u1t4uvq",parms).then(alert("Email send!!"))
}