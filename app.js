document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("action-btn");
  const result = document.getElementById("action-result");

  if (btn && result) {
    btn.addEventListener("click", () => {
      const isHidden = result.classList.contains("hidden");
      if (isHidden) {
        result.classList.remove("hidden");
        btn.textContent = "Reset State";
      } else {
        result.classList.add("hidden");
        btn.textContent = "Click to Test Interaction";
      }
    });
  }
});
