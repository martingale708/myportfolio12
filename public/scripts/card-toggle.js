document.querySelectorAll('.grid__project__card').forEach(card => {
    card.addEventListener('click', (event) => {
      event.preventDefault(); // Empêche le comportement par défaut
  
      // Supprime la classe 'active' de toutes les cartes sauf celle qui est cliquée
      document.querySelectorAll('.grid__project__card').forEach(c => {
        if (c !== card) {
          c.classList.remove('active');
        }
      });
  
      // Ajoute ou supprime la classe 'active' à la carte cliquée
      card.classList.toggle('active');
    });
  });