import { faker } from "@faker-js/faker";

const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
    const price = faker.commerce.price();

    products += `
          <div class="product">
          <h2>${name}</h2>
          <p>$${price}</p>
          </div>
      `;
  }

  el.innerHTML = products;
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-products");

  if (el) {
    mount(el);
  }
}

// We are running through container and we should export the mount function
export { mount };
