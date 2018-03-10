angular.module('edtechApp')
.component('lecture', {
  bindings: {
    lectures: '='
  },
  controller: function($http) {

    this.selectedLecture = '';
    this.topics = [];

    this.selectLecture = (e) => {
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
    <h3>Lectures</h3>
    <h5>Click a lecture to see topics</h5>
    <div ng-repeat='lecture in $ctrl.lectures' >
      <a ng-click='$ctrl.selectLecture(lecture.name)' >{{lecture.name}}</a>
    </div>
    <div ng-if='$ctrl.selectedLecture' >
      <topic topics='$ctrl.topics' ></topic>
    </div>
  </div>
  `
})