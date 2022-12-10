import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'tcs-publisher-catalogue/tests/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | routes and navigation', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  const selectors = {
    navbar: {
      brand: 'nav a.navbar-brand',
      authorsLink: 'nav a[href="/authors"]',
      booksLink: 'nav a[href="/books"]',
    },
    hero: {
      title: '.hero .hero-title',
      authorsCtaLink: '.hero .hero-actions a[href="/authors"]',
      booksCtaLink: '.hero .hero-actions a[href="/books"]',
    },
  };

  test('nav and welcome screen', async function (assert) {
    // we're starting from the default view
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'no redirect so far');

    // let's check navigation bar
    assert.dom(selectors.navbar.authorsLink).hasText('Authors');
    assert.dom(selectors.navbar.booksLink).hasText('Books');

    // let's check hero elements
    assert.dom(selectors.hero.title).hasText('Welcome');
    assert.dom(selectors.hero.authorsCtaLink).hasText('Explore authors');
    assert.dom(selectors.hero.booksCtaLink).hasText('Explore books');

    // navigating to authors view through call to action on hero element
    await click(selectors.hero.authorsCtaLink);

    assert.strictEqual(currentURL(), '/authors', 'navigated to authors view');

    await click(selectors.navbar.brand);

    assert.strictEqual(currentURL(), '/', "and we're back home");
  });

  test('navigate to authors from navbar', async function (assert) {
    // we're starting from the default view
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'no redirect so far');

    // navigating to authors view through navbar
    await click(selectors.navbar.authorsLink);

    assert.strictEqual(currentURL(), '/authors', 'navigated to authors view');
  });

  test('navigate to books from navbar', async function (assert) {
    // we're starting from the default view
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'no redirect so far');

    // navigating to authors view through navbar
    await click(selectors.navbar.booksLink);

    assert.strictEqual(currentURL(), '/books', 'navigated to authors view');
  });

  test('navigate to authors from welcome hero section', async function (assert) {
    // we're starting from the default view
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'no redirect so far');

    // navigating to authors view through call to action on hero element
    await click(selectors.hero.authorsCtaLink);

    assert.strictEqual(currentURL(), '/authors', 'navigated to authors view');
  });

  test('navigate to books from welcome hero section', async function (assert) {
    // we're starting from the default view
    await visit('/');

    assert.strictEqual(currentURL(), '/', 'no redirect so far');

    // navigating to authors view through call to action on hero element
    await click(selectors.hero.booksCtaLink);

    assert.strictEqual(currentURL(), '/books', 'navigated to books view');
  });
});
