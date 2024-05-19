/* eslint-disable no-unused-expressions */
import { html } from 'lit-element';
import { CellsPage } from '@cells/cells-page';
import { BbvaCoreIntlMixin } from '@bbva-web-components/bbva-core-intl-mixin';
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js';
import {
  bbvaRightarrow,
  bbvaImages
} from '@bbva-web-components/bbva-foundations-icons';
import '@bbva-web-components/bbva-core-collapse/bbva-core-collapse.js';
import '@bbva-web-components/bbva-foundations-grid-tools-layout/bbva-foundations-grid-tools-layout.js';
import '@bbva-web-components/bbva-web-form-checkbox/bbva-web-form-checkbox.js';
import '@bbva-web-components/bbva-web-form-fieldset/bbva-web-form-fieldset.js';
import '@bbva-web-components/bbva-web-form-radio-button/bbva-web-form-radio-button.js';

import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-button-row/bbva-web-button-row.js';
import '@bbva-web-components/bbva-web-form-text/bbva-web-form-text.js';
import '@bbva-web-components/bbva-web-form-amount/bbva-web-form-amount.js';
import '@bbva-web-components/bbva-web-form-toggle/bbva-web-form-toggle.js';
import '@bbva-web-components/bbva-web-form-textarea/bbva-web-form-textarea.js';

import '@bbva-web-components/bbva-web-header-public-web/bbva-web-header-public-web.js';
import '@bbva-web-components/bbva-web-module-footer/bbva-web-module-footer-language-list-item.js';
import '@bbva-web-components/bbva-web-module-footer/bbva-web-module-footer.js';
import '@bbva-web-components/bbva-web-panel-outstanding-opportunity/bbva-web-panel-outstanding-opportunity.js';
import '@cells-demo/demo-data-dm/demo-data-dm.js';
import '@cells-demo/demo-web-template/demo-web-template.js';
import styles from './create-product-page-styles.js';


const DEFAULT_I18N_KEYS = {
  formHeading: 'FORMULARIO PRODUCTO',
  nameInput: 'Nombre producto',
  amountInput: 'Precio producto',
  descInput: 'Descripción',
  createButton: 'Crear Producto',
  seeProductsButton: 'Ver Productos',
  uploadImageToggle: 'Cargar Imagen',
  legendRadio: 'Elige Opción',
  loanRadio: 'Préstamo',
  cardRadio: 'Tarjeta',
  insuranceRadio: 'Seguro',
  otherRadio: 'Otro'
};

/* eslint-disable new-cap */
class CreateProductPage extends BbvaCoreIntlMixin(CellsPage) {
  static get is() {
    return 'create-product-page';
  }

  static get properties() {
    return {
      i18nKeys: {
        type: Object,
        attribute: false,
      },
      imageFile: {
        type: String,
      },
      fileName: {
        type: String,
      },
      isImageUploadVisible: {
        type: Boolean,
      },
      newProduct: {
        type: Object,
      }
    };
  }

  constructor() {
    super();
    this.i18nKeys = {};
    this.imageFile = '';
    this.fileName = '';
    this.isImageUploadVisible = false;
    this.newProduct = {};
  }

  static get styles() {
    return [ styles ];
  }

  update(props) {
    if (props.has('i18nKeys')) {
      this._i18nKeys = { ...DEFAULT_I18N_KEYS, ...this.i18nKeys };
    }
    super.update && super.update(props);
  }

  render() {
    return html` 
      <demo-web-template page-title="Create Product">
        <div slot="app-main-content">
          ${this._renderProductListButton}
          ${this._formProduct}
        </div>
      </demo-web-template>
    `;
  }

  get _renderProductListButton() {
    return html`
      <bbva-web-button-row-item icon="${bbvaRightarrow()}" @click="${this._sendList}">
        ${this._i18nKeys.seeProductsButton}
      </bbva-web-button-row-item>
    `;
  }

  /**
   * Renderiza el formulario de creación de un producto
   */
  get _formProduct() {
    return html`
      <form enctype="multipart/form-data">
        ${this._renderForm()}
        ${this._renderCategoryRadioButtons()}
        ${this._renderImageUploadToggle()}
        ${this._renderFileInput()}
        ${this._renderCreateProductButton()}
      </form>
    `;
  }

  _renderForm() {
    return html`
      <h2>${this._i18nKeys.formHeading}</h2>
      <bbva-web-form-text id="name" label="${this._i18nKeys.nameInput}" required></bbva-web-form-text>
      <bbva-web-form-amount id="amount" label="${this._i18nKeys.amountInput}" required></bbva-web-form-amount>
      <bbva-web-form-textarea id="description" label="${this._i18nKeys.descInput}"></bbva-web-form-textarea>
    `;
  }

