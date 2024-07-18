export default class CartItem{
    url: string;
    element: HTMLElement;
    id: string
    constructor(id: string){
        this.url = './templates/components/cartItem.html';
        this.element = document.createElement('div');
        this.id = id;
        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element.setAttribute("class", "cart-item");
            this.element.setAttribute("id", this.id);
            this.element!.innerHTML = html;
        });
    }
    }
}