angular.module('edtechApp')
.component('key', {
  controller: function($http) {
    this.classes = [];
    this.schools = [];
    this.teachers = [];
    this.lectures = [];
    this.topics = [];

    this.$onInit = () => {
      let theSchools = $http.get('/api/schools', {})
      .then((theSchools) => {
        this.schools = theSchools.data;
      })

      let theTeachers = $http.get('/api/teachers', {})
      .then((theTeachers) => {
        this.teachers = theTeachers.data;
      })

      let theClasses = $http.get('/api/classes', {})
      .then((theClasses) => {
        this.classes = theClasses.data;
      })

      let theLectures = $http.get('/api/allLectures', {})
      .then((theLectures) => {
        this.lectures = theLectures.data;
      })

      let theTopics = $http.get('/api/allTopics', {})
      .then((theTopics) => {
        this.topics = theTopics.data;
      })

      let theQuizzes = $http.get('/api/allQuizzes', {})
      .then((theQuizzes) => {
        this.quizzes = theQuizzes.data;
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

    <h3>Teachers</h3>
    <div ng-repeat='teacher in $ctrl.teachers' >
      <h5>ID Number {{teacher.id}} -- {{teacher.name}}</h5>
    </div>

    <h3>Classes</h3>
    <div ng-repeat='class in $ctrl.classes' >
      <h5>ID Number {{class.id}} -- {{class.name}}</h5>
    </div>

    <h3>Lectures</h3>
    <div ng-repeat='lecture in $ctrl.lectures' >
      <h5>ID Number {{lecture.id}} -- {{lecture.name}}</h5>
    </div>

    <h3>Topics</h3>
    <div ng-repeat='topic in $ctrl.topics' >
      <h5>ID Number {{topic.id}} -- {{topic.name}}</h5>
    </div>

    <h3>Quizzes</h3>
    <div ng-repeat='quiz in $ctrl.quizzes' >
      <h5>ID Number {{quiz.id}} -- {{quiz.name}}</h5>
    </div>
  </div>

  `
})