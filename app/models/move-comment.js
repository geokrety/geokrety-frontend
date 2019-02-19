import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
  comment: DS.attr('string'),
  type: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  updatedOnDatetime: DS.attr('date'),

  author: DS.belongsTo('user', {inverse: 'moveComments'}),
  move: DS.belongsTo('move', {inverse: 'comments'}),
});
