
function myFunction() {

console.log("ethe ");

var first_name= String(document.getElementById("name").value);
var email= String(document.getElementById("email").value);
var phone= String(document.getElementById("phone").value);
var message= String(document.getElementById("message").value);

message="<html><h2> Message From  : "+first_name+"  "+email+"Phone :  " +phone +" </h2><br><p>message : "+message+"</p></html>"

sendEmail(email,message,"Hello You have new queries");
alert("We Will Reach out to You Soon ! Mailman is on his way");

}

function sendEmail(x,y,z) {
  Email.send({
  Host: "smtp.gmail.com",
  Username : "womenreseachers@gmail.com",
  Password : "zdweltyrsovwrzas",

  To: "anubhavgupta2260@gmail.com",


  From : "womenreseachers@gmail.com",
  Subject : z,
  Body : y,
  }).then(
  );
}


