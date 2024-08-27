document.querySelectorAll('.grid__project__card').forEach(card => {
    card.addEventListener('click', (event) => {
      event.stopPropagation(); // Empêche la propagation de l'événement
      event.preventDefault(); // Empêche le comportement par défaut
  
      // Vérifie si la carte cliquée est déjà active
      const isActive = card.classList.contains('active');
  
      // Si la carte n'est pas active, on active, sinon on la désactive
      if (isActive) {
        card.classList.remove('active');
      } else {
        // Supprime la classe 'active' de toutes les cartes
        document.querySelectorAll('.grid__project__card').forEach(c => {
          c.classList.remove('active');
        });
        card.classList.add('active');
      }
    });
  });