import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  news: hasMany('news', {inverse: 'author', async: false}),
  moves: hasMany('move', {inverse: 'author', async: false}),
  geokretyOwned: hasMany('geokret', {inverse: 'owner', async: false}),
  geokretyHeld: hasMany('geokret', {inverse: 'holder', async: false})
});
