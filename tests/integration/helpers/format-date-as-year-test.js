import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date-as-year', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders empty string from null', async function (assert) {
    this.set('inputValue', null);

    await render(hbs`{{format-date-as-year this.inputValue}}`);

    assert.dom(this.element).hasText('');
  });

  test('it renders passthrough content from unexpected type', async function (assert) {
    this.set('inputValue', 1231);

    await render(hbs`{{format-date-as-year this.inputValue}}`);

    assert.dom(this.element).hasText('1231');
  });

  test('it renders year from date ISO string', async function (assert) {
    const date = new Date();
    const year = date.getFullYear().toString();
    this.set('inputValue', date.toISOString());

    await render(hbs`{{format-date-as-year this.inputValue}}`);

    assert.dom(this.element).hasText(year);
  });

  test('it renders year from date', async function (assert) {
    const date = new Date();
    const year = date.getFullYear().toString();
    this.set('inputValue', date);

    await render(hbs`{{format-date-as-year this.inputValue}}`);

    assert.dom(this.element).hasText(year);
  });
});
