import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  form: null,
  moveType: null,

  moveTypeLabels: computed(function() {
    return {
      0: "I've dropped a GeoKret",
      1: "I've grabbed a GeoKret",
      3: "I've met GeoKret",
      5: "I've dipped a GeoKret",
      2: "Comment",
    }
  }),
  moveTypeIcons: computed(function() {
    return {
      0: "dropped",
      1: "grabbed",
      3: "met",
      5: "dipped",
      2: "comment",
    }
  }),
});
