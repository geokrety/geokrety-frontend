import BaseValidator from 'ember-cp-validations/validators/base';

const DateInGeokretLifetime = BaseValidator.extend({
  validate(value, options, model /*, attribute*/) {
    console.log("date-in-geokret-lifetime");
    let createdOnDatetime = model.get('geokret.createdOnDatetime');
    console.log("date-in-geokret-lifetime.geokret", createdOnDatetime);
    if (!createdOnDatetime) {
      return "GeoKret not loaded yet, please input Tracking Code";
    }
    return true;
  }
});

DateInGeokretLifetime.reopenClass({
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
  getDependentsFor(/* attribute, options */) {
    return [];
  }
});

export default DateInGeokretLifetime;
