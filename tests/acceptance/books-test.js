import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'tcs-publisher-catalogue/tests/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | books', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  const selectors = {
    books: {
      noMatchesMessage: 'p.no-query-matches',
      noEntriesMessage: 'p.no-records',
    },
  };

  test('validate empty', async function (assert) {
    await visit('/books');

    assert.strictEqual(currentURL(), '/books');

    assert.dom(selectors.books.noEntriesMessage).hasText('No books found.');
  });
});
