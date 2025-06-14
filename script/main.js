  // General//
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

function revealOnScroll() {
  const elements = document.querySelectorAll('.animate');
  const windowHeight = window.innerHeight;

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;

    if (position < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}

       //  for about //
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';
  });


  // for web development //
   const questions = document.querySelectorAll('.faq-question');

  questions.forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
    });
  });

 function showPackage(type) {
  // Hide all pricing wrappers
  document.querySelectorAll('.pricing-wrapper').forEach(section => {
    section.style.display = 'none';
  });

  // Hide all extras
  document.querySelectorAll('.extras-section').forEach(extra => {
    extra.style.display = 'none';
  });

  // Remove active state from all buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected section
  document.getElementById(`${type}-packages`).style.display = 'flex';

  // Show corresponding extras (if any)
  const extras = document.querySelector(`.${type}-extras`);
  if (extras) extras.style.display = 'block';

  // Activate clicked tab
  event.target.classList.add('active');
}

