import EmberRouter from '@ember/routing/router';
// import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

// const Router = EmberRouter.extend(RouterScroll, {
const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('help');
  this.route('news', function() {
    this.route('details', { path: '/:news_id' });
  });
  this.route('geokrety', function() {
    this.route('details', { path: '/:geokret_id' });
  });
  this.route('users', function() {
    this.route('details', { path: '/:user_id' }, function() {
      this.route('geokrety', function() {
        this.route('owned');
        this.route('moved');
        this.route('held');
      })
    });
  });

  this.route('search');
  this.route('register-geokret-move', function() {
    this.route('type');
    this.route('identification');
    this.route('position');
    this.route('information');
    this.route('date-time');
  });
});

export default Router;
