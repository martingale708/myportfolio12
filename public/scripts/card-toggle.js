// document.querySelectorAll('.grid__project__card').forEach(card => {
//     card.addEventListener('click', (event) => {
//       event.preventDefault(); // Empêche le comportement par défaut
  
//       // Supprime la classe 'active' de toutes les cartes sauf celle qui est cliquée
//       document.querySelectorAll('.grid__project__card').forEach(c => {
//         if (c !== card) {
//           c.classList.remove('active');
//         }
//       });
  
//       // Ajoute ou supprime la classe 'active' à la carte cliquée
//       card.classList.toggle('active');
//     });
//   });
// document.querySelectorAll('.grid__project__card').forEach(card => {
//     card.addEventListener('click', (event) => {
//       event.stopPropagation(); // Empêche la propagation de l'événement
//       event.preventDefault(); // Empêche le comportement par défaut (comme le défilement)
  
//       // Vérifie si la carte cliquée est déjà active
//       const isActive = card.classList.contains('active');
  
//       // Supprime la classe 'active' de toutes les cartes
//       document.querySelectorAll('.grid__project__card').forEach(c => {
//         c.classList.remove('active');
//       });
  
//       // Si la carte n'était pas active, on l'active
//       if (!isActive) {
//         card.classList.add('active');
//       }
//     });
//   });
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.grid__project__card');
  
    cards.forEach(card => {
      card.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du navigateur
        card.classList.toggle('active');
      });
    });
  });