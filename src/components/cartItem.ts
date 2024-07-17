export default class CartItem{
    url: string;
    element: HTMLElement;
    constructor(){
        this.url = './templates/components/cartItem.html';
        this.element = document.createElement('div');

        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element!.innerHTML = html;
        });
    }
    }
}