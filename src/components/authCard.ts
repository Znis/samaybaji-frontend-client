export default class AuthCard {
  url: string;
  element: HTMLElement;
  constructor() {
    this.url = "./templates/components/authCard.html";
    this.element = document.createElement("div");

    this.init();
  }

  init(): void {
    if (this.element) {
      fetch(this.url)
        .then((response) => response.text())
        .then((html) => {
          this.element.setAttribute("class", "auth-card");
          this.element!.innerHTML = html;
          const signupButton = document.getElementById("signup");
          const signinButton = document.getElementById("signin");
          const pinkbox = document.querySelector(".auth-card__active-box") as HTMLElement;
          const signinForm = document.querySelector(".auth-card__form--signin") as HTMLElement;
          const signupForm = document.querySelector(".auth-card__form--signup") as HTMLElement;
          
          if (signupButton && signinButton && pinkbox && signinForm && signupForm) {
            signupButton.addEventListener("click", () => {
              pinkbox.style.transform = "translateX(80%)";
              signinForm.classList.add("auth-card__form--hidden");
              signupForm.classList.remove("auth-card__form--hidden");
            });
          
            signinButton.addEventListener("click", () => {
              pinkbox.style.transform = "translateX(0%)";
              signupForm.classList.add("auth-card__form--hidden");
              signinForm.classList.remove("auth-card__form--hidden");
            });
          }
          
        });
    }
  }
}
