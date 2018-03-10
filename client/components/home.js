angular.module('edtechApp')
.component('home', {
  controller: function() {
    this.newEntry = false;
    this.classList = true;
    this.studentsList = false;

    this.showNewEntry = () => {
      this.newEntry = true;
      this.classList = false;
      this.studentsList = false;
    };

    this.showClassList = () => {
      this.classList = true;
      this.newEntry = false;
      this.studentsList = false;
    };

    this.showStudentsList = () => {
      this.studentsList = true;
      this.classList = false;
      this.newEntry = false;
    };

  },

  template:
  `
  <div>
    <button ng-click='$ctrl.showNewEntry()' >Add New Entry</button>
    <button ng-click='$ctrl.showClassList()' >Show Classes</button>
    <button ng-click='$ctrl.showStudentsList()' >Show Students</button>
    <div ng-if='$ctrl.newEntry' >
      <entries>not this</entries>
    </div>
    <div ng-if='$ctrl.classList' >
      <h3>List of Classes</h3>
      <classlist></classlist>
    </div>
    <div ng-if='$ctrl.studentsList' >
      <h2>this will be students list</h2>
    </div>

  </div>
  `
})