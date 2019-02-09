import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(geokret) {
    return {
      'moves': {
        related: `/v1/geokrety/${geokret.id}/moves`
      },
      'owner': {
        related: `/v1/geokrety/${geokret.id}/owner`
      }
    };
  }
});
