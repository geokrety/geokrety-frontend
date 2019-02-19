import Route from '@ember/routing/route';
import RouteMixin from 'ember-cli-pagination/remote/route-mixin';
import RSVP from 'rsvp';

export default Route.extend(RouteMixin, {
  queryParams: {
    page: {},
    size: {}
  },
  breadCrumb: {
    title: 'GeoKrety Held'
  },

  model(params) {
    const geokretyParams = this.set("geokretyParams", {
      page: params.page,
      perPage: params.size,
      paramMapping: {
        page: "page[number]",
        perPage: "page[size]",
      },
      include: "owner",
      sort: "-created_on_datetime",
      filter: JSON.stringify([{
        name: "holder__id",
        op: "has",
        val: this.paramsFor('users.details').user_id
      }]),
    });

    return RSVP.hash({
      user: this.modelFor("users.details"),
      geokrety: this.findPaged("geokret", geokretyParams),
    });
  },
});
