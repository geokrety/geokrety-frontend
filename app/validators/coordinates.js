import BaseValidator from 'ember-cp-validations/validators/base';
import Coordinates from 'coordinate-parser/coordinates';

const CoordinatesValidator = BaseValidator.extend({
  validate(value, options, model /*, attribute*/ ) {
    var error;
    try {
      var position = new Coordinates(value);
    } catch (error) {
      model.set('latitude', null);
      model.set('longitude', null);
      return error.message;
    }
    model.set('latitude', position.getLatitude());
    model.set('longitude', position.getLongitude());
    return true;
  }
});

CoordinatesValidator.reopenClass({
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

export default CoordinatesValidator;
