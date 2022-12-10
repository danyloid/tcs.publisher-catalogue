import { module, test } from 'qunit';
import { setupRenderingTest } from 'tcs-publisher-catalogue/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | and', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders false if value is undefined', async function (assert) {
    this.set('a', undefined);
    this.set('b', '1234');

    await render(hbs`{{and this.a this.b}}`);

    assert.dom(this.element).hasText('false');
  });

  test('it renders true for 2 defined values', async function (assert) {
    this.set('a', true);
    this.set('b', '1234');

    await render(hbs`{{and this.a this.b}}`);

    assert.dom(this.element).hasText('true');
  });

  test('it supports 1 parameter', async function (assert) {
    this.set('a', true);

    await render(hbs`{{and this.a}}`);

    assert.dom(this.element).hasText('true');
  });

  test('it supports variable parameters number', async function (assert) {
    this.set('a', true);
    this.set('b', 1);
    this.set('c', {});
    this.set('d', 'John');
    this.set('e', undefined);

    await render(hbs`{{and this.a this.b this.c this.d this.e}}`);

    assert.dom(this.element).hasText('false');
  });
});
