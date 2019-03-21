import Route from '@ember/routing/route';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import RSVP from 'rsvp';

export default Route.extend(RouteMixin, {

  queryParams: {
    page: {},
    size: {},
  },

  model(params) {
    const geokretyParams = this.set('geokretyParams', {
      page: params.page,
      perPage: params.size,
      paramMapping: {
        page: "page[number]",
        perPage: "page[size]",
      },
      include: 'owner,holder',
      sort: '-created_on_datetime',
    });

    return RSVP.hash({
      geokrety: this.findPaged('geokret', geokretyParams),
    });
  }

});
