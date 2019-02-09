
import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.loadRecord('geokret', params.geokret_id, {
        // include: 'moves,moves.comments,moves.author,moves.comments.author'
        include: 'owner,holder,moves,moves.author,moves.comments,moves.comments.author'
      });
  }
});
