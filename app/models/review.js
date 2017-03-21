import DS from 'ember-data';

export default DS.Model.extend({
  reviewer: DS.attr(),
  text: DS.attr(),
  rental_id: DS.attr()
});
