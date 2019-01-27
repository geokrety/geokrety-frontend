import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),
  username: DS.attr('string'),
  commentsCount: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  lastCommentDatetime: DS.attr('date')
});
