import LoginCard from "../components/authCard";
import Modal from "../components/modal";

export default class Header{
    url: string;
    elemTagName: string;
    element: HTMLElement;
    constructor(){
        this.url = './templates/sections/header.html';
        this.elemTagName = 'header';
        this.element = document.getElementsByTagName(this.elemTagName)[0] as HTMLElement;

        this.init();
    }

    init(): void{
        if(this.element){
        fetch(this.url)
        .then(response => response.text())
        .then(html => {
            this.element!.innerHTML = html;
            document.getElementById("login")?.addEventListener("click", () => {
                Modal.toggle();
                document.getElementsByClassName('modal')[0].appendChild(new LoginCard().element);
            });
        });
    }
    }
}