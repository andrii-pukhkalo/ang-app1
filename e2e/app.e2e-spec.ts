import { AngApp1Page } from './app.po';

describe('ang-app1 App', () => {
  let page: AngApp1Page;

  beforeEach(() => {
    page = new AngApp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
