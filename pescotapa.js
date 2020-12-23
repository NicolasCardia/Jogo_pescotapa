var playerName = prompt("Antes de começar o jogo, informe seu nome!");
function inicio(){
  var explicação = alert ("Antes de começar, suas escolhas irão definir o final. para escolher a 1º OPÇÃO DIGITE 1, para escolher a 2º OPÇÃO DIGITE 0");
  introdução()
}
inicio();


function introdução(){
  alert('A vingança do PESCOTAPA. \npressione ok para começar' );
  alert(`Olá ${playerName} você acaba de receber a notícia de que o Bolsonaro foi eleito como presidente e sente o instinto de pescotapa se aflorando novamente dentro de si. então voce decide que ira até brasilia para procurar vingaça ao presidente que te tornou um(a) pescotapa`);
  parte1()
}  


/****************************************************** primeira parte *******************************************************************/
function parte1(){
  var veiculo = prompt("você precisa escolher como quer ir para Brasilia: \nDe carro, demorando 2 dias e sobrando 400R$ na carteira || 1 \nDe avião, demorando 4h e sobrando 1,50R$ na carteira|| 0")
  
  if (veiculo == 1){
    alert ("você escolhe ir de carro e economizar dinheiro, no caminho, você acumulou sua raiva e treinou boxe nas paradas ao decorrer da viagem.\n Bônus: você esta 60% mais pescotapa e com sangue nos olhos para pegar o Bolsonaro ");
    parte2()
  } 
  //continuação da var veiculo se a escolha for avião
  if (veiculo == 0 ){
    alert('chegando em Brasilia, voce prefere comprar uma goibada do que pegar o onibus para o Palácio da Alvorada, que é onde o bolsonara se encontra. 2 malucos roubam sua goiaba e voce não se vinga ficando perdido em Brasilia.');
    alert("GAME OVER");
  if(confirm("para jogar novamente clique em OK, caso contrário clique em CANCELAR.")){
    introdução()
    } else{
    alert("obrigado por jogar")
    } 
  }
 }  
/****************************************************** segunda parte *******************************************************************/
function parte2(){
  //continuação da var veiculo se a escolha for carro
  var arma = prompt("você vai até a loja de armas e vê que tem dois produtos tipicos de pescotapa, porém ambos custam 400R$, sendo assim só podendo escolher um: \numa faca de 40cm, devidamente afiada e bem maleavel || 1 \nRevolver com 5 munições e uma procedência duvidosa || 0");
  //continuação da var arma se escolher faca
  if(arma == 1){
   var faca = prompt('você vai até o placio da alvorada, passa despercebido pelos seguranças e ao chegar nos aposentos do presidente, você se depara com um segurança e o Bolsonaro, você  escolhe Dar uma facadona: \n no bolsonaro || 1 \n no segurança || 0'); 
    //continuação da var faca se escolher bolsonaro
    if (faca == 1){
      alert("bolsonaro possui um ótimo historico de atleta e da um rolamento para direita, desviando da sua investida, bolsonaro foge e o segurança te prende.");
      alert("GAME OVER");
      if(confirm("para jogar novamente clique em OK, caso contrário clique em CANCELAR.")){
        introdução()
        } else{
        alert("Obrigado por jogar")
        } 
    }
    //continuação da var faca se escolher segurança
    if(faca == 0){
      alert("você acerta o segurança porem não consegue tirar a faca do mesmo e parte pra trocação com o Bolsaro. ele é um oponente ágil e com um ótimo historico de atleta, porem gráças aos treinamento de boxe e sangue nos ólhos de um verdadeiro pescotapa, você consegue nocaltealo e completar sua vingança");
      alert("você é um verdadeiro pescotapa, frio e calculista.\nvocê venceu e o povo te venera. Começando assim A LEGIÃO DOS PESCOTAPAS")
      if (confirm("você Venceu! para jogar novamente e ver os outros finais clique em OK")){
        introdução()
      } else{
        alert("Obrigado por jogar!");
      }
    }
  } 
  /****************************************************** SE FOR REVOLVER *******************************************************************/
  if(arma == 0){
    var revolver = prompt("você pega seu revolver e vai para o Palácio da Alvorada, esta enfurecido(a), disposto a mostrar as habilidades de um verdadeiro pescotapa. você se disfarça de segurança e vai até a sala do presidente. ao chegar de na porta você para por um segundo e pensa se vai realmente fazer isso (escolha rápido):\n vai abrir a porta e se vingar || 1 \nvai desistir dessa loucura e voltar para casa || 0 ");
    //continuação da var revolver se for 1
    if(revolver == 1 ){
      var tiro = prompt("você abre a porta e vai pro duelo, na sua frente esta um segurança armado e o presidente atrás dele: \nVocê atira no segurança || 1 \n voce atira no bolsonaro || 0") 
      //continuação da var tiro se for 1
      if(tiro == 1){
        alert("Você acertou o tiro no segurança porem ao tentar atira no bolsora a arma falha, você decide partir para luta corporal com o presidente, graças as seu treinameto de boxe, você nocalteia-o e se vinga, dizendo \"esta feliz agora Bolsonaro\".\nvocê volta para casa como um \nVERDADEIRO PESCOTAPA")
        if (confirm("você Venceu! para jogar novamente e ver os outros finais clique em OK")){
          introdução()
        } else{
          alert("Obrigado por jogar!");
        }
      }
      //continuação da var tiro se for 0
      if(tiro == 0){
        alert("você acerta o tiro e conclui sua vingança, porem pela procedencia da arma ser duvidosa ela falha ao tentar acerta o segurança e você é preso por atentado terrorista, se tornando assim um PESCOTAPA TERRORISTA")
        if (confirm("você \"Venceu\"! para jogar novamente e ver os outros finais clique em OK")){
          introdução()
        } else{
          alert("Obrigado por jogar!");
        }
      }
    }
  
  //continuação de var revolver se for 0
  if(arma == 0){
    alert("Um verdadeiro pescotapa nunca desiste da missão, você é a vergonha da profisson!!!");
    alert("GAME OVER!")
    if(confirm("Para jogar novamente clique em OK, caso contrario clique em CANCELAR.")){
      introdução()
  } else{
    alert("Obrigado por jogar")
      }
    }  
  }
}