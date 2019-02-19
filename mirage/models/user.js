import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  news: hasMany('news', {inverse: 'author'}),
  moves: hasMany('move', {inverse: 'author'}),
  geokretyOwned: hasMany('geokret', {inverse: 'owner'}),
  geokretyHeld: hasMany('geokret', {inverse: 'holder'})
});
