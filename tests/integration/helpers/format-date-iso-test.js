import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date-iso', function (hooks) {
  setupRenderingTest(hooks);

  test('it formats string', async function (assert) {
    this.set('inputValue', 'Sat, 10 Dec 1991 08:55:12 GMT');

    await render(hbs`{{format-date-iso this.inputValue}}`);

    assert.dom(this.element).hasText('1991-12-10');
  });
});
