import Page from '../models/Page';

fixture `navigation test`
  .page `http://localhost:3000/`;

test('Base Navigation Functionality', async t => {
  const page = new Page();

  await t // Navigate to About page
    .expect(page.currentlyOn('home')).ok()
    .expect(page.navigateTo('about')).ok()
    .expect(page.currentlyOn('about')).ok();

  await t // Navigate back to Home page
    .expect(page.currentlyOn('about')).ok()
    .expect(page.navigateTo('home')).ok()
    .expect(page.currentlyOn('home')).ok();

});
