import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validator | date-in-geokret-lifetime', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const validator = this.owner.lookup('validator:date-in-geokret-lifetime');
    assert.ok(validator);
  });
});
