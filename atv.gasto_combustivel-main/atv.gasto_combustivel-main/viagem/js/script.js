function calcularViagem() {
  const distancia = parseFloat(document.getElementById("distancia").value);
  const consumo = parseFloat(document.getElementById("consumo").value);
  const preco = parseFloat(document.getElementById("preco").value);
  const resultadoDiv = document.getElementById("resultado");

  if (
    isNaN(preco) || distancia <= 0 ||
    isNaN(distancia) || consumo <= 0 ||
    isNaN(consumo) || preco <= 0
  ) {
    resultadoDiv.innerHTML = "<span style='color: red;'>Por favor, preencha todos os campos corretamente.</span>";
    return;
  }

  const litrosNecessarios = distancia / consumo;
  const custoTotal = litrosNecessarios * preco;

 resultadoDiv.innerHTML = `
    Você precisará de <strong>${litrosNecessarios.toFixed(2)} litros</strong> de combustível.<br>
    Custo total da viagem: <strong>R$ ${custoTotal.toFixed(2)}</strong>
  `;
}