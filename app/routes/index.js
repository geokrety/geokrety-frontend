import Route from '@ember/routing/route';
import {
  hash
} from 'rsvp';

export default Route.extend({
  model() {
    return hash({
      news: this.store.query('news', {
        sort: '-created_on_datetime',
        page: {
          size: 2
        },
      }),
      geokrety: this.store.query('geokret', {
        sort: '-created_on_datetime',
        page: {
          size: 2
        },
      }),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }
});
