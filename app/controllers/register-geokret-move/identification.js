import Controller from '@ember/controller';

export default Controller.extend({
  trackingCode: null,
  actions: {
    scrollToField() {
      $('html, body').animate({
        scrollTop: $("#inputTrackingCode").offset().top
      }, 500);
    },
  }
});
