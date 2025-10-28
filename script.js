// Efecto suave de entrada
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.hero, .subhero, .contenido');
  sections.forEach(sec => {
    sec.style.opacity = '0';
    sec.style.transition = 'opacity 1.2s ease';
    setTimeout(() => sec.style.opacity = '1', 300);
  });
});
