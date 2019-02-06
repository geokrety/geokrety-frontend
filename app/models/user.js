import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  email: DS.attr('string'),
  language: DS.attr('string'),
  country: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  dailyMails: DS.attr('boolean'),
  observationRadius: DS.attr('number'),
  hour: DS.attr('number'),
  statpicUrl: DS.attr('string'),
  avatarUrl: DS.attr('string'),
  secid: DS.attr('string'),
  joinedOnDatetime: DS.attr('date'),
  lastUpdateDatetime: DS.attr('date'),
  lastMailDatetime: DS.attr('date'),
  lastLoginDatetime: DS.attr('date'),

  news: DS.hasMany('news', {inverse: 'author', async: true}),
  newsComments: DS.hasMany('news-comment', {inverse: 'author', async: true}),
  geokretyOwned: DS.hasMany('geokret', {inverse: 'owner', async: true}),
  geokretyHeld: DS.hasMany('geokret', {inverse: 'holder', async: true}),
  moves: DS.hasMany('move', {inverse: 'author', async: true}),
  moveComments: DS.hasMany('move-comment'),
});
