document.getElementById("formulario").addEventListener("submit", (e) => {
  e.preventDefault();

  let nome = document.querySelector("#id_nome").value;
  let resultado = document.querySelector("#resultado");

  let altura = document.getElementById("id_altura").value;
  altura = parseFloat(altura.replace(",", "."));

  let peso = document.getElementById("id_peso").value;
  peso = parseFloat(peso.replace(",", "."));

  let calculoImc = peso / altura ** 2;

  resultado.innerHTML = `
            <h3> Olá, <strong>${nome}</strong> </h3>
            <br> Seu IMC é <strong>${calculoImc.toFixed(1)}</strong>
            <br> Sua classificação é: `;

  if (calculoImc < 18.5) {
    resultado.innerHTML += "Abaixo do peso normal";
  } else if (calculoImc < 24.9) {
    resultado.innerHTML += "Peso normal";
  } else if (calculoImc < 29.9) {
    resultado.innerHTML += "Excesso de peso";
  } else if (calculoImc < 34.9) {
    resultado.innerHTML += "Obesidade classe I";
  } else if (calculoImc < 39.9) {
    resultado.innerHTML += "Obesidade classe II";
  } else if (calculoImc >= 40) {
    resultado.innerHTML += "Obesidade classe III";
  } else {
    resultado.innerHTML += "ERRO";
  }
});
