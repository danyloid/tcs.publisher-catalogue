import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shared/grid-filter', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('query', 'Ja');
    this.set('thingsToFilter', [
      { name: 'John' },
      { name: 'Jane' },
      { name: 'James' },
      { name: 'Rick' },
    ]);

    await render(
      hbs`<Shared::GridFilter @entities={{this.thingsToFilter}} @attr="name" @query="{{this.query}}" as |results| />`
    );

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Shared::GridFilter>
        template block text
      </Shared::GridFilter>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
