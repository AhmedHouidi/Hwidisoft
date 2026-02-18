const products = [
  {
    name: 'Top-Down Shooter Template',
    category: 'templates',
    price: 39,
    description: 'Complete gameplay loop, enemies, and weapon system.',
    buyUrl: '#'
  },
  {
    name: 'RPG Save & Inventory System',
    category: 'systems',
    price: 29,
    description: 'ScriptableObject-driven inventory with JSON save/load.',
    buyUrl: '#'
  },
  {
    name: 'Stylized Fantasy Environment Pack',
    category: 'art',
    price: 24,
    description: 'Modular props, terrain materials, and demo scene.',
    buyUrl: '#'
  },
  {
    name: 'Mobile Runner Starter Kit',
    category: 'templates',
    price: 34,
    description: 'Ads-ready endless runner foundation for mobile.',
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
          <p class="meta">${p.category.toUpperCase()}</p>
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
