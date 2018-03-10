angular.module('edtechApp')
.component('classlist', {
  controller: function($http) {
    let ctrl = this;
    this.classes = [];
    this.selectedClass = '';
    this.lectures = [];
    this.studentCount = '';

    this.$onInit = () => {
      let theClasses = $http.get('/api/classes', {})
      .then((theClasses) => {
        this.classes = theClasses.data;
      })
    }

    this.selectClass = (e) => {
      this.selectedClass = e;
      let classLectures = $http.get('/api/lectures', { params: {name: this.selectedClass}})
      .then((classLectures) => {
        this.lectures = classLectures.data;
        
      })
      let classStudents = $http.get('/api/students', { params: {name: e}})
      .then((classStudents) => {
        this.studentCount = classStudents.data.length;
      })
      
    }
  },

  template:
  `
  <div>
    <div ng-if='$ctrl.selectedClass' >
      <h2>Currently Selected Class is {{$ctrl.selectedClass}}</h2>
      <h5>There are {{$ctrl.studentCount}} students in this class</h5>
    </div>
    <h3>Classes</h3>
    <h5>Click a class to display lectures</h5>
    <div ng-repeat='class in $ctrl.classes' >
      <a ng-click='$ctrl.selectClass(class.name)' >{{class.name}}</a>
    </div>
    <div ng-if='$ctrl.selectedClass' >
      <lecture lectures='$ctrl.lectures' ></lecture>
    </div>
  </div>
  `
})