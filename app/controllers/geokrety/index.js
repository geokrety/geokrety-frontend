import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ["page", "size"],
  page: alias('model.geokrety.page'),
  model: {
    geokrety: {}
  },
  size: "20",

  geokrety: alias("model.geokrety"),
});
