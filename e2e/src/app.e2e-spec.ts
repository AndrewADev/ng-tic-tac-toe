import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to ngTicTacToe!');
  });

  it('should start with in-progress status', () => {
    page.navigateTo();
    expect(page.getCurrentStatusDashboardText()).toContain('In-progress');
  });

  it('should play a normal game', () => {
    page.navigateTo();
    // P1
    page.clickSpaceByIndex(0);
    page.clickSpaceByIndex(1);
    // P1
    page.clickSpaceByIndex(4);
    page.clickSpaceByIndex(2);
    // P1 - should be winning play
    page.clickSpaceByIndex(8);
    expect(page.getCurrentStatusDashboardText()).toContain('Game over');
  });
});
