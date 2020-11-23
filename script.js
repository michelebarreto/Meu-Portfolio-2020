
document.querySelector(".hamburguer").addEventListener("click", () =>   //aqui esta criando uma função no evento de click no hamburguer
    // para fazer a animação de 2 elementos então colocamos o .container, sem precisar especificar somente 1 class 
    document.querySelector(".container").classList.toggle("show-menu")

);
 document.querySelector("#qtde").addEventListener("change", atualizarPreco);
/* o change vai monitorar tanto se o usuario digitar ou usar as setas da quantidade de paginas*/
 document.querySelector("#js").addEventListener("change", atualizarPreco);
 document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
 document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
 document.querySelector("#prazo").addEventListener("change", function(){
     const prazo =document.querySelector("#prazo").value;
     document.querySelector("label[for=prazo]").innerHTML = `Prazo : ${prazo} semanas`;
     atualizarPreco();
 });

function atualizarPreco(){
 const qtde = document.querySelector("#qtde").value;
 const temJS= document.querySelector("#js").checked;
 const incluiLayout =  document.querySelector("#layout-sim").checked;/** o checked verifica se é verdadeiro ou falso */
 const prazo = document.querySelector("#prazo").value;
 let preco = qtde * 100;
 if(temJS) preco = preco + (preco *10/100);/** aqui esta fazendo o calculo para acrescentar 10 % no valor  */
     /**podemos usar também preco *=1.1 para calcular os 10 % */
 if(incluiLayout){
     preco = preco +500;
 }
 let taxaUrgencia = 1 - prazo*0.1;/** aqui é adicona o valor se o for urgente acrescenta 10 % */
 preco = preco + (preco * taxaUrgencia);
  document.querySelector("#preco").innerHTML= `R$ ${preco.toFixed(2)}`;


}
