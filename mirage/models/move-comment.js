import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user', {inverse: 'move-comments'}),
  move: belongsTo('move', {inverse: 'comments'})
});
