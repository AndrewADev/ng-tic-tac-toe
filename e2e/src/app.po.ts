import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  clickSpaceByIndex(index) {
    return element.all(by.css('.grid-cell')).then((items) => {
      items[index].click();
    });
  }

  getCurrentStatusDashboardText() {
    return element(by.css('app-game-status-dashboard p')).getText();
  }
}
