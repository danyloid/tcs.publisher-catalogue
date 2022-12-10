import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shared/header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders text passed through args', async function (assert) {
    this.set('title', 'Hello World');

    await render(hbs`<Shared::Header @text={{this.title}}/>`);

    assert.dom(this.element).hasText('Hello World');
  });
});
