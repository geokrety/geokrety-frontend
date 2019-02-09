import Route from '@ember/routing/route';
import {
  inject as service
} from '@ember/service';

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

  model() {
    return this.store.loadAll('geokret', {
      sort: '-created_on_datetime',
      page: {
        size: 2,
        number: 1
      },
      // include: 'owner,holder,moves,moves.author,moves.comments,moves.comments.author'
      include: 'owner,holder'
    });
  }
});
