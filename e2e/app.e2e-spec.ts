import { BookStoreAppPage } from './app.po';

describe('book-store-app App', function() {
  let page: BookStoreAppPage;

  beforeEach(() => {
    page = new BookStoreAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
