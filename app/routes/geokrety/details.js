import Route from '@ember/routing/route';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import RSVP from 'rsvp';

export default Route.extend(RouteMixin, {
  breadCrumb: Ember.computed('controller.geokret.name', {
    get() {
      return {
        title: this.get('controller.geokret.name')
      };
    }
  }),

  queryParams: {
    // page: {refreshModel: true},
    page: {},
    size: {},
  },

  model(params) {
    const geokret_id = params.geokret_id
    const movesParams = this.set('movesParams', {
      page: params.page,
      perPage: params.size,
      paramMapping: {
        page: "page[number]",
        perPage: "page[size]",
      },
      include: 'author,comments,comments.author',
      sort: '-moved_on_datetime',
      filter: JSON.stringify([{
        name: "geokret__id",
        op: "has",
        val: geokret_id
      }]),
    });

    return RSVP.hash({
      geokret: this.get('store').loadRecord('geokret', params.geokret_id, {
        include: 'owner,holder'
      }),
      moves: this.findPaged('move', movesParams)
    });
  },

});
