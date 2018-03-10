angular.module('edtechApp')
.component('key', {
  controller: function($http) {
    this.classes = [];
    this.schools = [];

    this.$onInit = () => {
      let theSchools = $http.get('/api/schools', {})
      .then((theSchools) => {
        this.schools = theSchools.data;
      })

      let theClasses = $http.get('/api/classes', {})
      .then((theClasses) => {
        this.classes = theClasses.data;
      })

    }

  },

  template: 
  `
  <div>
    <h1>key</h1>
    <h3>Schools</h3>
    <div ng-repeat='school in $ctrl.schools' >
      <h5>ID Number {{school.id}} -- {{school.name}}</h5>
    </div>

    <h3>Classes</h3>
    <div ng-repeat='class in $ctrl.classes' >
      <h5>ID Number {{class.id}} -- {{class.name}}</h5>
    </div>
  </div>
  `
})