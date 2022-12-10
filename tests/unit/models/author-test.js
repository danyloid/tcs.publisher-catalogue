import { module, test } from 'qunit';
import { setupTest } from 'tcs-publisher-catalogue/tests/helpers';

module('Unit | Model | author', function (hooks) {
  setupTest(hooks);

  test('it exists and full name works', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('author', { name: 'John', lastName: 'Doe' });

    assert.ok(model);
    assert.strictEqual(model.fullName, 'John Doe');
  });
});
