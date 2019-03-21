import DS from 'ember-data';
import LoadableModel from 'ember-data-storefront/mixins/loadable-model';
import {
  computed
} from '@ember/object';
import {
  validator,
  buildValidations
} from 'ember-cp-validations';


const Validations = buildValidations({
  trackingCode: [
    validator('presence', true),
    validator('length', {
      is: 6,
    }),
    validator('tracking-code'),
  ],
  type: [
    validator('inclusion', {
      in: [0, 1, 2, 3, 5]
    })
  ],
  waypoint: [
    validator('length', {
      isWarning: true,
      min: 6,
      debounce: 500,
    }),
    validator('waypoint'),
  ],
  coordinatesStr: [
    validator('presence', true),
    validator('length', {
      min: 4,
      debounce: 500,
    }),
    validator('coordinates'),
  ],
  movedOnDatetime: [
    validator('presence', true),
    validator('date-in-geokret-lifetime', {
      after: 'now',
      onOrBefore: 'now',
      precision: 'minute',
      format: 'M/D/YYY',
      errorFormat: 'M/D/YYY',
    })
  ],
  comment: [
    validator('length', {
      max: 5120,
    })
  ],
});

export default DS.Model.extend(Validations, LoadableModel, {
  trackingCode: DS.attr('string'),
  waypoint: DS.attr('string'),
  latitude: DS.attr('number'),
  longitude: DS.attr('number'),
  comment: DS.attr('string'),
  username: DS.attr('string'),
  application: DS.attr('string'),
  applicationVersion: DS.attr('string'),
  altitude: DS.attr('number'),
  country: DS.attr('string'),
  distance: DS.attr('number'),
  commentsCount: DS.attr('number'),
  picturesCount: DS.attr('number'),
  createdOnDatetime: DS.attr('date'),
  movedOnDatetime: DS.attr('date'),
  updatedOnDatetime: DS.attr('date'),
  type: DS.attr('number'),

  author: DS.belongsTo('user', {
    inverse: 'moves'
  }),
  geokret: DS.belongsTo('geokret', {
    inverse: 'moves'
  }),
  comments: DS.hasMany('move-comment', {
    inverse: 'move'
  }),

  coordinates: computed('latitude', 'longitude', function() {
    var latitude = this.get('latitude');
    var longitude = this.get('longitude');
    return L.latLng(latitude, longitude);
  }),
  coordinatesStr: computed('latitude', 'longitude', function() {
    var latitude = this.get('latitude');
    var longitude = this.get('longitude');
    if (latitude && longitude) {
      return `${latitude} ${longitude}`;
    }
    return "";
  }),
});
