import Route from '@ember/routing/route';
import {
  computed
} from '@ember/object';

export default Route.extend({
  breadCrumb: computed('controller.user.name', {
    get() {
      return {
        title: this.get('controller.user.name')
      };
    }
  }),

  model(params) {
    return this.store.findRecord('user', params.user_id);
  }
});
