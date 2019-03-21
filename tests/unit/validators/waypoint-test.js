import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Validator | waypoint', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const validator = this.owner.lookup('validator:waypoint');
    assert.ok(validator);
  });
});
