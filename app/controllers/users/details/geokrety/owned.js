import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ["page", "size", "query"],
  page: 1,
  size: 20,
  query: '',

  user: alias("model.user"),
  geokrety: alias("model.geokrety"),

  actions: {
    pageClicked(page) {
      this.setProperties({
        page: page
      });
    }
  }
});
