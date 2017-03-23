import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      rentals: this.store.findAll('rental'),
      reviews: this.store.findAll('review')
    });
  },

  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
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
