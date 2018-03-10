angular.module('edtechApp')
.component('students', {
  controller: function($http) {
    this.students = [];
    this.selectedStudent = '';
    this.selectedClasses = [];

    this.$onInit = () => {
      let theStudents = $http.get('/api/allStudents', {})
      .then((theStudents) => {
        this.students = theStudents.data;
      })
    }

    this.showStudentDetails = (e) => {
      this.selectedStudent = e;
      console.log('this is e: ', this.selectedStudent)
      let studentId = $http.get('/api/studentsId', {params: {name: this.selectedStudent}});
      studentId.then((id) => {
        console.log('this is id: ', id.data);
        let studentClasses = $http.get('/api/studentClassesById', { params: {studentId: id.data}})
        .then((id) => {let theClasses = $http.get('/api/classes', {params: {classId: {[Op.or]:id.data} 
      }})
      $ctrl.selectedClasses = theClasses;
      //didn't have time to finish this part, but I had grabbed the classIds for each student, and just needed to use them to get the class names and also to run a query to find the lectues, topics, and quizzes with scores for each student, and display all those properties with ng-repeat upon clicking on a specific student name
      //I purposely left the console logs in this section so you could see what I was grabbing, since I didn't have time to finish getting everything rendered to the page
    });
      })
    }
  },

  template: 
  `
  <div>
    <h2>students component</h2>
    <div ng-repeat='student in $ctrl.students' >
      <h5 ng-click='$ctrl.showStudentDetails(student.name)' >{{student.name}}</h5>
    </div>
    <div ng-repeat='class in $ctrl.selectedClasses' >
      <h5>{{class}}</h5>
    </div>
  </div>
  `
})