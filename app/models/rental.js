import DS from 'ember-data';

export default DS.Model.extend({
  owner: DS.Model.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  bedroom: DS.attr()

});
