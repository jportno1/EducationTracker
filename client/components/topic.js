angular.module('edtechApp')
.component('topic', {

  bindings: {
    topics: '='
  },

  controller: function() {

  },

  template: 
  `
  <h3>this is the topic component</h3>
  <div ng-repeat='topic in $ctrl.topics' >
    <a>{{topic.name}}</a>
  </div>
  `
})