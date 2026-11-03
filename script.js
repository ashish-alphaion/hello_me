document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  card?.classList.add("is-entering");

  document.querySelectorAll(".choice").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.dataset.target;
      if (target) window.location.href = target;
    });

    link.addEventListener("pointermove", (event) => {
      const rect = link.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      link.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,.9), rgba(255,255,255,.36) 52%)`;
    });

    link.addEventListener("pointerleave", () => {
      link.style.background = "";
    });
  });
});

function goBackHome() {
  window.location.href = "index.html";
}
