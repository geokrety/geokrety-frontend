import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';

export default Controller.extend({
  queryParams: ['search', 'page'],
  search: "",
  page: alias('model.geokrety.page'),

  model: {geokrety: {}},
  geokrety: alias("model.geokrety"),

});
