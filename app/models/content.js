import DS from 'ember-data';

export default DS.Model.extend({
  image: DS.attr(),
  description: DS.attr(),
  article: DS.attr(),
  title: DS.attr(),
  author: DS.attr()
});
