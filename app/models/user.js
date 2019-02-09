import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
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

  news: DS.hasMany('news', {inverse: 'author', async: false}),
  newsComments: DS.hasMany('news-comment', {inverse: 'author', async: false}),
  geokretyOwned: DS.hasMany('geokret', {inverse: 'owner', async: false}),
  geokretyHeld: DS.hasMany('geokret', {inverse: 'holder', async: false}),
  moves: DS.hasMany('move', {inverse: 'author', async: false}),
  moveComments: DS.hasMany('move-comment', {inverse: 'author', async: false}),
});
