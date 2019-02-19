import DS from 'ember-data';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';

export default DS.Model.extend(LoadableModel, {
  title: DS.attr('string'),
  content: DS.attr('string'),
  username: DS.attr('string'),
  commentsCount: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  lastCommentDatetime: DS.attr('date'),

  author: DS.belongsTo('user', {inverse: 'newsComments'}),
  comments: DS.hasMany('news-comment', {inverse: 'news'}),

  contentSafe: computed('content', function() {
    return htmlSafe(`${this.content}`);
  })
});
