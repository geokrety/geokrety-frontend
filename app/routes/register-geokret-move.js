import Route from '@ember/routing/route';
import {
  computed
} from '@ember/object';
import RSVP from 'rsvp';
import config from '../config/environment';

export default Route.extend({
  breadCrumb: computed('controller.move.type', {
    get() {
      return {
        title: "Register a GeoKret move"
      };
    }
  }),

  queryParams: {
    currentStep: {},
    trackingCode: {},
    type: {},
    waypoint: {},
    latitude: {},
    longitude: {},
  },

  model(params, transition) {
    if (!this.get('newMove')) {
      var newMove = this.store.createRecord('move');
      newMove.set('trackingCode', params.trackingCode ? params.trackingCode.toUpperCase() : "");
      newMove.set('type', params.type);
      newMove.set('waypoint', params.waypoint);
      newMove.set('application', config.APP.name);
      newMove.set('applicationVersion', config.APP.version);
      newMove.set('movedOnDatetime', new Date());
      this.set('newMove', newMove);
    }
    return RSVP.hash({
      move: this.get('newMove'),
    })
  },

  setupController(controller, model) {
    this._super(controller, model);
    const steps = this.get("controller.steps");
    const currentStep = this.get('controller.currentStep');
    if (!steps.includes(currentStep)) {
      this.set("controller.currentStep", "identification");
      this.transitionTo({ queryParams: { currentStep: "identification" } });
    }
  }

});
