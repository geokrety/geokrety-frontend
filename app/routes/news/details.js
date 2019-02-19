import Route from '@ember/routing/route';
import {
  computed
} from '@ember/object';

export default Route.extend({
  breadCrumb: computed('controller.news.title', {
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
