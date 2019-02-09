import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | users/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:users/details');
    assert.ok(route);
  });
});
