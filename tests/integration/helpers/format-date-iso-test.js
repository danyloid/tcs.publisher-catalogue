import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | format-date-iso', function (hooks) {
  setupRenderingTest(hooks);

  test('it formats string', async function (assert) {
    this.set('inputValue', '10/03/1991');

    await render(hbs`{{format-date-iso this.inputValue}}`);

    assert.dom(this.element).hasText('1991-10-02');
  });
});
