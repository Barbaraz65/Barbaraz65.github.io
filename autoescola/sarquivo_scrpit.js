let verificar = () => {
  let numero = Number(window.document.querySelector("#id_idade").value);
  let resultado = document.getElementById("id_resultado");

  if (numero < 18 || numero >= 100) {
    resultado.innerHTML = "inapto para inicio";
  } else if (numero <= 50) {
    resultado.innerHTML =
      "apto para inicio <p> voce fara a renovação da habilitação a cada 10 anos";
  } else if (numero <= 69) {
    resultado.innerHTML =
      "apto para inicio, voce fara a renovação da habilitação a cada 5 anos";
  } else {
    resultado.innerHTML = "voce fara a renovação da habilitaçao a cada 3 anos";
  }
};
