import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';

export default Route.extend(RouteMixin, {
  queryParams: {
    page: {},
    search: {
      refreshModel: true
    },
  },
  model: function(params) {
    if (!params.search) {
      return {
        geokrety: {}
      };
    }

    const geokretyParams = this.set('geokretyParams', {
      page: params.page,
      perPage: params.size,
      paramMapping: {
        page: "page[number]",
        perPage: "page[size]",
      },
      sort: '-id',
      include: 'owner',
      filter: JSON.stringify([{
        name: "name",
        op: "like",
        val: params.search
      }]),
    });

    return RSVP.hash({
      geokrety: this.findPaged('geokret', geokretyParams),
    });

  }
});
