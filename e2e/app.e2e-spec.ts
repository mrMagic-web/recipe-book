import { RecepieBookPage } from './app.po';

describe('recepie-book App', function() {
  let page: RecepieBookPage;

  beforeEach(() => {
    page = new RecepieBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
