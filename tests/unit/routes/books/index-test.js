import { module, test } from 'qunit';
import { setupTest } from 'tcs-publisher-catalogue/tests/helpers';

module('Unit | Route | books/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:books/index');
    assert.ok(route);
  });
});
