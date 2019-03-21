import Component from '@ember/component';
import {
  computed
} from '@ember/object';

export default Component.extend({
  form: null,
  trackingCode: null,
  model: null,

  showValidationOn: ["input", "focusout"],

});
