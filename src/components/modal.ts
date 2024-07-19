export default class Modal{
    static toggle(){
        document.body.classList.toggle("open");
        document.getElementById("modal-background")?.addEventListener("click", () => this.toggle());
    }
}