export default class Home{
    url: string;
    elemClassName: string;
    element: HTMLElement;
    constructor(){
        this.url = './pages/landingPage/section/home/home.html';
        this.elemClassName = 'home';
        this.element = document.getElementsByClassName(this.elemClassName)[0] as HTMLElement;

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