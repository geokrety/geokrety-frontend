import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  owner: belongsTo('user', {inverse: 'geokretyOwned', async: false}),
  holder: belongsTo('user', {inverse: 'geokretyHeld', async: false}),
  moves: hasMany('move', {inverse: 'geokret', async: false})
});
