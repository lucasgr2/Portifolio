// Menu dinamico
const menuIcon = document.querySelector('.cabecalho__icon');
const menu = document.querySelector('.cabecalho__menu');
const body = document.body;

// Função para fechar o menu
function closeMenu() {
  menuIcon.classList.remove('active');
  menu.classList.remove('active');
  body.style.overflow = ''; // Restaura o comportamento de scroll normal
}

menuIcon.addEventListener('click', function (event) {
  event.stopPropagation(); // Impede que o evento de clique se propague para o documento
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    body.style.overflow = 'hidden'; // Impede o scroll da página quando o menu está aberto
  } else {
    body.style.overflow = ''; // Restaura o comportamento de scroll normal
  }
});

body.addEventListener('click', function (event) {
  if (!menu.contains(event.target) && menu.classList.contains('active')) {
    closeMenu();
  }
});

