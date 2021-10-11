let cancion = document.getElementById("cancion");
let play_btn = document.getElementById("play-btn");
let pause_btn = document.getElementById("pause-btn");
let cover = document.getElementById("cover");
let controls = document.getElementById("controls");

let body1 = document.getElementById("body1")

play_btn.addEventListener("click", () =>{
  cancion.play();
  cover.style.animationPlayState ="running";
  controls.style.animationPlayState ="running";
  body1.style.animationPlayState ="running";
})

pause_btn.addEventListener("click", () =>{
  cancion.pause();
  cover.style.animationPlayState ="paused";
  controls.style.animationPlayState ="paused";
  body1.style.animationPlayState ="paused";
})

stop_btn.addEventListener("click", () =>{
  cancion.load();
  cover.style.animationPlayState ="paused";
  body1.style.animationPlayState ="paused";
  controls.style.animationPlayState ="paused";
})