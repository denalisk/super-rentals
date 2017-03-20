import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },

    saveReview1() {
      console.log("Level 1");
      var params = {
        reviewer: this.get('reviewer'),
        text: this.get('text')
      };
      this.set('addNewReview', false);
      this.sendAction('saveReview2', params);
    }
  }
});
