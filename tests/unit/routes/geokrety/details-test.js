import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | geokrety/details', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:geokrety/details');
    assert.ok(route);
  });
});
