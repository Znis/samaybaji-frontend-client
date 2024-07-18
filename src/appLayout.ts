import Footer from "./sections/footer";
import Header from "./sections/header";
import LandingPage from "./pages/landingPage/landingPageLayout";
import OrderPage from "./pages/order/orderPageLayout";
import Cart from "./pages/cart/cart";
import ProductDetailLayout from "./pages/productDetail/productDetailLayout";

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
            // new LandingPage();
            // new OrderPage();
            // new Cart();
            new ProductDetailLayout();
            new Footer();

        }
    }
}