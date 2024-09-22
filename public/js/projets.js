// Gestion des filtres de recherche pour les projets
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const tagButtons = document.querySelectorAll('.tag-btn');
    const cards = document.querySelectorAll('.card-item');
    const levelTags = ['debutant', 'intermediaire', 'expert'];

    searchInput.addEventListener('input', filterCards);
    tagButtons.forEach(btn => btn.addEventListener('click', toggleTag));

    // Fonction pour filtrer les cartes de projets
    function filterCards() {
        const searchTerm = searchInput.value.toLowerCase();
        const activeTags = Array.from(tagButtons).filter(btn => btn.classList.contains('active')).map(btn => btn.dataset.tag);

        cards.forEach(card => {
            const matchesSearch = card.querySelector('h3').textContent.toLowerCase().includes(searchTerm);
            const cardTags = card.dataset.tags.split(' ');
            const matchesTags = activeTags.every(tag => cardTags.includes(tag) || activeTags.length === 0);

            if (matchesSearch && matchesTags) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Fonction pour selectionner un seul niveau de difficulté à la fois
    function toggleTag(event) {
        const clickedTag = event.target.dataset.tag;

        if (levelTags.includes(clickedTag)) {
            levelTags.forEach(tag => {
                if (tag !== clickedTag) {
                    document.querySelector(`.tag-btn[data-tag="${tag}"]`).classList.remove('active');
                }
            });
        }

        event.target.classList.toggle('active');
        filterCards();
    }
});