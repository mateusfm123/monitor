// Evento para alternar entre os modos de visualização (Entrada/Saída)
      // Utiliza o link "Ordem de saída" do menu para esse controle
      document.querySelector('a[href="#ordemdesaida"]').addEventListener("click", function(e) {
        e.preventDefault();
        // Se o modo atual é "entrada", muda para "saida"; caso contrário, volta para "entrada"
        if (mode === "entrada") {
          mode = "saida";
          document.getElementById("headerSpot").innerText = "Maior Preço (Spot)";
          document.getElementById("headerFuture").innerText = "Menor Preço (Future)";
          // Atualiza o indicador de modo para vermelho (saída)
          document.getElementById("modeIndicator").style.backgroundColor = "red";
        } else {
          mode = "entrada";
          document.getElementById("headerSpot").innerText = "Menor Preço (Spot)";
          document.getElementById("headerFuture").innerText = "Maior Preço (Future)";
          // Atualiza o indicador de modo para verde (entrada)
          document.getElementById("modeIndicator").style.backgroundColor = "green";
        }
        updateTable(allPairsData);
      });