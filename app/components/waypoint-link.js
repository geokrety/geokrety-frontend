import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  tagName: 'a',
  attributeBindings: ['href', 'title'],

  href: computed(function() {
    return "#"
  }),
  title: computed(function() {
    var coordinates = this.get("coordinates");
    if (coordinates) {
      return `Coordinates: ${coordinates.lat}, ${coordinates.lng}`
    }
  }),
  waypoint: null,
  coordinates: null,
});
