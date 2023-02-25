// calculate the window's scroll position to hide or show the 'back-to-top' button
function calcScrollPos() {
  const backToTopEl = document.getElementById("back-to-top");
  let scrollTop = document.documentElement.scrollTop;

  if (scrollTop > 100) {
    backToTopEl.classList.add("show");
  } else {
    backToTopEl.classList.remove("show");
  }
}

const copyBtn = document.getElementById("copy-btn");

// add 'copy url' functionality to copy button on the sharing links
async function copyUrlHandler() {
  // if clipboard is available, write to it
  if (navigator.clipboard) {
    try {
      await navigator.clipboard.writeText(`${window.location.href}`);
      copyBtn.classList.add("copied");

      setTimeout(() => {
        copyBtn.classList.remove("copied");
      }, 3000);
    } catch (error) {
      alert("Please copy URL address manually.");
    }
  } else {
    // otherwise alert telling the user to copy manually
    alert("Please copy URL address manually.");
  }
}

window.addEventListener("scroll", calcScrollPos);
copyBtn.addEventListener("click", copyUrlHandler);
