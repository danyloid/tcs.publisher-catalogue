import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | shared/hero', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders passed arguments', async function (assert) {
    this.set('title', 'Hello World');
    this.set('text', 'Here we are');

    await render(
      hbs`<Shared::Hero @title={{this.title}} @text={{this.text}}/>`
    );

    assert.strictEqual(
      this.element.querySelector('.hero-title').innerText,
      'Hello World',
      'Title rendered properly'
    );
    assert.strictEqual(
      this.element.querySelector('.hero-text').innerText,
      'Here we are',
      'Text rendered properly'
    );
  });
});
