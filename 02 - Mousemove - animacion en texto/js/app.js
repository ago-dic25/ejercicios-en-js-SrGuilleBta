let texto = document.querySelector('h1');
let hero = document.querySelector('.hero')
console.log(texto)

let maximo =  100; //si quieres la sombra mas cerca o mas lejos de la palabra

//aqui iba la funcion q la profe quito pq no le jalo

hero.addEventListener('mousemove', function(e){
  //console.log(e);
  //console.log(texto.

  let{offsetX : x, offsetY : y} = e;
  let {offsetWidth: width, offsetHeight: height} = hero;

  //console.log(e.target);
  if(this !== e.target){
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
    //console.log(x, 'y')
  }

  let desplazaX = Math.round((x / width * maximo) - maximo / 2);
  let desplazaY = Math.round((y / height * maximo) - maximo / 2);
  console.log(desplazaX, desplazaY);
  texto.style.textShadow = `
        ${-desplazaX}px ${-desplazaY}px 10px rgba(255, 105, 180, 0.8)
    `;
  //para tener 3 adentro de texto.style.textShadow (otra opcion de la profe)
  //texto.style.textShadow = `
  //  ${desplazaX}px ${desplazaY}px 10px rgba(255, 105, 180, 0.8),
  //  ${-desplazaX}px ${-desplazaY}px 10px rgba(255, 182, 193, 0.7),
  //  ${desplazaY * 0.5}px ${-desplazaX * 0.5}px 10px rgba(255, 20, 147, 0.6)
  //`;
});

//funcion borrada por la profe pq no le jalo
//document.addEventListener('mousemove', function(e){
//  console.log(e);
//  let x = e.offsetX;
//  let y = e.offsetY;
//  texto.style.textShadow = `
//  ${x}px ${y}px 0 rgba(255, 255, 0, 255, 0.7),
//  ${x * -1}px 0 rgba(0, 255, 255, 0.7),
//  ${y}px ${x * -1}px 0 rgba(0, 255, 255, 0.7)
//  ${y * -1}px ${x}px 0 rgba (0, 255, 255, 0.7)`
//});
