export default class Footer{
    url: string;
    elemTagName: string;
    element: HTMLElement;
    constructor(){
        this.url = './templates/sections/footer.html';
        this.elemTagName = 'footer';
        this.element = document.getElementsByTagName(this.elemTagName)[0] as HTMLElement;

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