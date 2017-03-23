import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review'),
      propertyTypes: this.store.findAll('propertyType')
    });
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      var typeName = params.propertyType;
      var typeParams = {name: typeName};
      var propertyTypes = this.get('propertyTypes');
      var targetType = null;
      propertyTypes.forEach(function(propertyType) {
        if(typeName === propertyType.name) {
          targetType = propertyType;
        }
      });

// NOT COMPLETE, MAY NEED AN RSVP SAVE TO COMBINE ALL THE PROMISES

      if (!targetType) {
        targetType = this.store.createRecord('propertyType', typeParams);
      }
      newRental.get('propertyType') = targetType;
      targetType.get('rentals').addObject(newRental);
      newRental.save().then(function() {
        return targetType.save();
      });




      var typeParams = {
        name: propertyType
      };




      newRental.save();
      this.transitionTo('index');
    },

    destroyRental(rental) {
      var review_deletions = rental.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return rental.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
