document.getElementById("current_date").innerHTML = Date();

var nombre = "Marco";
//document.getElementById("tit").innerHTML = nombre;
//document.getElementById("boton").innerHTML = boton();

const video = document.querySelector("video");
const button = document.querySelector("button");
/*
function MediaPlayer(){}

MediaPlayer.prototype.play = function(){
    video.play();
}

const player = new MediaPlayer();

button.onclick = () => video.play();
*/

function ver_mas1() {
  document.getElementById("ven").style.display = "block";
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "receiver@email_address.com",
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  }).then(function (message) {
    alert("mail sent successfully");
  });
}

document.addEventListener("keyup", (e) => {
  if (e.target.matches("#buscador1")) {
    if (e.key == "Escape") e.target.value = "";

    document.querySelectorAll("#pais").forEach((counpais) => {
      counpais.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? counpais.classList.remove("#pais")
        : counpais.classList.add("filtro");
    });
  }
});
