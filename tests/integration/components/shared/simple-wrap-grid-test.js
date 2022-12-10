import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shared/simple-wrap-grid', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Shared::SimpleWrapGrid />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Shared::SimpleWrapGrid>
        template block text
      </Shared::SimpleWrapGrid>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
