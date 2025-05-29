let selectedCategory = 'all';
let selectedDifficulty = 'all';

function filterProjects() {
  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    const hasCategory = selectedCategory === 'all' || card.classList.contains(selectedCategory);
    const hasDifficulty = selectedDifficulty === 'all' || card.classList.contains(selectedDifficulty);

    card.style.display = (hasCategory && hasDifficulty) ? 'block' : 'none';
  });
}

function filterCategory(category) {
  selectedCategory = category;
  filterProjects();
}

function filterDifficulty(difficulty) {
  selectedDifficulty = difficulty;
  filterProjects();
}
