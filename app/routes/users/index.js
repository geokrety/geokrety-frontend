import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    infinity: service(),

    model() {
      return this.infinity.model('user', {
        perPage: 5,
        startingPage: 1,
        perPageParam: 'page[size]',
        pageParam: 'page[number]',
        sort: '-id',
      });
    }
});
