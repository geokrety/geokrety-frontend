import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
  comment: DS.attr('string'),
  createdOnDatetime: DS.attr('date'),
  news: DS.belongsTo('news', {inverse: 'comments', async: false}),
  author: DS.belongsTo('user', {inverse: 'newsComments', async: false}),
});
