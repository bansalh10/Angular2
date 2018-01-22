import { RetailInventoryManagementPage } from './app.po';

describe('retail-inventory-management App', () => {
  let page: RetailInventoryManagementPage;

  beforeEach(() => {
    page = new RetailInventoryManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
