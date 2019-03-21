import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | register-geokret-move/identification', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:register-geokret-move/identification');
    assert.ok(route);
  });
});
