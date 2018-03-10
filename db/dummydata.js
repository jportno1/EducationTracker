const { School, Teacher, Student, Class, Lecture, Topic, Quiz, Score, StudentClass } = require('./orm.js');


schoolData = [
  {name: "East High"},
  {name: "UNL"},
  {name: "Hard Knocks"}
];

teacherData = [
  {name: "Alice Cooper", schoolId: 1},
  {name: "Mr Kotter", schoolId: 2},
  {name: "Rodney Dangerfield", schoolId: 3},
  {name: "Pink Floyd", schoolId: 2},
  {name: "Will Rogers", schoolId: 1}
];

studentData = [
  {name: "Timmy", schoolId: 1},
  {name: "Calvin", schoolId: 2},
  {name: "Brynn", schoolId: 3},
  {name: "Ashley", schoolId: 2},
  {name: "Melissa", schoolId: 1}
];

classData = [
  {name: "science", schoolId: 1, teacherId: 1},
  {name: "english", schoolId: 2, teacherId: 2},
  {name: "math", schoolId: 3, teacherId: 3},
  {name: "psychology", schoolId: 2, teacherId: 4},
  {name: "history", schoolId: 1, teacherId: 5},
  {name: "social studies", schoolId: 1, teacherId: 5},
  {name: "music", schoolId: 1, teacherId: 1}
];

lectureData = [
  {name: "biology", classId: 1}, 
  {name: "shakespeare", classId: 2},
  {name: "geometry", classId: 3},
  {name: "childhood development", classId: 4}, 
  {name: "20th century", classId: 5}, 
  {name: "US Government", classId: 6}, 
  {name: "modern era", classId: 7},
  {name: "chemistry", classId: 1},
];

topicData = [
  {name: "cell division", lectureId: 1}, 
  {name: "chemical reations", lectureId: 8},
  {name: "Two Men of Verona", lectureId: 2},
  {name: "squares", lectureId: 3}, 
  {name: "Maslow", lectureId: 4}, 
  {name: "World War 2", lectureId: 5}, 
  {name: "Congress", lectureId: 6}, 
  {name: "Steve Reich", lectureId: 7},
];

quizData = [
  {name: "mitosis", topicId: 1}, 
  {name: "Characters in Two Men of Verona", topicId: 2}, 
  {name: "How many sides do they have?", topicId: 3}, 
  {name: "Hierarchy of Needs", topicId: 4}, 
  {name: "The Western Front", topicId: 5}, 
  {name: "The Pacific", topicId: 5}, 
  {name: "Are all the sides the same length?", topicId: 3}, 
  {name: "Powers of Congress", topicId: 6}, 
  {name: "Different Trains", topicId: 7}, 
  {name: "Electric Counterpoint", topicId: 7},
];

scoreData = [
  {grade: 91, studentId: 1, quizId: 1}, 
  {grade: 93, studentId: 2, quizId: 1}, 
  {grade: 81, studentId: 3, quizId: 2}, 
  {grade: 88, studentId: 4, quizId: 2}, 
  {grade: 94, studentId: 5, quizId: 3}, 
  {grade: 82, studentId: 1, quizId: 4}, 
  {grade: 78, studentId: 2, quizId: 8}, 
  {grade: 99, studentId: 3, quizId: 4}, 
  {grade: 87, studentId: 4, quizId: 1}, 
  {grade: 92, studentId: 5, quizId: 7}, 
  {grade: 92, studentId: 5, quizId: 5}, 
  {grade: 97, studentId: 5, quizId: 6}, 
  {grade: 79, studentId: 4, quizId: 9}, 
  {grade: 83, studentId: 4, quizId: 10}, 
  {grade: 80, studentId: 3, quizId: 9}, 
  {grade: 94, studentId: 3, quizId: 10}, 
  {grade: 90, studentId: 2, quizId: 5}, 
  {grade: 86, studentId: 2, quizId: 6}, 
  {grade: 87, studentId: 1, quizId: 3}, 
  {grade: 96, studentId: 1, quizId: 7}
];

studentClassData = [
  {studentId: 1, classId: 1}, 
  {studentId: 2, classId: 1}, 
  {studentId: 4, classId: 1}, 
  {studentId: 3, classId: 2}, 
  {studentId: 4, classId: 2}, 
  {studentId: 5, classId: 3}, 
  {studentId: 1, classId: 3}, 
  {studentId: 1, classId: 4}, 
  {studentId: 3, classId: 4}, 
  {studentId: 2, classId: 5}, 
  {studentId: 5, classId: 5}, 
  {studentId: 2, classId: 6}, 
  {studentId: 3, classId: 7}, 
  {studentId: 4, classId: 7}
]



School.bulkCreate(schoolData)
  .then(() => {
    console.log('updated schools');
    Teacher.bulkCreate(teacherData)
      .then(() => {
        console.log('updated teachers');
        Student.bulkCreate(studentData)
          .then(() => {
            console.log('updated students');
            Class.bulkCreate(classData)
              .then(() => {
                console.log('updated classes');
                Lecture.bulkCreate(lectureData)
                  .then(() => {
                    console.log('updated lectures');
                    Topic.bulkCreate(topicData)
                      .then(() => {
                        console.log('updated topics');
                        Quiz.bulkCreate(quizData)
                          .then(() => {
                            console.log('updated quizzes');
                            Score.bulkCreate(scoreData)
                              .then(() => {
                                console.log('updated scores');
                                StudentClass.bulkCreate(studentClassData)
                                  .then(() => {
                                    console.log('updated studentClass');
                                  });
                              });
                          });
                      });
                  });
              });
          });
      });
  })
  .catch((err) => {
    console.log('failed inserting dummy data');
  });

