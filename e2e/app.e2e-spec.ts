import { NgWeathermanPage } from './app.po';

describe('ng-weatherman App', function() {
  let page: NgWeathermanPage;

  beforeEach(() => {
    page = new NgWeathermanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
