import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      propertyType: params.propertyType_name,
      rentals: this.store.findAll('rental').then(results => results.filterBy('propertyType', params.propertyType_name.toString()))
    });
  }
});
