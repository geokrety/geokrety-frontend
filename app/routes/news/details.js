import Route from '@ember/routing/route';

export default Route.extend({
  breadCrumb: Ember.computed('controller.news.title', {
    get() {
      return {
        title: this.get('controller.news.title')
      };
    }
  }),
  model(params) {
    return this.store.findRecord('news', params.news_id);
  }
});
