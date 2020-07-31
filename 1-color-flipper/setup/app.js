const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Evento que executa a funcao
// btn.click executa a função que pega uma cor randomica da variavel colors e aplica no body
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber]; // Setando backgroundColor para o body
  color.textContent = colors[randomNumber];
});

// Funcao getRandomNumber
// A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
/* A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) 
até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado */
function getRandomNumber() {
  return Math.floor(Math.random() * colors.lengths);
}
