let saida = document.querySelector(".resp");

let c_aluguel = document.getElementById("c_aluguel");
let c_franquia = document.getElementById("c_franquia");
let c_kmlitro = document.getElementById("c_kmlitro");
let c_valorcombustivel = document.getElementById("c_valorcombustivel");
// c_aluguel.focus()

function main(){
  let valorAluguel = Number(c_aluguel.value);
  let franquia = Number(c_franquia.value);
  let kmLitro = Number(c_kmlitro.value);
  let valorCombustivel = Number(c_valorcombustivel.value);
  let valor_Km = valorKm(valorAluguel, franquia, kmLitro, valorCombustivel);
  saida.innerHTML = `R$ ${valor_Km.toFixed(2).replace(".", ",")}`;
}

function valorKm(valorAluguel, franquia, kmlitro, valorCombustivel){  
  let litros = franquia / kmlitro;
  let custoCombustivel = litros * valorCombustivel;
  let custoBruto = valorAluguel + custoCombustivel;
  let custoKm = custoBruto / franquia;
  return custoKm;
}
