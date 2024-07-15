export default class MenuItem{
    itemName: string;
    imgSrc: string;
    quantity: number;
    price: number;
    isPopular: boolean;
    element: HTMLDivElement;

    constructor(itemName: string, imgSrc: string, quantity: number, price: number, isPopular: boolean){
        this.itemName = itemName;
        this.imgSrc = imgSrc;
        this.quantity = quantity;
        this.price = price;
        this.isPopular = isPopular;

        this.element = document.createElement('div');
        this.init();
    }

    init(): void{
        
        if(this.isPopular){
            const ribbon = this.createIsPopularRibbon();
            this.element.appendChild(ribbon);
        }
        this.createItemCard();

 
    }


    createItemCard(): void{

        this.element.classList.add('menu-item-card');



        const img = document.createElement('img');
        img.src = this.imgSrc;
        img.alt = this.itemName;

        const h3 = document.createElement('h3');
        h3.innerText = this.itemName;


        const quantityDiv = document.createElement('div');
        quantityDiv.classList.add('quantity');
        quantityDiv.innerText = `${this.quantity} Plate`;


        const priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerText = `Rs. ${this.price}`;


        const form = document.createElement('form');
        form.action = '/order.html';

        const button = document.createElement('button');
        button.classList.add('btn');
        button.name = 'addtocartbtn';
        button.innerText = 'Add to Cart';
        form.appendChild(button);


        this.element.appendChild(img);
        this.element.appendChild(h3);
        this.element.appendChild(quantityDiv);
        this.element.appendChild(priceDiv);
        this.element.appendChild(form);

    }

    createIsPopularRibbon(): HTMLElement{
        const ribbon = document.createElement('div');
        ribbon.classList.add('ribbon', 'ribbon-top-left');
        const span = document.createElement('span');
        span.innerText = 'popular';
        ribbon.appendChild(span);

        return ribbon;
    }
}