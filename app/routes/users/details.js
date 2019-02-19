import Route from '@ember/routing/route';

export default Route.extend({
  breadCrumb: Ember.computed('controller.user.name', {
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
