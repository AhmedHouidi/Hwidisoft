const products = [
  {
    name: 'Top-Down Shooter Template',
    category: 'templates',
    price: 39,
    description: 'My complete gameplay loop with enemies, weapons, and progression.',
    buyUrl: '#'
  },
  {
    name: 'RPG Save & Inventory System',
    category: 'systems',
    price: 29,
    description: 'My ScriptableObject-based inventory with robust JSON save/load.',
    buyUrl: '#'
  },
  {
    name: 'Stylized Fantasy Environment Pack',
    category: 'art',
    price: 24,
    description: 'My modular environment assets, terrain materials, and demo scene.',
    buyUrl: '#'
  },
  {
    name: 'Mobile Runner Starter Kit',
    category: 'templates',
    price: 34,
    description: 'My mobile-ready endless runner foundation with clean architecture.',
    buyUrl: '#'
  }
];

const cards = document.getElementById('cards');
const category = document.getElementById('category');
const year = document.getElementById('year');

year.textContent = new Date().getFullYear();

function render(filter = 'all') {
  const visible = products.filter(
    (p) => filter === 'all' || p.category === filter
  );

  cards.innerHTML = visible
    .map(
      (p) => `
        <article class="card">
          <h4>${p.name}</h4>
          <p class="meta">${p.category.toUpperCase()} · CREATED BY ME</p>
          <p>${p.description}</p>
          <p class="price">$${p.price}</p>
          <a class="btn secondary" href="${p.buyUrl}">Buy now</a>
        </article>
      `
    )
    .join('');
}

category.addEventListener('change', (event) => {
  render(event.target.value);
});

render();
