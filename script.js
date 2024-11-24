// FAQ Toggle Script
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const toggle = question.querySelector('.faq-toggle');
  
      // Toggle answer visibility
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  
      // Toggle "+" to "-" or back
      toggle.classList.toggle('open');
    });
  });  

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  