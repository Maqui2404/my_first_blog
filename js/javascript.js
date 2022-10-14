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
  var input, filter, section, div, h5, i,p;
  input = document.getElementById("buscador1");
  filter = input.value.toUpperCase();
  section = document.getElementById("main");
  div = section.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
    p = div[i].getElementsByTagName("p")[0];
    h5 = div[i].getElementsByTagName("h5")[0];
    if (p || h5) {
      if ((p.innerHTML.toUpperCase().indexOf(filter) > -1) || (h5.innerHTML.toUpperCase().indexOf(filter) > -1)) {
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






// function sendEmail() {
//   Email.send({
//     Host: "marfimaqui@gmail",
//     Username: "sender@email_address.com",
//     Password: "Enter your password",
//     To: 'marfimaqui@gmail.com',
//     From: "sender@email_address.com",
//     Subject: "Sending Email using javascript",
//     Body: "Well that was easy!!",
//   })
//     .then(function (message) {
//       alert("mail sent successfully")
//     });
// }

const $form = document.querySelector("#form");
const $buttonMailto = document.querySelector("#panta")

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  console.log(form.get("name"))
  $buttonMailto.setAttribute('href',"mailto:marfimaqui@gmail.com?subject=nombre ${form.get('name')} correo ${form.get('email')}&body=${form.get('message')}")
  $buttonMailto.click()
}


// const nav = document.querySelector('.nav');

// window.addEventListener('scroll', function(){
//   nav.classList.toggle('active',window.scrollY > 0)
// })

