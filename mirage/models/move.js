import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user', {inverse: 'moves', async: false}),
  geokret: belongsTo('geokret', {inverse: 'moves', async: false}),
  comments: hasMany('move-comment', {inverse: 'move', async: false})
});
