// 4 - Lâmpadas

function answer4() {

    console.log("\n\n")

    console.log("4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada. \n\ Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada? \n\n")
    
    console.log("Resposta: \n\ Inicialmente tentei resolver o problema usando uma linha de raciocínio mais linear, logo percebendo que a situação seria análoga a um sistema de 2 equações com 3 variáveis, impossibilitando a resolução. Ao pesquisar um pouco na internet, me deparei com uma solução que envolvia uma dimensão extra, sendo o calor da lâmpada. Isso funcionaria para lâmpadas incandescentes, caso fosse possível tocá-las, mas em momento algum o problema cita a natureza da lâmpada ou a descrição da sala em que a lâmpada se encontra. E se a sala tiver 5 metros de altura e a lâmpada estiver no teto, sem acesso? E se houver algum tipo de lustre ou estrutura que impossibilite tocar a lâmpada? E se a sala dos interruptores estiver em outra cidade, como a lâmpada permaneceria aquecida até que eu chegasse até ela? Levando em consideração que para responder essa questão posso aumentar o número de variáveis, não existem restrições suficientes para chegar em uma resposta satisfatória. Entretanto, levando em conta que posso pensar fora da caixa, levaria dois celulares com acesso à internet em duas das salas, gastando minhas idas até as salas (desconsiderando a ambiguidade em 'usando apenas duas idas até uma das salas das lâmpadas'), os conectaria à uma chamada de vídeo e testaria os interruptores individualmente, levando em conta que todas as lâmpadas estão funcionando. O interruptor que não acendesse nenhuma lâmpada seria da sala que não visitei, os outros dois seriam constatados através da chamada de vídeo.")
}

module.exports = answer4