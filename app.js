const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".nav_links");
const overlay = document.querySelector(".overlay");
const mainThumbnail = document.querySelector(".main-thumbnail");
const mainThumbnailLightBox = document.querySelector(
  ".lightbox-container .main-thumbnail"
);
const images = document.querySelectorAll(".preview img");
const plusBtn = document.querySelector("#plus");
const minusBtn = document.querySelector("#minus");
const amount = document.querySelector(".amount");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("previous");
const slider = document.querySelector(".mobile-thumb");
const thumbMob = document.querySelector(".thumb-mob");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".cart-wrp");
const closeLightboxBtn = document.querySelector(".close-lightbox");
const lightbox = document.querySelector(".lightbox");
const addBtn = document.querySelector(".add_btn");
const indicator = document.querySelector(".indicator");
const wrp = document.querySelector(".cart-content");
let amountValue = 0;
let currentValue = 0;
let currentImg = 1;

const displayCounter = () => {
  amount.textContent = amountValue;
};
displayCounter();

plusBtn.addEventListener("click", () => {
  amountValue++;
  displayCounter();
});
minusBtn.addEventListener("click", () => {
  if (amountValue === 0) return;
  amountValue--;
  displayCounter();
});

function addItem() {
  if (amountValue > 0) {
    currentValue += amountValue;
    const total = 125.0 * currentValue;
    wrp.classList.remove("empty");
    wrp.innerHTML = `<div class="product">
                    <div>
                      <img src="./images/image-product-1-thumbnail.jpg" class="product-img" alt="product">
                      <div class="product-info">
                        <p class="product-title">Fall Limited Edition Sneakers</p>
                       <p><span>$125.00</span> × <span class="number">${currentValue}</span> <b>$${total}</b></p>
                      </div>
                      <button class="delete-btn"><img src="./images/icon-delete.svg" alt="delete"></button>
                    </div>
                    <button class="checkout-btn">Checkout</button>
                  </div>`;
    indicator.style.display = "block";
    indicator.innerText = currentValue;

    const deleteBtn = document.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      wrp.classList.add("empty");
      indicator.style.display = "none";
      wrp.innerHTML = `<p>Your cart is empty</p>`;
      currentValue = 0;
    });
  }
}

addBtn.addEventListener("click", () => {
  addItem();
});
cartBtn.addEventListener("click", () => {
  cart.classList.toggle("invisible");
});

mainThumbnail.addEventListener("click", () => {
  lightbox.classList.remove("invisible");
});
closeLightboxBtn.addEventListener("click", () => {
  lightbox.classList.add("invisible");
});

images.forEach((img) => {
  img.addEventListener("click", () => {
    let number = img.src.split("-")[2];
    mainThumbnail.src = `./images/image-product-${number}.jpg`;
    mainThumbnailLightBox.src = `./images/image-product-${number}.jpg`;
    images.forEach((img) => {
      img.classList.remove("selected");
    });
    img.classList.add("selected");
  });
});
