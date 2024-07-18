export default class Button{
    element: HTMLButtonElement;
    text: string;
    constructor(text: string){
        this.element = document.createElement('button');
        this.text = text;

        this.init();
    }

    init(){
        this.element.classList.add('button');
        this.element.innerHTML=this.text;
    }
}