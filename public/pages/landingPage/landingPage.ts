import Home from "./section/home/home";
import Menu from "./section/menu/menu";

export default class LandingPage{
    element: HTMLElement;
    constructor(){
        this.element = document.getElementsByClassName("content")[0] as HTMLElement;

        this.init();

        
       

        
    }

    init(): void{
        if(this.element){
        this.element.innerHTML = `
        <section class="home"></section>
        <section class="menu"></section>
        <section class="about"></section>
        <section class="feedback"></section>
        <section class="download-app"></section>
    `;


        new Home();
        new Menu();

        }

    }
}