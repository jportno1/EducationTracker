angular.module('edtechApp')
.component('lecture', {
  bindings: {
    lectures: '='
  },
  controller: function() {

  },

  template: 
  `
  <div>
    <h3>this is the lecture component</h3>
    <div ng-repeat='lecture in $ctrl.lectures' >
      <a>{{lecture.name}}</a>
    </div>
  </div>
  `
})