import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ["page", "size"],
  page: alias('model.geokrety.page'),
  size: 20,
  model: {geokrety: {}},

  user: alias("model.user"),
  geokrety: alias("model.geokrety"),

});
