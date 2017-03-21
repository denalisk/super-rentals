import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview1(rental) {
      console.log("Start level 1");
      var params = {
        reviewer: this.get('reviewer'),
        text: this.get('text'),
        rental_id: rental.get('id')
      };
      this.set('addNewReview', false);
      console.log("near end level 1");
      var store = this.get('store');
      var newReview = store.createRecord('review', params);
      console.log(newReview.get('reviewer'));
      newReview.save();
    }
  }
});
