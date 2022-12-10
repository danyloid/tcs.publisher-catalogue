import { module, test } from 'qunit';
import { setupTest } from 'tcs-publisher-catalogue/tests/helpers';

module('Unit | Controller | authors/new', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:authors/new');
    assert.ok(controller);
  });
});
