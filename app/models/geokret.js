import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  trackingCode: DS.attr('string'),
  description: DS.attr('string'),
  missing: DS.attr('string'),
  distance: DS.attr('string'),
  cachesCount: DS.attr('number'),
  picturesCount: DS.attr('number'),
  averageRating: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  updatedOnDatetime: DS.attr('date'),

  owner: DS.belongsTo('user', {inverse: 'geokretyOwned'}),
  holder: DS.belongsTo('user', {inverse: 'geokretyHeld'}),
  moves: DS.hasMany('move', {inverse: 'geokret'}),
});
