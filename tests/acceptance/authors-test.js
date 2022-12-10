import { module, test } from 'qunit';
import { visit, currentURL, click, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'tcs-publisher-catalogue/tests/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | authors', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  const selectors = {
    authors: {
      createLink: '#app-authors-index-create',
      noMatchesMessage: 'p.no-query-matches',
      noEntriesMessage: 'p.no-records',
      authorCard: (a) => `.author-card[data-author-id="${a.id}"]`,
      editor: {
        title: '.app-header > h2',

        nameInput: 'input#name',
        lastNameInput: 'input#lastName',
        pictureUrlInput: 'input#pictureUrl',
        birthdateInput: 'input#birthdate',
        countryInput: 'input#country',
        aboutInput: 'textarea#about',

        submitButton: 'form button#save-changes',
        cancelButton: 'form a#cancel',
      },
    },
  };

  const author = {
    name: 'John',
    lastName: 'Doe',
    fullName: 'John Doe',
    picture:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/0.jpg',
    birthdate: '1986-02-01',
    country: 'Great Britain',
    about: 'Not much to say',
  };

  const fullName = (a) => (a ? [a.name, a.lastName].join(' ') : '');

  test('validate add author', async function (assert) {
    await visit('/authors');

    assert.strictEqual(currentURL(), '/authors');

    assert
      .dom(selectors.authors.noEntriesMessage)
      .hasText("No authors found. Let's start by creating one.");

    await click(selectors.authors.createLink);
    assert.strictEqual(
      currentURL(),
      '/authors/new',
      'navigated to add author view'
    );

    // validate initial form state
    assert.dom(selectors.authors.editor.title).hasText('Add Author');

    assert.dom(selectors.authors.editor.nameInput).exists().hasValue('');
    assert.dom(selectors.authors.editor.lastNameInput).exists().hasValue('');
    assert.dom(selectors.authors.editor.pictureUrlInput).exists().hasValue('');
    assert.dom(selectors.authors.editor.birthdateInput).exists().hasValue('');
    assert.dom(selectors.authors.editor.countryInput).exists().hasValue('');
    assert.dom(selectors.authors.editor.aboutInput).exists().hasValue('');

    assert.dom(selectors.authors.editor.submitButton).exists().isDisabled();

    // cancel
    await click(selectors.authors.editor.cancelButton);

    assert.strictEqual(currentURL(), '/authors');

    // now we create
    await click(selectors.authors.createLink);

    assert.strictEqual(
      currentURL(),
      '/authors/new',
      'navigated to add author view'
    );

    await fillIn(selectors.authors.editor.nameInput, author.name);
    await fillIn(selectors.authors.editor.lastNameInput, author.lastName);
    await fillIn(selectors.authors.editor.pictureUrlInput, author.picture);
    await fillIn(selectors.authors.editor.birthdateInput, author.birthdate);
    await fillIn(selectors.authors.editor.countryInput, author.country);
    await fillIn(selectors.authors.editor.aboutInput, author.about);

    await click(selectors.authors.editor.submitButton);

    assert.strictEqual(
      currentURL(),
      '/authors',
      'navigated back to authors list'
    );

    // check if the author card is here now
    assert
      .dom(`.author-card[data-author-id] .card-title`)
      .hasText(author.fullName);
  });

  test('checking data and search', async function (assert) {
    // arranging mirage response & variables
    const authors = this.server.createList('author', 3);
    const invalidQuery = 'as9dja9sdjas9jda9s';
    const firstAuthorQuery = authors[0].name.toLocaleUpperCase();

    await visit('/authors');

    assert.strictEqual(
      this.element.querySelectorAll('.author-card').length,
      authors.length,
      `${authors.length} authors should be displayed`
    );

    authors.forEach((a) => {
      assert
        .dom(`.author-card[data-author-id="${a.id}"] .card-title`)
        .hasText(fullName(a));
    });

    // let's try search with invalid query
    await fillIn('input#app-authors-index-query[type="search"]', invalidQuery);

    // We should see the message that no record was found with the current query
    assert
      .dom(selectors.authors.noMatchesMessage)
      .hasText(
        `No authors found with name matching the ${invalidQuery} search phrase`
      );

    await fillIn(
      'input#app-authors-index-query[type="search"]',
      firstAuthorQuery
    );

    // well, it seems our first author matched the query and card displays the name correctly
    assert
      .dom(`.author-card[data-author-id="${authors[0].id}"] .card-title`)
      .hasText(fullName(authors[0]));
  });

  test('viewing and updating author', async function (assert) {
    // arranging mirage response & variables
    const authors = this.server.createList('author', 1);
    const [a] = authors;
    const newName = 'Rhaegar';

    await visit('/authors');

    assert.strictEqual(
      this.element.querySelectorAll('.author-card').length,
      authors.length,
      `${authors.length} authors should be displayed`
    );

    await click(`.author-card[data-author-id="${a.id}"] a.author-details-link`);

    assert.strictEqual(currentURL(), `/authors/${a.id}`);

    await click(`#author-edit-link`);

    assert.strictEqual(currentURL(), `/authors/${a.id}/edit`);

    await fillIn(selectors.authors.editor.nameInput, newName);
    await click(selectors.authors.editor.submitButton);

    assert
      .dom(`.author-card[data-author-id="${a.id}"] .card-title`)
      .hasText(`${newName} ${a.lastName}`);
  });
});
