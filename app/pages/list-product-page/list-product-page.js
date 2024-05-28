/* eslint-disable no-unused-expressions */
import { html } from 'lit-element';
import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import {
  bbvaTrash,
  bbvaLeftarrow,
  bbvaLoaneuro,
  bbvaCreditcard,
  bbvaInsurance
} from '@bbva-web-components/bbva-foundations-icons';
import '@bbva-web-components/bbva-web-card-product/bbva-web-card-product.js';
import '@cells-demo/demo-web-template/demo-web-template.js';
import styles from './list-product-page-styles.js';


/* eslint-disable new-cap */
class ListProductPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'list-product-page';
  }

  static get properties() {
    return {
      products: {type: Array},
      newProduct: {type: Object}
    };
  }

  // Deberíamos inicializar las propiedades en el constructor para evitar posibles errores
  constructor() {
    super();

    this.products = [];
    this.newProduct = {};
    this.products = JSON.parse(localStorage.getItem('products') || '[]');
  }

  static get styles() {
    return [ styles ];
  }

  /**
   * Se ejecuta al entrar en la página
   * Verifica si se ha agregado un nuevo producto y lo maneja
   */
  onPageEnter() {
    const productAdded = localStorage.getItem('productAdded');
    if (productAdded === 'true') {
      this.subscribe('new_product', (ev) => {
        this.newProduct = ev;
      });
      if (this.newProduct) {
        localStorage.setItem('productAdded', 'false');
        this._handleProductAdded();
      }
    }
  }

  // 💪 muy bien, operador spread para que lit detecte el cambio
  _handleProductAdded() {
    this.products = [...this.products, this.newProduct];
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  /**
   * Elimina un producto de la lista
   * @param {number} index - Índice del producto a eliminar
   */
  // 💪 muy bien, operador spread para que lit detecte el cambio
  __deleteProduct(index) {
    this.products = this.products.filter((_, i) => i !== index);
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  __goBack() {
    this.navigate('create-product');
  }

  render() {
    return html` 
      <demo-web-template
        page-title="List Product"
      >
        <div slot="app-main-content">
          ${this._listProduct}
        </div>
      </demo-web-template>
    `;
  }

  get _listProduct() {
    return html`
      <bbva-web-button-row-item icon="${bbvaLeftarrow()}" @click="${this.__goBack}">Crear Producto</bbva-web-button-row-item>
      <h2>PRODUCTOS</h2>
      ${this.__renderCardProducts()}
    `;
  }

  __renderCardProducts() {
    return html`
      ${this.products.map((product, index) => this.__renderCardProduct(product, index))}
    `;
  }

  __renderCardProduct(product, index) {
    return html`
      <bbva-web-card-product
        variant="wide"
        heading="${product.name}"
        amount="${product.amount}"
        image="${product.image}"
      >
        <p slot="description">${product.desc}</p>
        ${this.__renderBadgeCategory(product.category)}
        ${this.__renderDeleteButton(index)}
      </bbva-web-card-product>
    `;
  }

  __renderBadgeCategory(category) {
    switch (category) {
      case 'insurance':
        return html`<bbva-web-badge-category slot="category" icon="${bbvaInsurance()}" text="Insurance"></bbva-web-badge-category>`;
      case 'credit':
        return html`<bbva-web-badge-category slot="category" icon="${bbvaCreditcard()}" text="Credit Card"></bbva-web-badge-category>`;
      case 'loan':
        return html`<bbva-web-badge-category slot="category" icon="${bbvaLoaneuro()}" text="Loan"></bbva-web-badge-category>`;
      case 'other':
        return html`<bbva-web-badge-category slot="category" icon="bbva:info" text="Others"></bbva-web-badge-category>`;
      default:
        return '';
    }
  }

  __renderDeleteButton(index) {
    return html`
      <bbva-web-button-row-item
        slot="button"
        icon="${bbvaTrash()}"
        @click="${() => this.__deleteProduct(index)}"
      >
      </bbva-web-button-row-item>
    `;
  }
}

window.customElements.define(ListProductPage.is, ListProductPage);
