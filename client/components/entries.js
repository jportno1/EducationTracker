angular.module('edtechApp')
.component('entries', {
  controller: function($http) {
    let ctrl = this;
    this.schools = false;
    this.teachers = false;
    this.students = false;
    this.classes = false;
    this.lectures = false;
    this.topics = false;
    this.quizzes = false;
    this.grades = false;
    this.studentClass = false;
    this.schoolName = '';
    this.teacherName = '';
    this.schoolId = '';
    this.studentName = '';
    this.className = '';
    this.teacherId = '';
    this.lectureName = '';
    this.classId = '';
    this.topicName = '';
    this.lectureId = '';
    this.topicId = '';
    this.quizName = '';
    this.grade = '';
    this.studentId = '';
    this.quizId = '';

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

    this.addSchool = () => {
      $http.post('/api/schools', { name: this.schoolName})
        .then(() => {
          alert('successfully saved ', this.schoolName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteSchool = () => {
      $http.delete('/api/schools', { params: {name: this.schoolName}})
        .then(() => {
          alert('successfully deleted ', this.schoolName)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };

    this.addTeacher = () => {
      $http.post('/api/teachers', { name: this.teacherName, schoolId: this.schoolId})
        .then(() => {
          alert('successfully saved ', this.teacherName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteTeacher = () => {
      $http.delete('/api/teachers', { params: {name: this.teacherName}})
        .then(() => {
          alert('successfully deleted ', this.teacherName)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };

    this.addStudent = () => {
      $http.post('/api/students', { name: this.studentName, schoolId: this.schoolId})
        .then(() => {
          alert('successfully saved ', this.studentName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteStudent = () => {
      $http.delete('/api/students', { params: {name: this.studentName}})
        .then(() => {
          alert('successfully deleted ', this.studentName)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };

    this.addClass = () => {
      $http.post('/api/classes', { name: this.className, schoolId: this.schoolId, teacherId: this.teacherId})
        .then(() => {
          alert('successfully saved ', this.className)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteClass = () => {
      $http.delete('/api/classes', { params: {name: this.className}})
        .then(() => {
          alert('successfully deleted ', this.className)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };


    this.addLecture = () => {
      $http.post('/api/lectures', { name: this.lectureName, classId: this.classId})
        .then(() => {
          alert('successfully saved ', this.lectureName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteLecture = () => {
      $http.delete('/api/lectures', { params: {name: this.lectureName}})
        .then(() => {
          alert('successfully deleted ', this.lectureName)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };


    this.addTopic = () => {
      $http.post('/api/topics', { name: this.topicName, lectureId: this.lectureId})
        .then(() => {
          alert('successfully saved ', this.topicName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteTopic = () => {
      $http.delete('/api/topics', { params: {name: this.topicName}})
        .then(() => {
          alert('successfully deleted ', this.topicName)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };


    this.addQuiz = () => {
      $http.post('/api/quizzes', { name: this.quizName, topicId: this.topicId})
        .then(() => {
          alert('successfully saved ', this.quizName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteQuiz = () => {
      $http.delete('/api/quizzes', { params: {name: this.quizName}})
        .then(() => {
          alert('successfully deleted ', this.quizName)
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };


    this.addGrade = () => {
      $http.post('/api/scores', { grade: this.grade, studentId: this.studentId, quizId: this.quizId})
        .then(() => {
          alert('successfully saved ', this.quizName)
        })
        .catch((err) => {
          console.log('something went wrong when saving to database')
        });
    };

    this.deleteGrade = () => {
      $http.delete('/api/scores', { params: {studentId: this.studentId, quizId: this.quizId}})
        .then(() => {
          alert('successfully deleted')
        })
        .catch((err) => {
          console.log('something went wrong when deleting')
        })
    };

  },

  template:
  `
  <div>
    <div>
      <key></key>
    </div>
    <h1>Click elements to Add/Delete</h1>
    <pre>{{$ctrl.schoolName}}</pre>
    <h5 ng-click='$ctrl.toggleSchools()' >Schools</h5>
    <div ng-if='$ctrl.schools' >
      School Name: <input ng-model='$ctrl.schoolName' /> <br>
      <button ng-click='$ctrl.addSchool()' >Add</button> <button ng-click='$ctrl.deleteSchool()' >Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleTeachers()' >Teachers</h5>
    <div ng-if='$ctrl.teachers' >
      Teacher Name: <input ng-model='$ctrl.teacherName' /> <br> 
      School ID: <input ng-model='$ctrl.schoolId' /> <br> 
      <button ng-click='$ctrl.addTeacher()' >Add</button> <button ng-click='$ctrl.deleteTeacher()' >Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleStudents()' >Students</h5>
    <div ng-if='$ctrl.students' >
      Student Name: <input ng-model='$ctrl.studentName' /> <br> 
      School ID: <input ng-model='$ctrl.schoolId' /> <br> 
      <button ng-click='$ctrl.addStudent()' >Add</button> <button ng-click='$ctrl.deleteStudent()' >Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleClasses()' >Classes</h5>
    <div ng-if='$ctrl.classes' >
      Class Name: <input ng-model='$ctrl.className' /> <br> 
      School ID: <input ng-model='$ctrl.schoolId' /> <br> 
      Teacher ID: <input ng-model='$ctrl.teacherId' /> <br> 
      <button ng-click='$ctrl.addClass()' >Add</button> <button ng-click='$ctrl.deleteClass()' >Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleLectures()' >Lectures</h5>
    <div ng-if='$ctrl.lectures' >
      Lecture Name: <input ng-model='$ctrl.lectureName' /> <br> 
      Class ID: <input ng-model='$ctrl.classId' /> <br> 
      <button ng-click='$ctrl.addLecture()' >Add</button> <button ng-click='$ctrl.deleteLecture()' >Delete</button>
    </div>

    <h5 ng-click='$ctrl.toggleTopics()' >Topics</h5>
    <div ng-if='$ctrl.topics' >
      Topic Name: <input ng-model='$ctrl.topicName' /> <br> 
      Lecture ID: <input ng-model='$ctrl.lectureId' /> <br> 
      <button ng-click='$ctrl.addTopic()' >Add</button> <button ng-click='$ctrl.deleteTopic()' >Delete</button>    
    </div>

    <h5 ng-click='$ctrl.toggleQuizzes()' >Quizzes</h5>
    <div ng-if='$ctrl.quizzes' >
      Quiz Name: <input ng-model='$ctrl.quizName' /> <br> 
      Topic ID: <input ng-model='$ctrl.topicId' /> <br> 
      <button ng-click='$ctrl.addQuiz()' >Add</button> <button ng-click='$ctrl.deleteQuiz()' >Delete</button> 
    </div>

    <h5 ng-click='$ctrl.toggleGrades()' >Quiz Grades</h5>
    <div ng-if='$ctrl.grades' >
      Grade(%): <input ng-model='$ctrl.grade' /> <br>
      Student ID: <input ng-model='$ctrl.studentId' /> <br> 
      Quiz ID: <input ng-model='$ctrl.quizId' /> <br> 
      <button ng-click='$ctrl.addGrade()' >Add</button> <button ng-click='$ctrl.deleteGrade()' >Delete</button> 
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