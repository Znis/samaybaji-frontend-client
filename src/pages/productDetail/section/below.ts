import CustomerReview from "../../../components/customerReview";

export default class BelowSection {
  url: string;
  element: HTMLElement;
  constructor() {
    this.url = "./templates/pages/productDetail/section/below.html";
    this.element = document.createElement("section");

    this.init();
  }

  init(): void {
    if (this.element) {
      fetch(this.url)
        .then((response) => response.text())
        .then((html) => {
          this.element.setAttribute("class", "product-below");
          this.element!.innerHTML = html;
          for (let i = 0; i < 10; i++) {
            this.element
              .getElementsByClassName("product-below__customer-reviews")[0]
              .appendChild(new CustomerReview(`review-id-${i + 1}`).element);
          }
        });
    }
  }
}

const htmlData = `
<div class="product-below__navbar-wrapper">
    <div class="product-below__horizontal-line"></div>
    <div class="product-below__navbar">
        <p class="product-below__navbar-link product-below__navbar-link--active ">Customer Reviews</p>
    </div>
    <div class="product-below__horizontal-line"></div>
</div>
<div class="product-below__customer-reviews">

</div>`;
