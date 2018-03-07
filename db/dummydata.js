const { School, Teacher, Student, Class, Lecture, Topic, Quiz, Score, Message } = require('./orm.js');

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
  {name: "Timmy", school_id: 1},
  {name: "Calvin", school_id: 2},
  {name: "Brynn", school_id: 3},
  {name: "Ashley", school_id: 2},
  {name: "Melissa", school_id: 1}
];

classData = [
  {name: "science", school_id: 1, teacher_id: 1},
  {name: "english", school_id: 2, teacher_id: 2},
  {name: "math", school_id: 3, teacher_id: 3},
  {name: "psychology", school_id: 2, teacher_id: 4},
  {name: "history", school_id: 1, teacher_id: 5},
  {name: "social studies", school_id: 1, teacher_id: 5},
  {name: "music", school_id: 1, teacher_id: 1}
];

lectureData = [
  {name: "biology", class_id: 1}, 
  {name: "shakespeare", class_id: 2},
  {name: "geometry", class_id: 3},
  {name: "childhood development", class_id: 4}, 
  {name: "20th century", class_id: 5}, 
  {name: "US Government", class_id: 6}, 
  {name: "modern era", class_id: 7}
];

topicData = [
  {name: "cell division", lecture_id: 1},
  {name: "Two Men of Verona", lecture_id: 2},
  {name: "squares", lecture_id: 3}, 
  {name: "Maslow", lecture_id: 4}, 
  {name: "World War 2", lecture_id: 5}, 
  {name: "Congress", lecture_id: 6}, 
  {name: "Steve Reich", lecture_id: 7},
];

quizData = [
  {name: "mitosis", topic_id: 1}, 
  {name: "Characters in Two Men of Verona", topic_id: 2}, 
  {name: "How many sides do they have?", topic_id: 3}, 
  {name: "Hierarchy of Needs", topic_id: 4}, 
  {name: "The Western Front", topic_id: 5}, 
  {name: "The Pacific", topic_id: 5}, 
  {name: "Are all the sides the same length?", topic_id: 3}, 
  {name: "Powers of Congress", topic_id: 6}, 
  {name: "Different Trains", topic_id: 7}, 
  {name: "Electric Counterpoint", topic_id: 7}
];

scoreData = [
  {grade: 91, student_id: 1, quiz_id: 1}, 
  {grade: 93, student_id: 2, quiz_id: 1}, 
  {grade: 81, student_id: 3, quiz_id: 2}, 
  {grade: 88, student_id: 4, quiz_id: 2}, 
  {grade: 94, student_id: 5, quiz_id: 3}, 
  {grade: 82, student_id: 1, quiz_id: 4}, 
  {grade: 78, student_id: 2, quiz_id: 8}, 
  {grade: 99, student_id: 3, quiz_id: 4}, 
  {grade: 87, student_id: 4, quiz_id: 1}, 
  {grade: 92, student_id: 5, quiz_id: 7}, 
  {grade: 92, student_id: 5, quiz_id: 5}, 
  {grade: 97, student_id: 5, quiz_id: 6}, 
  {grade: 79, student_id: 4, quiz_id: 9}, 
  {grade: 83, student_id: 4, quiz_id: 10}, 
  {grade: 80, student_id: 3, quiz_id: 9}, 
  {grade: 94, student_id: 3, quiz_id: 10}, 
  {grade: 90, student_id: 2, quiz_id: 5}, 
  {grade: 86, student_id: 2, quiz_id: 6}, 
  {grade: 87, student_id: 1, quiz_id: 3}, 
  {grade: 96, student_id: 1, quiz_id: 7}
]


School.sync({force: false}).then(() => {
  return School.bulkCreate(schoolData)
  .then(() => {
    console.log('updated schools')
  })
})
.then(() => {return createTeacherssTable()})
.then(() => {return createStudentsTable()})
.then(() => {return createClassessTable()})
.then(() => {return createLecturesTable()})
.then(() => {return createTopicsTable()})
.then(() => {return createQuizesTable()})
.then(() => {return createScoreTable()})

const createTeacherssTable = () => {
  Teacher.sync({force: false}).then(() => {
    return Teacher.bulkCreate(teacherData)
      .then(() => {
        console.log('updated teachers')
      })
  });
}

const createStudentsTable = () => {
  Student.sync({force: false}).then(() => {
    return Student.bulkCreate(studentData)
      .then(() => {
        console.log('updated students')
      })
  });
}

const createClassessTable = () => {
  Class.sync({force: false}).then(() => {
    return Class.bulkCreate(classData)
      .then(() => {
        console.log('updated classes')
      })
  });
}

const createLecturesTable = () => {
  Lecture.sync({force: false}).then(() => {
    return Lecture.bulkCreate(lectureData)
      .then(() => {
        console.log('updated lectures')
      })
  });
}

const createTopicsTable = () => {
  Topic.sync({force: false}).then(() => {
    return Topic.bulkCreate(topicData)
      .then(() => {
        console.log('updated topics')
      })
  });
}

const createQuizesTable = () => {
  Quiz.sync({force: false}).then(() => {
    return Quiz.bulkCreate(quizData)
      .then(() => {
        console.log('updated quizes')
      })
  });
}

const createScoreTable = () => {
  Score.sync({force: false}).then(() => {
    return Score.bulkCreate(scoreData)
      .then(() => {
        console.log('updated scores')
      })
  });
}

