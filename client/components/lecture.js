angular.module('edtechApp')
.component('lecture', {
  bindings: {
    lectures: '='
  },
  controller: function($http) {

    this.selectedLecture = '';
    this.topics = [];

    this.selectLecture = (e) => {
      console.log('select lecture!!!')
      this.selectedLecture = e;
      let lectureTopics = $http.get('/api/topics', { params: {name: this.selectedLecture}})
      .then((lectureTopics) => {
        this.topics = lectureTopics.data;
      })
    }
  },

  template: 
  `
  <div>
    <h3>this is the lecture component</h3>
    <div ng-repeat='lecture in $ctrl.lectures' >
      <a ng-click='$ctrl.selectLecture(lecture.name)' >{{lecture.name}}</a>
    </div>
    <topic topics='$ctrl.topics' ></topic>
  </div>
  `
})