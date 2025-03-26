let limpar = () => {
  //captura via ID
  //let jogador = document.getElementById("id_moises");
  //console.log(jogador);

  // // CAPTURAR via QUERY INDIVIDUAL
  // let jogador = document.querySelector(".jogadores");
  // console.log(jogador);
  // jogador.innerHTML = "<strong>Adria</strong>";

  // Capturar todos por QUERY
  //let jogador = document.querySelectorAll(".jogadores");
  //console.log(jogador);
  //jogador.innerHTML = "<strong>Adria</strong>";

  // Capturar todos por QUERY / TAG
  // let jogadores = document.querySelectorAll("li");
  // console.log(jogadores.length);
  // console.log(jogadores);

  // for (let i = 0; i < jogadores.length; i++){
  //     jogadores[i].innerHTML = ""
  //

  // Capturar todos os NAMES via QUERY
  let jogadores = document.getElementsByName("juan");
  console.log(jogadores.length);
  console.log(jogadores);

  for (let i = 0; i < jogadores.length; i++) {
    jogadores[i].innerHTML = "";
  }
};
