import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | register-geokret-move/information', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:register-geokret-move/information');
    assert.ok(route);
  });
});
