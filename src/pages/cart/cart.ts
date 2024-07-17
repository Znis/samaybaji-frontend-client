import CartItem from "../../components/cartItem";

export default class Cart{
    url: string;
    element: HTMLElement;
    constructor(){
        this.url = './templates/pages/cart/cart.html';
        this.element = document.getElementsByClassName("content")[0] as HTMLElement;

        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element!.innerHTML = html;
            for(let i=0; i<5; i++){
                this.element.getElementsByClassName("cart__container")[i].appendChild(new CartItem().element);
            }
        });
    }
    }
}