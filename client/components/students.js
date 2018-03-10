angular.module('edtechApp')
.component('students', {
  controller: function($http) {
    this.students = [];
    this.selectedStudent = '';

    this.$onInit = () => {
      let theStudents = $http.get('/api/allStudents', {})
      .then((theStudents) => {
        this.students = theStudents.data;
      })
    }

    this.showStudentDetails = (e) => {
      this.selectedStudent = e;
      console.log('this is e: ', this.selectedStudent)
      let studentId = $http.get('/api/students', {params: {name: this.selectedStudent}})
      console.log('this is studentId in showStudentDetails: ', studentId)
      let studentClasses = $http.get('/api/studentClasses', { params: {studentId: studentId.studentId}})
    }
  },

  template: 
  `
  <div>
    <h2>students component</h2>
    <div ng-repeat='student in $ctrl.students' >
      <h5 ng-click='$ctrl.showStudentDetails(student.name)' >{{student.name}}</h5>
    </div>
  </div>
  `
})