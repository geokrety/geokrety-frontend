import { Model, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user', {inverse: 'move-comments', async: false}),
  move: belongsTo('move', {inverse: 'comments', async: false})
});
