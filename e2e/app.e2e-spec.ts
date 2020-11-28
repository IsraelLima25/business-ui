import { BusinessUiPage } from './app.po';

describe('business-ui App', () => {
  let page: BusinessUiPage;

  beforeEach(() => {
    page = new BusinessUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
