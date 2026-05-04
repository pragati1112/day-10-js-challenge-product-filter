const products = [
  { name: "Laptop", category: "electronics" },
  { name: "Mobile", category: "electronics" },
  { name: "T-Shirt", category: "clothing" },
  { name: "Jeans", category: "clothing" }
];

function displayProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  if (list.length === 0) {
    container.innerHTML = "No products found ❌";
    return;
  }

  list.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerText = `${p.name} (${p.category})`;
    container.appendChild(div);
  });
}

function filterProducts() {
  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("category").value;

  let filtered = products.filter(p => {
    return (
      (category === "all" || p.category === category) &&
      p.name.toLowerCase().includes(search)
    );
  });

  displayProducts(filtered);
}

// Initial load
displayProducts(products);