import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';
import RSVP from 'rsvp';

export default Route.extend({
  // infinity: service(),
  //
  // model() {
  //   return this.infinity.model('geokret', {
  //     perPage: 5,
  //     startingPage: 1,
  //     perPageParam: 'page[size]',
  //     pageParam: 'page[number]',
  //     sort: '-created_on_datetime',
  //   });
  // }

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
      // moves: this.findPaged('move', movesParams)
    });

    // return this.store.loadAll('geokret', {
    //   sort: '-created_on_datetime',
    //   include: 'owner,holder',
    //   page: {
    //     size: 2,
    //     number: 1
    //   },
    //   // include: 'owner,holder,moves,moves.author,moves.comments,moves.comments.author'
    // });
  }
});