  _renderCategoryRadioButtons() {
    return html`
      <bbva-web-form-fieldset legend="${this._i18nKeys.legendRadio}" sr-only>
        <bbva-web-form-radio-button name="category" value="loan">${this._i18nKeys.loanRadio}</bbva-web-form-radio-button>
        <bbva-web-form-radio-button name="category" value="credit">${this._i18nKeys.cardRadio}</bbva-web-form-radio-button>
        <bbva-web-form-radio-button name="category" value="insurance">${this._i18nKeys.insuranceRadio}</bbva-web-form-radio-button>
        <bbva-web-form-radio-button name="category" value="other" checked>${this._i18nKeys.otherRadio}</bbva-web-form-radio-button>
      </bbva-web-form-fieldset>
    `;
  }

  _renderImageUploadToggle() {
    return html`
      <bbva-web-form-toggle label="Add Image" @change="${this._handleToggleChange}" value="${this.isImageUploadVisible ? '1' : '0'}">
      ${this._i18nKeys.uploadImageToggle}
      </bbva-web-form-toggle>
    `;
  }

  _renderFileInput() {
    return this.isImageUploadVisible ? html`
      <div class="file-input-group">
        <bbva-web-button-row-item icon="${bbvaImages()}" @click="${this._triggerFileInput}"></bbva-web-button-row-item>
        <bbva-web-form-text id="fileName" label="Imagen Seleccionada" disabled></bbva-web-form-text>
      </div>
      <input type="file" id="imageFile" @change="${this._handleFileChange}" accept="image/*" class="hidden-input">
      <div class="file-name">${this.fileName}</div>
    ` : '';
  }


  _renderCreateProductButton() {
    return html`
      <bbva-web-button-default id="create-product-button" type="button" @click="${this._addProduct}">
        ${this._i18nKeys.createButton}
      </bbva-web-button-default>
    `;
  }

  _handleToggleChange() {
    this.isImageUploadVisible = !this.isImageUploadVisible;
  }

  _triggerFileInput() {
    this.shadowRoot.querySelector('#imageFile').click();
  }

  _handleFileChange(ev) {
    const file = ev.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageFile = e.target.result;
      };
      reader.readAsDataURL(file);
      this.shadowRoot.querySelector('#fileName').value = file.name;
    }
  }

  _resetForm() {
    this.shadowRoot.querySelector('#name').value = '';
    this.shadowRoot.querySelector('#amount').value = '';
    this.shadowRoot.querySelector('#description').value = '';
    this.isImageUploadVisible = false;
    this.imageFile = '';
    this.fileName = '';
  }

  _getFormValues() {
    const productName = this.shadowRoot.querySelector('#name').value.trim();
    const productAmount = this.shadowRoot.querySelector('#amount').value.trim();
    const productDescription = this.shadowRoot.querySelector('#description').value.trim();
    const image = this.imageFile || '';
    const selectedCategory = this.shadowRoot.querySelector('input[name="category"]:checked').value;

    return { productName, productAmount, productDescription, image, selectedCategory };
  }

  /**
   * Valida que los campos de nombre y precio no estén vacíos
   * @param {Object} param0 - Valores del formulario
   * @param {string} param0.productName - Nombre del producto
   * @param {string} param0.productAmount - Precio del producto
   * @returns {boolean} - True si ambos campos están llenos, false de lo contrario
   */
  _validateFormValues({ productName, productAmount }) {
    if (!productName || !productAmount) {
      alert('Rellena los campos de nombre y precio del producto, por favor.');
      return false;
    }
    return true;
  }

  _createNewProduct({ productName, productAmount, productDescription, image, selectedCategory }) {
    return {
      name: productName,
      amount: productAmount,
      image,
      desc: productDescription,
      category: selectedCategory
    };
  }

  /**
   * Publica newProduct y lo guarda en el almacenamiento local
   * @param {*} newProduct
   */
  _publishProduct(newProduct) {
    localStorage.setItem('productAdded', 'true');
    this.publish('new_product', newProduct);
  }

  _navigateAndReset() {
    this._resetForm();
    this.navigate('list-product');
  }

  /**
   * Maneja el proceso de agregar un producto
   */
  _addProduct() {
    const formValues = this._getFormValues();
    if (!this._validateFormValues(formValues)) {
      return;
    }
    const newProduct = this._createNewProduct(formValues);
    this._publishProduct(newProduct);
    this._navigateAndReset();
  }

  _sendList() {
    this.navigate('list-product');
  }
}

window.customElements.define(CreateProductPage.is, CreateProductPage);

