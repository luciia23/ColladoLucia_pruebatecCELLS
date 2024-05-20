/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  --bbva-web-progress-bar-bg-color: var(--colorsSecondary300, ${unsafeCSS(foundations.colors.secondary300)});
  display: block;
  box-sizing: border-box;
  font-size: var(--typographyTypeSmall, ${unsafeCSS(foundations.typography.typeSmall)});
  line-height: var(--lineHeightTypeSmall, ${unsafeCSS(foundations.lineHeight.typeSmall)});
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

h2 {
  font-size: var(--typographyType3XLarge, ${unsafeCSS(foundations.typography.type3XLarge)});
  color: var(--colorsPrimary600, ${unsafeCSS(foundations.colors.primary600)});
  text-align: center;
  margin-bottom: 2rem;
  font-weight: var(--fontFacePrimaryMediumFontWeight, ${unsafeCSS(foundations.fontFacePrimary.medium.fontWeight)});
}
`;
