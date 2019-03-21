import BaseValidator from 'ember-cp-validations/validators/base';
import {
  inject
} from '@ember/service';

const Waypoint = BaseValidator.extend({
  store: inject(),

  validate(value, options, model /*, attribute*/ ) {
    if (!value || value.length < 6) {
      model.set('latitude', 0);
      model.set('longitude', 0);
      return;
    }
    return this.get('store').loadAll('move', {
      filter: JSON.stringify([{
        name: "waypoint",
        op: "eq",
        val: value
      }]),
      sort: '-moved_on_datetime',
      page: {
        size: 1,
        number: 1
      },
    }).then(function(moves) {
      if (moves.meta.count > 0) {
        var move = moves.get("firstObject");
        model.set('latitude', move.latitude);
        model.set('longitude', move.longitude);
        return true;
      }
      model.set('latitude', 0);
      model.set('longitude', 0);
      return "We don't know this waypoint yet.";
    });
  }
});

Waypoint.reopenClass({
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

export default Waypoint;
