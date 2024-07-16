import RestaurantSectionLayout from "./restaurant/restaurantSectionLayout";

export default class OrderPage {
  element: HTMLElement;
  constructor() {
    this.element = document.getElementsByClassName("content")[0] as HTMLElement;

    this.init();
  }

  init(): void {
    if (this.element) {
      for (let i = 0; i < 4; i++) {
        this.element.innerHTML += `<section class="restaurant" id=restaurant${i}></section>`;

        new RestaurantSectionLayout(`restaurant${i}`);
      }
    }
  }
}
