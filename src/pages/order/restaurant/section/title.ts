export default class RestaurantTitle {
  element: HTMLElement;
  constructor() {
    this.element = document.createElement("h1");
    this.element.className = "heading";
    this.element.textContent = "our newari ";

    const spanElement = document.createElement("span");
    spanElement.textContent = "menu";
    this.element.appendChild(spanElement);
  }
}
