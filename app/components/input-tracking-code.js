import FormElement from 'ember-bootstrap/components/base/bs-form/element';

export default FormElement.extend({}).reopenClass({
// export default FormElement.extend({
  actions: {
    validateTrackingCode(trackingCode) {
      console.log("trackingcode: "+trackingCode);
      if (trackingCode.length == 6) {
        // this.send('searchByTrackingCode', trackingCode);
        console.log("enable trackingcode Validation");
        this.set('showValidations', true);
        // this.transitionToRoute({
        //   queryParams: {
        //     step: 3
        //   }
        // });
      }
    },
  }
});
