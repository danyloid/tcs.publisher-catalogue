import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | not', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders true for null value', async function (assert) {
    this.set('inputValue', null);

    await render(hbs`{{not this.inputValue}}`);

    assert.dom(this.element).hasText('true');
  });

  test('it renders true for false value', async function (assert) {
    this.set('inputValue', false);

    await render(hbs`{{not this.inputValue}}`);

    assert.dom(this.element).hasText('true');
  });

  test('it renders true for number value', async function (assert) {
    this.set('inputValue', 12312);

    await render(hbs`{{not this.inputValue}}`);

    assert.dom(this.element).hasText('false');
  });
});
