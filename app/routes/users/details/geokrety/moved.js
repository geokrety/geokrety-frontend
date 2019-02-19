import Route from '@ember/routing/route';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import RSVP from 'rsvp';

export default Route.extend(RouteMixin, {
  queryParams: {
    page: {},
    size: {}
  },

  model(params) {
    const geokretyParams = this.set("geokretyParams", {
      page: params.page,
      perPage: params.size,
      paramMapping: {
        page: "page[number]",
        perPage: "page[size]",
      },
      // include: "owner,holder",
      sort: "-created_on_datetime",
      filter: JSON.stringify([{
        name: "moves__author__id",
        op: "any",
        val: this.paramsFor('users.geokrety').user_id
      }]),
    });

    return RSVP.hash({
      user: this.modelFor("users.geokrety"),
      geokrety: this.findPaged("geokret", geokretyParams),
    });
  },
});
