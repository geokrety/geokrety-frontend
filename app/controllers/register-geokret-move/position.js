import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({

  waypoint: null,
  coordinates: null,
  cacheName: null,

  bounds: computed(function() {
    return L.latLngBounds(
      L.latLng(58, 66),
      L.latLng(34, -36),
    );
  }),
});
