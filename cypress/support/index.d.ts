/* eslint-disable @typescript-eslint/method-signature-style */
declare namespace Cypress {
  interface Chainable {
    _goToPage(url: string): Chainable<Element>;
    _getByDataTest(dataTestId: string): Chainable<JQuery<HTMLElement>>;
  }
}
