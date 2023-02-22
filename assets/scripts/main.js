function calcScrollPos() {
  const backToTopEl = document.getElementById("back-to-top");
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 100) {
    backToTopEl.classList.add("show");
  } else {
    backToTopEl.classList.remove("show");
  }
}

window.addEventListener("scroll", calcScrollPos);
