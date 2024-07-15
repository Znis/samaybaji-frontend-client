import Footer from "./sections/footer";
import Header from "./sections/header";
import LandingPage from "./pages/landingPage/landingPageLayout";

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