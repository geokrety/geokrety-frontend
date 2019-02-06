import DS from 'ember-data';

export default DS.Model.extend({
  comment: DS.attr('string'),
  type: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  updatedOnDatetime: DS.attr('date'),

  author: DS.belongsTo('user', {inverse: 'moveComments'}),
  move: DS.belongsTo('move', {inverse: 'comments'}),
});
