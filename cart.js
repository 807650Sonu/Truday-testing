const cartArea = document.getElementById("cartItems");
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

const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  cartArea.innerHTML = "<p>Your cart is empty.</p>";
} else {
  cart.forEach(id => {
    const p = products.find(prod => prod.id === id);
    if (p) {
      cartArea.innerHTML += `
        <div class="bg-white rounded-lg shadow-md p-4 mb-4">
          <img src="${p.img}" class="w-full h-40 object-cover rounded">
          <h3 class="mt-2 font-semibold">${p.name}</h3>
          <p class="text-sm text-gray-600">${p.desc}</p>
        </div>
      `;
    }
  });
}
