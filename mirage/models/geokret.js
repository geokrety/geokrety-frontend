import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  owner: belongsTo('user', {inverse: 'geokretyOwned'}),
  holder: belongsTo('user', {inverse: 'geokretyHeld'}),
  moves: hasMany('move', {inverse: 'geokret'})
});
