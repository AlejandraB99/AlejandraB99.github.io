let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #fb4993;">Estudio la licenciatura en Informática Administrativa y soy del Estado de México.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
