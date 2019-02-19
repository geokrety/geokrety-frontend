import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user', {inverse: 'moves'}),
  geokret: belongsTo('geokret', {inverse: 'moves'}),
  comments: hasMany('move-comment', {inverse: 'move'})
});
