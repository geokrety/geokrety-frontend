import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | users/geokrety/moved', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:users/geokrety/moved');
    assert.ok(route);
  });
});
