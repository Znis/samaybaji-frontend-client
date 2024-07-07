import MenuItem from "../../../../components/menuItem/menuItem";

export default class Menu{
    url: string;
    elemClassName: string;
    element: HTMLElement;
    constructor(){
        this.url = './pages/landingPage/section/menu/menu.html';
        this.elemClassName = 'menu';
        this.element = document.getElementsByClassName(this.elemClassName)[0] as HTMLElement;

        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element!.innerHTML = html;
            for(let i=0; i<5; i++){
                const menuItem = new MenuItem("Samaybaji", "./assets/images/home-img.png", 1, 150, true);
                this.element.getElementsByClassName("box-container")[0].appendChild(menuItem.element)
            }
        });
    }
    }
}