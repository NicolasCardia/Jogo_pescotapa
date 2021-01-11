let nome;
let dinheiro = 800;
let tempoEsgotado = true;
function pegaNome()
{
    nome = document.getElementById("peganome").value;
    introducao();
}
function introducao()
{
    //alert('A vingança do PESCOTAPA. \npressione ok para começar' );
    document.getElementById("saudacao").innerHTML = `Olá ${nome.toUpperCase()}<br>você acaba de receber a notícia de que o Bolsonaro foi eleito como presidente <br> e sente o instinto de pescotapa se aflorando novamente dentro de si. então você decide que ira até brasilia para procurar vingaça ao presidente que te tornou um pescotapa`;
    document.getElementById("saudacao").innerHTML += `<br><button class="botao" onclick="parte1()"> Avançar</button>`
    document.getElementById("container-imagem").innerHTML = ``;
}
  
  
function parte1()
{
    document.getElementById("saudacao").innerHTML = `Você precisa escolher como quer ir para Brasilia.<br> De carro, demorando 2 dias e sobrando 400R$ na carteira ou de avião, demorando 4h e sobrando 1,50R$ na carteira?`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="carro()">Ir de carro</button>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="aviao()">Avião</button>`;
}
function carro(){
    dinheiro -= 400;
    document.getElementById("saudacao").innerHTML = `você escolhe ir de carro e economizar dinheiro, no caminho, você acumulou sua raiva e treinou boxe nas paradas ao decorrer da viagem.<br> Bônus: você esta 60% mais pescotapa e com sangue nos olhos para pegar o Bolsonaro `;
   document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="parte2()">Avançar</button>`

}
function aviao(){
    document.getElementById("saudacao").innerHTML = `chegando em Brasilia, voce prefere comprar uma goibada do que pegar o onibus para o Palácio da Alvorada, que é onde o bolsonara se encontra. 2 malucos roubam sua goiaba e voce não se vinga ficando perdido em Brasilia.`;
    document.getElementById("saudacao").innerHTML += `<br>GAME OVER<br>Para jogar novamente clique em "ok"<br>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="window.location.reload()">Ok</button>`
    document.getElementById("container-imagem").innerHTML = `<img id="img-perdeu1" onclick="window.location.reload()" class="tamanho-de-imagens" src="./perdeu.jpg">`;
}

function parte2()
{
    document.getElementById("saudacao").innerHTML = `Você vai até a loja de armas e vê que tem dois produtos tipicos de pescotapa, porém ambos custam 400R$.<br> Sendo assim só podendo escolher um:<br> uma faca de 40cm, devidamente afiada e bem maleavel ou Revolver com 5 munições e uma procedência duvidosa `;
    document.getElementById("saudacao").innerHTML += `<br><button class="botao" onclick="faca()">Faca</button><button class="botao" onclick="revolver()">Revolver</button>`;
}
function faca()
{
    document.getElementById("saudacao").innerHTML = `Você vai até o palácio da alvorada, passa despercebido pelos seguranças e ao chegar nos aposentos do presidente.<br> você se depara com um segurança e o Bolsonaro, você escolhe dar uma facadona no bolsonaro ou no segurança?'<br>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="facadaNoBolsonaro()">Facada no Bolsonaro</button>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="facadaNoSeguranca()">Facada no Segurança</button>`;
}
function facadaNoBolsonaro()
{
    document.getElementById("saudacao").innerHTML = `Bolsonaro possui um ótimo historico de atleta e da um rolamento para direita, desviando da sua investida, bolsonaro foge e o segurança te prende.<br>GAME OVER.<br>`
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="window.location.reload()">Jogar Novamente</button>`
}
function facadaNoSeguranca()
{
    document.getElementById("saudacao").innerHTML = `Você acerta o segurança porem não consegue tirar a faca do mesmo e parte pra trocação com o Bolsaro. ele é um oponente ágil e com um ótimo historico de atleta, porem gráças aos treinamento de boxe e sangue nos ólhos de um verdadeiro pescotapa, você consegue nocaltealo e completar sua vingança<br>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="window.location.reload()">Jogar Novamente</button>`;
    document.getElementById("container-imagem").innerHTML = `<img id="img-ganhou1" onclick="window.location.reload()" class="tamanho-de-imagens" src="./images.jfif">`;
}
function revolver()
{
    let segundos = 8; // colocar um timer mostrando quantos segundos resta ideia: colocar um for com um a 8.
    document.getElementById("saudacao").innerHTML = `Você pega seu revolver e vai para o Palácio da Alvorada, esta enfurecido(a), disposto a mostrar as habilidades de um verdadeiro pescotapa. você se disfarça de segurança e vai até a sala do presidente.<br>
    Ao chegar na porta você para por um segundo e pensa se vai realmente fazer isso (você tem ${segundos} segundos):<br>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="entrarNaPorta()">Abrir a porta </button> <button class="botao" onclick="perder()">Dar meia volta</button>`;
    
    setTimeout(function ()
    {
        if(tempoEsgotado == true)
        {
            perderTempoEsgotado();
        }
    },8000);
    
}
function perder()
{
    tempoEsgotado = false;
    document.getElementById("saudacao").innerHTML = `Um verdadeiro pescotapa nunca desiste da missão, você é a vergonha da profisson!!!"<br>GAME OVER!`;
    document.getElementById("saudacao").innerHTML += `Para jogar novamente clique em OK, caso contrario clique em CANCELAR.`;
    document.getElementById("saudacao").innerHTML += `<br> <button class="botao" onclick="window.location.reload()">OK</button>`
    document.getElementById("container-imagem").innerHTML = `<img id="img-perdeu1" onclick="window.location.reload()" class="tamanho-de-imagens" src="./perdeu2.jpg">`;
}
function perderTempoEsgotado()
{
    document.getElementById("saudacao").innerHTML = `Você demorou demais a tomar uma decisão.`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="window.location.reload()">Jogar Novamente</button>`;

}
function entrarNaPorta()
{
    tempoEsgotado = false;
    document.getElementById("saudacao").innerHTML = `Você abre a porta e vai pro duelo, na sua frente esta um segurança armado e o presidente atrás dele.<br> Você tem duas opções: Você atira no segurança ou no bolsonaro?`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="atirarNoSeguranca()">Atirar no segurança</button><button class="botao" onclick="atirarNoBolsonaro()">Atirar no Bolsonaro</button>`;
}
function atirarNoSeguranca()
{
        //colocar audio esta feliz agora...
    document.getElementById("saudacao").innerHTML = `Você acertou o tiro no segurança porem ao tentar atira no bolsonaro a arma falha, você decide partir para luta corporal com o presidente, graças as seu treinameto de boxe, você nocalteia-o e se vinga, dizendo "esta feliz agora Bolsonaro?"<br> Você volta para casa como um VERDADEIRO PESCOTAPA<br>Você Venceu! para jogar novamente e ver os outros finais clique em OK"<br>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="window.location.reload()">OK</button>`;
}
function atirarNoBolsonaro()
{
    document.getElementById("saudacao").innerHTML = `você acerta o tiro e conclui sua vingança, porem pela procedencia da arma ser duvidosa ela falha ao tentar acerta o segurança e você é preso por atentado terrorista, se tornando assim um PESCOTAPA TERRORISTA.<br>
    você "Venceu"! para jogar novamente e ver os outros finais clique em OK<br>`;
    document.getElementById("saudacao").innerHTML += `<button class="botao" onclick="window.location.reload()">Ok</button>`;
}