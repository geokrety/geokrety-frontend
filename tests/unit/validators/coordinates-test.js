import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validator | coordinates', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const validator = this.owner.lookup('validator:coordinates');
    assert.ok(validator);
  });
});
