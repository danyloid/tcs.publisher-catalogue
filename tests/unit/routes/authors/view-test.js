import { module, test } from 'qunit';
import { setupTest } from 'tcs-publisher-catalogue/tests/helpers';

module('Unit | Route | authors/view', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authors/view');
    assert.ok(route);
  });
});
