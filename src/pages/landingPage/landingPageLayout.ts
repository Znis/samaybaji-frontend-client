import Home from "./section/home";
import Menu from "./section/menu";
import About from "./section/about";
import Feedback from "./section/feedback";
import DownloadApp from "./section/downloadApp";

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
        new About();
        new Feedback();
        new DownloadApp();
 

        }

    }
}