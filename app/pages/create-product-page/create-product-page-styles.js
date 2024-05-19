/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  --bbva-web-progress-bar-bg-color: token("foundations.colors.secondary300");
  display: block;
  box-sizing: border-box;
  font-size: token("foundations.typography.typeSmall");
  line-height: token("foundations.lineHeight.typeSmall");
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.hidden {
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1px;
  text-decoration: none;
}

form {
  width: 40%;
  margin: 3rem auto 1rem;
}
form > * {
  margin-bottom: 1rem;
}
form bbva-web-form-fieldset {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
form bbva-web-form-text {
  box-sizing: border-box;
}
form h3 {
  font-weight: token("foundations.fontFacePrimary.medium.fontWeight");
}

.opportunity {
  margin: 5rem 0 3rem;
}
.opportunity-header {
  text-align: center;
  margin-bottom: 3rem;
}
.opportunity-header h3 {
  margin: 0 0 0.5rem;
  font-size: token("foundations.typography.type4XLarge");
  line-height: token("foundations.lineHeight.type4XLarge");
  font-weight: token("foundations.fontFacePrimary.book.fontWeight");
}
.opportunity-header p {
  margin: 0 0 1rem;
}

bbva-web-module-footer-language-list-item[selected] {
  font-weight: token("foundations.fontFacePrimary.medium.fontWeight");
}

h2 {
  font-size: token("foundations.typography.type3XLarge");
  color: token("foundations.colors.primary600");
  text-align: center;
  margin-bottom: 2rem;
  font-weight: token("foundations.fontFacePrimary.medium.fontWeight");
}

bbva-web-button-default#create-product-button {
  width: 100%;
  display: block;
}

.hidden-input {
  display: none;
}

.file-input-group {
  display: flex;
  align-items: center;
}

.file-input-group bbva-web-form-text {
  flex-grow: 1;
}

.file-name {
  margin-top: 1rem;
  font-size: token("foundations.typography.typeMedium");
  color: token("foundations.colors.primary500");
}
`;
