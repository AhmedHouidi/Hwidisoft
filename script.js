const products = [
  {
    name: 'Planar Reflection 1',
    category: 'systems',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/325879'
  },
  {
    name: 'Planar reflection built-in',
    category: 'systems',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/331878'
  },
  {
    name: 'ESSW EASY SETUP STYLIZED WATER 2.0',
    category: 'art',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/317597'
  },
  {
    name: 'Physics pickup system',
    category: 'systems',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/329792'
  },
  {
    name: 'Quick Editor Script',
    category: 'systems',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/328410'
  },
  {
    name: 'plasma Shader',
    category: 'art',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/328840'
  },
  {
    name: 'One Click Add Water -Stylized Water Shader',
    category: 'art',
    price: 0,
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/305970'
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
          <p class="price">View price on Unity Asset Store</p>
          <a class="btn secondary" href="${p.buyUrl}" target="_blank" rel="noreferrer">Open Asset</a>
        </article>
      `
    )
    .join('');
}

category.addEventListener('change', (event) => {
  render(event.target.value);
});

render();
