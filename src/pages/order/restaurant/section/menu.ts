import MenuItem from "../../../../components/menuItem";

export default class RestaurantMenuList {
  element: HTMLElement;
  constructor() {
    this.element = document.createElement("div");
    this.element.className = "menu-list-container";
    for(let i=0; i<5; i++){
        const menuItem = new MenuItem("Samaybaji", "./assets/images/home-img.png", 1, 150, true);
        this.element.appendChild(menuItem.element)
    }
  }
}
