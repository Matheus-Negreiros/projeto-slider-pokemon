//     - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostraCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}
//     - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostraCartao(cartaoAtual);

  // passo 4 - buscar o cartão que está selecionado e esconder
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostraCartao(cartaoAtual);
});

// passo 4 - buscar o cartão que está selecionado e esconder
