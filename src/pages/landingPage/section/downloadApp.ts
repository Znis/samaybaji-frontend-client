export default class DownloadApp{
    url: string;
    elemClassName: string;
    element: HTMLElement;
    constructor(){
        this.url = './templates/pages/landingPage/section/downloadApp.html';
        this.elemClassName = 'download-app';
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