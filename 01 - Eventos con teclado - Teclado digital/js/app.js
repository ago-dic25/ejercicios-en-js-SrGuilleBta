//Regina Sosa
let secuencia =[];
let reproducirBtn = document.getElementById('reproducirBtn');
let limpiarSecuenciaBtn = document.getElementById('limpiarSecuencia');
document.addEventListener('keydown', function(e){
  let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  guardarSecuencia(e.keyCode);
});


function guardarSecuencia(codigoTecla) {
  secuencia.push(codigoTecla);

  //guardar la secuencia
}

function reproducirSecuencia(){
  let audioReproducido = 0;
  for (let i = 0; i < secuencia.length; i++) {
      let audioEnSecuencia = document.querySelector(`audio[data-key="${secuencia[i]}"]`)
      setTimeout(function(){
        audioEnSecuencia.play();
    }, i * 500);
    }
}

function limpiarSecuencia(){
  secuencia = [];
}

reproducirBtn.addEventListener('click', reproducirSecuencia);
limpiarSecuenciaBtn.addEventListener('click', limpiarSecuencia)
