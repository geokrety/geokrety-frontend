import Controller from '@ember/controller';
import {
  computed
} from '@ember/object';
import {
  alias
} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ["currentStep", "trackingCode", "type", "waypoint", "latitude", "longitude"],
  currentStep: "identification",
  trackingCode: null,
  type: -1,
  waypoint: null,
  latitude: 0,
  longitude: 0,

  move: alias("model.move"),
  geokret: alias("model.geokret"),

  steps: [
    "identification",
    "move-type",
    "position",
    "date",
    "message",
    "preview",
  ],

  isValid: computed(
    'move.validations.attrs.trackingCode.isValid',
    'move.validations.attrs.type.isValid',
    'move.validations.attrs.coordinatesStr.isValid',
    'move.validations.attrs.movedOnDatetime.isValid',
    'move.validations.attrs.comment.isValid',
     function () {
      const step = this.get("currentStep");
      return this.validateStep(step);
    }),

  validateStep(step) {
    console.log("Checking step", step);
    if (step == "identification") {
      return this.get("move.validations.attrs.trackingCode.isValid")
    } else if (step == "move-type") {
      return this.get("move.validations.attrs.type.isValid")
    } else if (step == "position") {
      return this.get("move.validations.attrs.coordinatesStr.isValid")
    } else if (step == "date") {
      return this.get("move.validations.attrs.movedOnDatetime.isValid")
    } else if (step == "message") {
      return this.get("move.validations.attrs.comment.isValid")
    } else if (step == "preview") {
    }
  },

  scrollToTop() {
    $("html, body").animate({
      scrollTop: $("div.container").offset().top
    }, 500);
  },

  actions: {
    updateDatetime(newDate) {
      var move = this.get("move");
      move.set("movedOnDatetime", newDate);
    },

    validateStep(step, resolve) {
      let isValid = this.validateStep(step);
      console.log("Step", step, "valid?", isValid);
      if (!isValid) {
        return false;
      }
      resolve();
    },
  }
});
