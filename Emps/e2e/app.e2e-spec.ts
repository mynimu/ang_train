import { EmpsPage } from './app.po';

describe('emps App', () => {
  let page: EmpsPage;

  beforeEach(() => {
    page = new EmpsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
