export default class Rating{
    url: string;
    element: HTMLElement;
    id: string
    constructor(id: string){
        this.url = './templates/components/rating.html';
        this.element = document.createElement('div');
        this.id = id;
        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element.setAttribute("class", "rating");
            this.element.setAttribute("id", this.id);
            this.element!.innerHTML = html;
        });
    }
    }
}