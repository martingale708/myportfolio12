document.querySelectorAll('.grid__project__card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('active');
    });
  });