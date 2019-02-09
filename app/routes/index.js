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
          size: 2,
          number: 1
        },
      }),
      geokrety: this.store.loadAll('geokret', {
        sort: '-created_on_datetime',
        page: {
          size: 2,
          number: 1
        },
        // include: 'owner,holder,moves,moves.author,moves.comments,moves.comments.author'
        include: 'owner,holder'
      }),

    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  }
});
