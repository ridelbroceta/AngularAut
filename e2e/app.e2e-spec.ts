import { AuthenticationExamplePage } from './app.po';

describe('authentication-example App', () => {
  let page: AuthenticationExamplePage;

  beforeEach(() => {
    page = new AuthenticationExamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
