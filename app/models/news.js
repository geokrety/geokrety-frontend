import DS from 'ember-data';
import {
  htmlSafe
} from '@ember/template';
import {
  computed
} from '@ember/object';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  username: DS.attr('string'),
  commentsCount: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  lastCommentDatetime: DS.attr('date'),

  contentSafe: computed('content', function() {
    return htmlSafe(`${this.content}`);
  })
});
