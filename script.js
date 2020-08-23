
document.querySelector(".hamburguer").addEventListener("click", () =>   //aqui esta criando uma função no evento de click no hamburguer
    // para fazer a animação de 2 elementos então colocamos o .container, sem precisar especificar somente 1 class 
    document.querySelector(".container").classList.toggle("show-menu")

);