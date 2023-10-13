// CÓDIGO PARA ATIVAR E REMOVER O BOTÃO PARA VOLTAR AO TOPO DO SITE
var botao = document.querySelector("#retroceder");
window.onscroll = function(){
  var altura = window.scrollY;
  console.log(altura)
  if (altura >=1000) {
    botao.classList.remove("retroceder--disable");
    botao.classList.add("retroceder--active");
  } else {
    botao.classList.remove("retroceder--active");
  }
};

// CÓDIGO PARA ADICIONAR EFEITO NA ROLAGEM DA PAGINA

const elements = document.querySelectorAll(".hidden")

const monitor = new IntersectionObserver((entries)=> {
    entries.forEach((entrie)=>{
      if (entrie.isIntersecting) {
        entrie.target.classList.add("show")
      } else {
        entrie.target.classList.remove("show")
      }
    })
})

elements.forEach((element)=>{monitor.observe(element)})