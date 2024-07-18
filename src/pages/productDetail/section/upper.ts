import Rating from "../../../components/rating";

export default class UpperSection{
    url: string;
    element: HTMLElement;
    constructor(){
        this.url = './templates/pages/productDetail/section/upper.html';
        this.element = document.createElement('section');

        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element.setAttribute("class", "product-upper");
            this.element!.innerHTML = html;
            this.element.getElementsByClassName("product-upper__rating-wrapper")[0]
            .appendChild(new Rating(`rating-id-1`).element);
        });
    }
    }
}