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
