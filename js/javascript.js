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
  var input, filter, section, div, h1, i;
  input = document.getElementById("buscador1");
  filter = input.value.toUpperCase();
  section = document.getElementById("main");
  div = section.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
    h1 = div[i].getElementsByTagName("p")[0];
    if (h1) {
      if (h1.innerHTML.toUpperCase().indexOf(filter) > -1) {
        div[i].style.display = "";
      } else {
        div[i].style.display = "none";
      }
    }
  }
  }
);

/*document.addEventListener("keyup", (e) => {
    document.querySelectorAll("#pais").forEach((counpais) => {
      counpais.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? counpais.classList.remove(".country")
        : counpais.classList.add("filtro");
    });
  }
);
*/



