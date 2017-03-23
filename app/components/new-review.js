import Ember from 'ember';

export default Ember.Component.extend({
  createNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('createNewReview', true);
    },

    saveNewReview() {
      var params = {
        author: this.get('author'),
        rating: this.get('rating'),
        content: this.get('content')
      };
      this.set('createNewReview', false),
      this.sendAction('saveNewReview', params);
    }
  }

});
