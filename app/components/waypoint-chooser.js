import Component from '@ember/component';
import {
  computed
} from '@ember/object';
import {
  alias
} from '@ember/object/computed';

export default Component.extend({
  form: null,
  model: null,
  showValidationOn: ["input", "focusout"],

  waypoint: null,
  latitude: alias('model.latitude'),
  longitude: alias('model.longitude'),
  coordinates: computed('latitude', 'longitude', function() {
    let latitude = this.get("latitude");
    let longitude = this.get("longitude");
    if (latitude && longitude) {
      return `${latitude} ${longitude}`;
    }
  }),

  isGC: computed('waypoint', function() {
    let waypoint = this.get('waypoint');
    waypoint = waypoint.toUpperCase();
    return waypoint.startsWith('GC');
  }),
  isOpenCaching: computed('waypoint', function() {
    let waypoint = this.get('waypoint');
    waypoint = waypoint.toUpperCase();
    return waypoint.startsWith('O');
  }),

  bounds: computed('latitude', 'longitude', function() {
    let latitude = this.get('latitude');
    let longitude = this.get('longitude');
    if (latitude && longitude) {
      return L.latLngBounds(
        L.latLng(latitude + 0.004, longitude + 0.006),
        L.latLng(latitude - 0.004, longitude - 0.006),
      );
    }
    return L.latLngBounds(
      L.latLng(58, 66),
      L.latLng(34, -36),
    );
  }),

  // didReceiveAttrs() {
  //   this._super(...arguments);
  //   console.log('didReceiveAttrs');
  //   var waypoint = this.get('waypoint');
  //   if (waypoint) {
  //     waypoint = waypoint.toUpperCase();
  //     this.set('waypoint', waypoint);
  //   }
  // },

});
