import { Selector, t } from "testcafe";

const Target = require('../utils/selectors');

export default class Page {
  constructor() {
    this.selectors = {
      siteNav: {
        about: Selector(Target.siteNav.about),
        home: Selector(Target.siteNav.home),
        styleguide: Selector(Target.siteNav.styleguide),
      },
      body: {
        about: Selector('p').withText('About content will go here...'),
        home: Selector('p').withText('Index content will go here...'),
        styleguide: Selector('p').withText('Introduction content goes here'),
      },
    };
  }

  async currentlyOn(page) {
    await t
      .expect(this.selectors.body[page].visible);
  }

  async navigateTo(page) {
    await t
      .click(this.selectors.siteNav[page]);
  }
}
