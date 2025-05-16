const products = [
  {
    id: 1,
    name: "TruDay Masala Mix",
    desc: "Aromatic blend of spices. 100g.",
    img: "https://images.unsplash.com/photo-1622015661586-2bc8986c9d51?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "TruDay Water Bottle (1L)",
    desc: "BPA-free, pure drinking water.",
    img: "https://images.unsplash.com/photo-1600180758890-6c2b1f1c5519?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "TruDay Floor Cleaner",
    desc: "Natural scent, strong cleaning.",
    img: "https://images.unsplash.com/photo-1586201375761-83865001e17b?auto=format&fit=crop&w=500&q=80"
  }
];

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");

function render(productsToShow) {
  grid.innerHTML = "";
  productsToShow.forEach(p => {
    grid.innerHTML += `
      <div class="bg-white rounded-lg shadow-md p-4">
        <img src="${p.img}" alt="${p.name}" class="w-full h-40 object-cover rounded">
        <h3 class="mt-2 font-semibold">${p.name}</h3>
        <p class="text-sm text-gray-600">${p.desc}</p>
        <button onclick="addToCart(${p.id})" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}

searchInput.addEventListener("input", e => {
  const q = e.target.value.toLowerCase();
  const filtered = products.filter(p => p.name.toLowerCase().includes(q));
  render(filtered);
});

render(products);
