import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.query('news', {
      include: 'author',
      sort: '-created_on_datetime',
      page: {
        size: 10
      }
    });
  }
});
