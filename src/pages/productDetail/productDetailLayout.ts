import BelowSection from "./section/below";
import UpperSection from "./section/upper";

export default class ProductDetailLayout{
    element: HTMLElement;
    constructor(){
        this.element = document.getElementsByClassName("content")[0] as HTMLElement;

        this.init();
    }

    init(): void{
        if(this.element){
        this.element.appendChild(new UpperSection().element);
        this.element.appendChild(new BelowSection().element);
    }
    }
}