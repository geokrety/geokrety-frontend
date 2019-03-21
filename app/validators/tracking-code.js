import BaseValidator from 'ember-cp-validations/validators/base';
import { inject } from '@ember/service';

const TrackingCode = BaseValidator.extend({
  store: inject(),

  validate(value, options, model /*, attribute*/ ) {
    return this.get('store').loadAll('geokret', {
      filter: JSON.stringify([{
        name: "tracking_code",
        op: "eq",
        val: value
      }]),
    }).then(function(geokrety) {
      if (geokrety.meta.count > 0) {
        var geokret = geokrety.get("firstObject");
        geokret.set('trackingCode', value);
        model.set('geokret', geokret);
        return true;
      }
      model.set('geokret', null);
      return "No GeoKrety with that Tracking Code.";
    });
  }
});

TrackingCode.reopenClass({
  /**
   * Define attribute specific dependent keys for your validator
   *
   * [
   * 	`model.array.@each.${attribute}` --> Dependent is created on the model's context
   * 	`${attribute}.isValid` --> Dependent is created on the `model.validations.attrs` context
   * ]
   *
   * @param {String}  attribute   The attribute being evaluated
   * @param {Unknown} options     Options passed into your validator
   * @return {Array}
   */
  getDependentsFor( /* attribute, options */ ) {
    return [];
  }
});

export default TrackingCode;
