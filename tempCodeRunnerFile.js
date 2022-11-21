  let bestStudent = [];
  for (let index = 0; index < studentsArray.length; index++) {
    if (bestStudent.length === 0) {
      bestStudent.push(studentsArray[index])
    } else if (sum(studentsArray[index].examScores) > sum(bestStudent[0].examScores)){
      bestStudent[0] = studentsArray[index]
    } else if (sum(studentsArray[index].examScores) > sum(bestStudent[0].examScores)){
      
    };
  }
  return bestStudent
}