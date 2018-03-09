angular.module('edtechApp')
.component('classlist', {
  controller: function($http) {
    let ctrl = this;
    this.classes = [];
    this.selectedClass = '';

    this.$onInit = () => {
      console.log('onInit in classlist')
      let theClasses = $http.get('/api/classes', {})
      .then((theClasses) => {
        console.log('this is data in onInit: ', theClasses.data)
        this.classes = theClasses.data;
      })
    }

    this.selectClass = (e) => {
      this.selectedClass = e;
      console.log('this is selectedClass: ', this.selectedClass)
    }
  },

  template:
  `
  <div>
    <h3>Classes</h3>
    <div ng-repeat='class in $ctrl.classes' >
      <a ng-click='$ctrl.selectClass(class.name)' >{{class.name}}</a>
    </div>
    <div ng-if='$ctrl.selectedClass' >
      <h4>SelectedClass is {{$ctrl.selectedClass}}</h4>
    </div>
  </div>
  `
})