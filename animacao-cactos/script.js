const divPrincipal = document.querySelector('body');
const doisCactos = document.querySelectorAll('.cacto-corpo')
const esqCacto = document.querySelector('#esq-cacto');
const dirCacto = document.querySelector('#dir-cacto');

doisCactos.forEach((cacto) => {
  cacto.addEventListener("mouseover", () => {
    dancinha(cacto);
  });
});

function dancinha(cacto){
  cacto.classList.remove('cresce')
  cacto.classList.add('dancinha')
}

divPrincipal.addEventListener('mousemove', e => {
    moveCactos(e.clientX);
});

let posicaoAnterior = 0;

function moveCactos(eixoX) {
  esqCacto.style.transform = `translate(${calculo(eixoX)}%)`;
  dirCacto.style.transform = `translate(${-calculo(eixoX)}%)`;
  posicaoAnterior = eixoX;
}

function calculo(eixoX){
  return 9 * (eixoX / window.innerWidth);
}