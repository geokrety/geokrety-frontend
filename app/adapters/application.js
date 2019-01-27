import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://api.geokrety.house.kumy.net',
  namespace: 'v1'
});
