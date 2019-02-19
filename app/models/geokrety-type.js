import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  geokrety: DS.hasMany('geokret', {inverse: 'type'}),
});
