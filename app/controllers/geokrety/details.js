import Controller from '@ember/controller';
import {
  alias
} from '@ember/object/computed';

export default Controller.extend({
  // queryParams: ["page", "size"],
  queryParams: ["page"],
  page: "1",
  size: "1",

  geokret: alias("model.geokret"),
  moves: alias("model.moves"),

  actions: {
    pageClicked(page) {
      this.setProperties({
        page: page
      });
    }
  }
});
