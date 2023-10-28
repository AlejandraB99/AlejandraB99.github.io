let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #5a9b95;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #44878f;">Estudio la licenciatura en Informática Administrativa y soy del Estado de México.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
