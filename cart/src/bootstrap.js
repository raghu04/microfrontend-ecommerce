import { faker } from "@faker-js/faker";

const mount = (el) => {
  let cart = `Total items in cart: ${faker.number.int({ min: 1, max: 100 })} <br>`;

  el.innerHTML = cart;
};

// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  if (el) {
    mount(el);
  }
}

// We are running through container and we should export the mount function
export { mount };
