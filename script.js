const categoryLinks = document.querySelectorAll('#categoryMenu .nav-link');
    const difficultyButtons = document.querySelectorAll('.difficulty-filters .btn');
    const projectCards = document.querySelectorAll('.project-card');
    const navAll = document.getElementById('navAll');
    const navBuy = document.getElementById('navBuy');

    let currentCategory = 'all';
    let currentDifficulty = 'all';

    function filterProjects() {
      projectCards.forEach(card => {
        const matchesCategory = currentCategory === 'all' || card.classList.contains(currentCategory);
        const matchesDifficulty = currentDifficulty === 'all' || card.classList.contains(currentDifficulty);
        card.style.display = (matchesCategory && matchesDifficulty) ? 'block' : 'none';
      });
    }

    categoryLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        categoryLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        currentCategory = link.dataset.category;
        filterProjects();
      });
    });

    difficultyButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        difficultyButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentDifficulty = btn.dataset.difficulty;
        filterProjects();
      });
    });

    // Меню "Все проекты"
    navAll.addEventListener('click', (e) => {
      e.preventDefault();
      currentCategory = 'all';
      currentDifficulty = 'all';
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      categoryLinks[0].classList.add('active');
      document.querySelectorAll('.difficulty-filters .btn').forEach(btn => btn.classList.remove('active'));
      difficultyButtons[0].classList.add('active');
      filterProjects();
    });

    // Меню "Купить проект" (премиум проекты)
    navBuy.addEventListener('click', (e) => {
      e.preventDefault();
      currentCategory = 'all';
      currentDifficulty = 'premium';
      document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
      categoryLinks[0].classList.add('active');
      document.querySelectorAll('.difficulty-filters .btn').forEach(btn => btn.classList.remove('active'));
      document.querySelector('.btn[data-difficulty="premium"]').classList.add('active');
      filterProjects();
    });

    // Инициализация при загрузке
    document.addEventListener('DOMContentLoaded', filterProjects);