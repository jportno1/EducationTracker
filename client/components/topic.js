angular.module('edtechApp')
.component('topic', {

  bindings: {
    topics: '='
  },

  controller: function() {

  },

  template: 
  `
  <h3>Topics</h3>
  <div ng-repeat='topic in $ctrl.topics' >
    <a>{{topic.name}}</a>
  </div>
  `
})