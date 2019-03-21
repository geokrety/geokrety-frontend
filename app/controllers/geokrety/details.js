import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';
import { computed } from '@ember/object';

export default Controller.extend({
  queryParams: ["page", "size"],
  page: alias('model.moves.page'),
  size: "20",
  model: {
    moves: {}
  },

  geokret: alias("model.geokret"),
  moves: alias("model.moves"),

  bounds: computed('moves.@each.coordinates', function() {
    var bounds = L.latLngBounds(this.get('moves').map(move => {
      return move.get('coordinates');
    }));
    if (!bounds._northEast || !bounds._southWest) {
      bounds = L.latLngBounds(
        L.latLng(58, 66),
        L.latLng(34, -36),
      );
    }
    return bounds;
  }),

  markers: computed('moves.@each.coordinates', function() {
    return this.get('moves').map(x => (x.coordinates)).filter((item) => item != null);
  })

});
