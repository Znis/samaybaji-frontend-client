import Footer from "../public/sections/footer/footer";
import Header from "../public/sections/header/header";
import LandingPage from "../public/pages/landingPage/landingPage";

export default class AppLayout {
    constructor() {
    }

    init(): void {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = `
                <header></header>
                <div class="content"></div>
                <footer></footer>
            `;

            

            new Header();
            new LandingPage();
            new Footer();

        }
    }
}