import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  createdOnDatetime: DS.attr('date'),
  news: DS.belongsTo('news', {inverse: 'comments'}),
  author: DS.belongsTo('user', {inverse: 'newsComments'}),
});
