import RestaurantMenuList from "./section/menu";
import RestaurantTitle from "./section/title";

export default class RestaurantSectionLayout {
    element: HTMLElement;

    constructor(id: string) {
      this.element = document.getElementById(id) as HTMLElement;
  
      this.init();
    }
  
    init(): void {
      if (this.element) {
        this.element.innerHTML = `
            <div class="title-container">${new RestaurantTitle().element.outerHTML}</div>
            <div class="menu-list-container">${new RestaurantMenuList().element.outerHTML}</div>
      `;
       
      }
    }
  }
  