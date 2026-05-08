function calcularImpacto() {
    const agua = document.getElementById('agua').value;
    const lixo = document.getElementById('lixo').value;
    const resultadoDiv = document.getElementById('resultado');
    const dicasDiv = document.getElementById('dicas');

    if (agua === "" || lixo === "") {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    resultadoDiv.classList.remove('hidden');
    dicasDiv.innerHTML = ""; // Limpa resultados anteriores

    // Lógica para Água
    let dicaAgua = "";
    if (agua > 110) { // Média recomendada pela ONU é 110L
        dicaAgua = `
            <div class="dica-item">
                <strong>💧 Sobre a Água:</strong> Seu consumo está acima da média. 
                No campo, agricultores usam o <strong>Gotejamento</strong> para economizar até 90% de água. 
                Em casa, você pode instalar redutores de vazão ou reaproveitar água da máquina para lavar o quintal!
            </div>`;
    } else {
        dicaAgua = `
            <div class="dica-item">
                <strong>💧 Sobre a Água:</strong> Parabéns pelo uso consciente! 
                Que tal implementar uma <strong>Cisterna</strong> para captar água da chuva? 
                É o que muitos produtores fazem para manter a produção no período de seca.
            </div>`;
    }

    // Lógica para Lixo
    let dicaLixo = "";
    if (lixo > 3) {
        dicaLixo = `
            <div class="dica-item">
                <strong>🌱 Sobre resíduos:</strong> Você produz bastante lixo. 
                No Agro sustentável, nada se perde: restos de colheita viram cobertura de solo. 
                Aplique a <strong>Compostagem Doméstica</strong>! O que seria lixo vira adubo rico para suas plantas.
            </div>`;
    } else {
        dicaLixo = `
            <div class="dica-item">
                <strong>🌱 Sobre resíduos:</strong> Ótimo volume! 
                Para chegar ao nível "Resíduo Zero", pratique a separação rigorosa. 
                Lembre-se: o <strong>Adubo Orgânico</strong> gerado em casa tem o mesmo princípio da adubação verde usada nas grandes fazendas sustentáveis.
            </div>`;
    }

    dicasDiv.innerHTML = dicaAgua + dicaLixo;
}