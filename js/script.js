const botoes = document.querySelectorAll(".titulo h3");

function tiraTudo(event) {
  for (let index = 0; index <= botoes.length - 1; index++) {
    botoes[index].classList.remove("drpdown-contet");
  }
}

function mostra(event) {
  let opt = event.currentTarget.nextSibling.nextSibling;
  opt.classList.toggle("dropdown-content");
}

botoes.forEach((btn) => {
  btn.addEventListener("click", mostra);
});
