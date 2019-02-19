import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({

  async model() {
    return RSVP.hash({
      geokrety: this.get('store').loadAll('geokret', {
        sort: '-created_on_datetime',
        include: 'owner,holder',
        page: {
          size: 2,
          number: 1
        },
      }),
    });
  }

});
