const buttons = [...document.querySelectorAll(".cart-btn")];
const countNode = document.getElementById("cartCount");
const toast = document.getElementById("toast");
let cartCount = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1500);
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const added = button.classList.toggle("is-added");
    if (added) {
      cartCount += 1;
      button.setAttribute("aria-pressed", "true");
      showToast("Added to cart");
    } else {
      cartCount = Math.max(0, cartCount - 1);
      button.setAttribute("aria-pressed", "false");
      showToast("Removed from cart");
    }
    countNode.textContent = String(cartCount);
  });
});

document.getElementById("copyCss").addEventListener("click", async () => {
  const code = document.getElementById("cssSnippet").textContent;
  try {
    await navigator.clipboard.writeText(code);
    showToast("CSS copied to clipboard");
  } catch {
    showToast("Select the CSS text and copy manually");
  }
});
