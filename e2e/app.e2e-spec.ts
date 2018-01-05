import { OnlineMarketPage } from './app.po';

describe('online-market App', () => {
  let page: OnlineMarketPage;

  beforeEach(() => {
    page = new OnlineMarketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
