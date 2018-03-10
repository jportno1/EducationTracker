angular.module('edtechApp')
.component('entries', {
  controller: function() {
    this.schools = false;
    this.teachers = false;
    this.students = false;
    this.classes = false;
    this.lectures = false;
    this.topics = false;
    this.quizzes = false;
    this.grades = false;
    this.studentClass = false;

    this.toggleSchools = () => {
      this.schools = !this.schools
    };
    this.toggleTeachers = () => {
      this.teachers = !this.teachers
    };
    this.toggleStudents = () => {
      this.students = !this.students
    };
    this.toggleClasses = () => {
      this.classes = !this.classes
    };
    this.toggleLectures = () => {
      this.lectures = !this.lectures
    };
    this.toggleTopics = () => {
      this.topics = !this.topics
    };
    this.toggleQuizzes = () => {
      this.quizzes = !this.quizzes
    };
    this.toggleGrades = () => {
      this.grades = !this.grades
    };
    this.toggleStudentClass = () => {
      this.studentClass = !this.studentClass
    };
  },

  template:
  `
  <div>

    <h1>entries!</h1>

    <h5 ng-click='$ctrl.toggleSchools()' >Schools</h5>
    <div ng-if='$ctrl.schools' >
      School Name: <input ng-model='schoolName' /> <br>
      <button>Add</button> <button>Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleTeachers()' >Teachers</h5>
    <div ng-if='$ctrl.teachers' >
      Teacher Name: <input ng-model='teacherName' /> <br> 
      School Name: <input ng-model='schoolName' /> <br> 
      <button>Add</button> <button>Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleStudents()' >Students</h5>
    <div ng-if='$ctrl.students' >
      Student Name: <input ng-model='studentName' /> <br> 
      School Name: <input ng-model='schoolName' /> <br> 
      <button>Add</button> <button>Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleClasses()' >Classes</h5>
    <div ng-if='$ctrl.classes' >
      Class Name: <input ng-model='className' /> <br> 
      School Name: <input ng-model='schoolName' /> <br> 
      Teacher Name: <input ng-model='teacherName' /> <br> 
      <button>Add</button> <button>Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleLectures()' >Lectures</h5>
    <div ng-if='$ctrl.lectures' >
      Lecture Name: <input ng-model='lectureName' /> <br> 
      Class Name: <input ng-model='className' /> <br> 
      <button>Add</button> <button>Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleTopics()' >Topics</h5>
    <div ng-if='$ctrl.topics' >
      Topic Name: <input ng-model='topicName' /> <br> 
      Lecture Name: <input ng-model='lectureName' /> <br> 
      <button>Add</button> <button>Delete</button>    
    </div>

    <h5 ng-click='$ctrl.toggleQuizzes()' >Quizzes</h5>
    <div ng-if='$ctrl.quizzes' >
      Quiz Name: <input ng-model='quizName' /> <br> 
      Topic Name: <input ng-model='topicName' /> <br> 
      <button>Add</button> <button>Delete</button> 
    </div>

    <h5 ng-click='$ctrl.toggleGrades()' >Quiz Grades</h5>
    <div ng-if='$ctrl.grades' >
      Grade(%): <input ng-model='grade' /> <br>
      Student Name: <input ng-model='studentName' /> <br> 
      Quiz Name: <input ng-model='quizName' /> <br> 
      <button>Add</button> <button>Delete</button> 
    </div>

    <h5 ng-click='$ctrl.toggleStudentClass()' >Add/Remove Students to Classes</h5>
    <div ng-if='$ctrl.studentClass' >
      Student Name: <input ng-model='studentName' /> <br> 
      Class Name: <input ng-model='className' /> <br> 
      <button>Add</button> <button>Delete</button> 
    </div>

  </div>
  `
})