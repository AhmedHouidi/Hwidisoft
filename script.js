const products = [
  {
    name: 'Planar Reflection 1',
    category: 'systems',
    price: '$19.99',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/02cd75b0-b5ee-4342-a1d8-f40d0f12a5d0.jpg?v=1',
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/325879'
  },
  {
    name: 'Planar reflection built-in',
    category: 'systems',
    price: '$19.99',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/79ae740d-b250-4872-a296-105be0f5b04b.jpg?v=1',
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/331878'
  },
  {
    name: 'ESSW EASY SETUP STYLIZED WATER 2.0',
    category: 'art',
    price: '$12',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/be36b58a-aed0-4fcb-bad9-6874702cb3a3.jpg?v=1',
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/317597'
  },
  {
    name: 'Physics pickup system',
    category: 'systems',
    price: '$8',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/85316a97-67e0-4e2c-9f69-de238ff6fa2c.jpg?v=1',
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/329792'
  },
  {
    name: 'Quick Editor Script',
    category: 'systems',
    price: 'Free',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/3b2d4b97-8f91-4895-89c4-6a09f3d81e2a.jpg?v=1',
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/328410'
  },
  {
    name: 'plasma Shader',
    category: 'art',
    price: 'Free',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/36ab82d3-4dcf-460b-a7b5-cf5ecf88995e.png?v=1',
    description: 'Unity Asset Store listing from my publisher page.',
    buyUrl: 'https://assetstore.unity.com/packages/package/328840'
  },
  {
    name: 'One Click Add Water -Stylized Water Shader',
    category: 'art',
    price: 'Free',
    imageUrl: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/ff44e728-8745-4801-89e4-437b77ffec6a.jpg?v=1',
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
          <img src="${p.imageUrl}" alt="${p.name}" loading="lazy" />
          <h4>${p.name}</h4>
          <p class="meta">${p.category.toUpperCase()} · CREATED BY ME</p>
          <p>${p.description}</p>
          <p class="price">${p.price}</p>
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
