import DS from 'ember-data';

export default DS.Model.extend({
  trackingCode: DS.attr('string'),
  waypoint: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  comment: DS.attr('string'),
  username: DS.attr('string'),
  application: DS.attr('string'),
  applicationVersion: DS.attr('string'),
  altitude: DS.attr('number'),
  country: DS.attr('string'),
  distance: DS.attr('number'),
  commentsCount: DS.attr('number'),
  picturesCount: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  movedOnDatetime: DS.attr('date'),
  updatedOnDatetime: DS.attr('date'),

  author: DS.belongsTo('user', {inverse: 'moves'}),
  geokret: DS.belongsTo('geokret', {inverse: 'moves'}),
  comments: DS.hasMany('move-comment', {inverse: 'move', async: true}),
});
