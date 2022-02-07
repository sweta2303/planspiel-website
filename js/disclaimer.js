const cookieContainer = document.querySelector(".disclaimer");
const cookieButton = document.querySelector(".disclaimer__btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  //localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);