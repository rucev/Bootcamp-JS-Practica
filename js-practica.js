/* 
Código base del challenge
*/

const students = [{
  age: 32,
  examScores: [],
  gender: 'male',
  name: 'edu'
},
{
  age: 29,
  examScores: [],
  gender: 'female',
  name: 'silvia'
}]

const availableMaleNames = ['pepe', 'juan', 'victor', 'leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];

/* 
Funciones y tal
*/

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

sum = (array) => {
  return array.reduce((valueA, valueB) => valueA + valueB, 0)
};

meanAverage =(array) => {
  return +Math.round(((sum(array) / array.length) + Number.EPSILON) * 100) / 100};

const getNames = (studentsArray) => {
  let names = []
  for (let index = 0; index < studentsArray.length; index++) {
    names.push(studentsArray[index].name)
  };
  console.log(names.join())
};

const deleteLast = (studentsArray) => {
  studentsArray.length = studentsArray.length - 1;
  return studentsArray
};

const deleteRandom = (studentsArray) => {
  let student = (Math.random() * studentsArray.length) | 0
  return studentsArray.splice(student, 1)
};

const getFemalesList = (studentsArray) => {
  let females= [];
  for (let index = 0; index < studentsArray.length; index++) {
    if (studentsArray[index].gender === 'female'){
      females.push(studentsArray[index]);
    }
  };
  return females
};

const checkAllStudentsAreFemale = (studentsArray) => {
  let isTrue = studentsArray.every(student => student.gender === 'female');
  return console.log(isTrue)
};

const getYoungStudents = (studentsArray) => {
  let youngStudents = [];
  for (let index = 0; index < studentsArray.length; index++) {
    if ((studentsArray[index].age >= 20) && (studentsArray[index].age <= 25)){
      youngStudents.push(studentsArray[index].name);
    }
  };
  return console.log(youngStudents.join())
};

const addRandomStudent = (studentsArray) => {
  let studentAge = Math.floor(Math.random() * 30) + 20;
  let studentGender = availableGenders[Math.floor(Math.random()*availableGenders.length)];
  let studentName = '';
  if (studentGender === 'female'){
    studentName = availableFemaleNames[Math.floor(Math.random()*availableFemaleNames.length)];
  } else {
    studentName = availableMaleNames[Math.floor(Math.random()*availableMaleNames.length)];
  }
  let newStudent = {
    age: studentAge,
    examScores: [],
    gender: studentGender,
    name: studentName
  };
  return studentsArray.push(newStudent);
};

const getYoungestStudent = (studentsArray) => {
  let minAge = Math.min(...studentsArray.map(student => student.age));
  let minAgeData = studentsArray.filter(student => student.age === minAge);
  youngestStudentsNames = []
  for (let index = 0; index < minAgeData.length; index++) {
    youngestStudentsNames.push(minAgeData[index].name)
  };
  return console.log(youngestStudentsNames.join())
};

const getAgeAverage = (studentsArray) => {
  studentsAge = []
  for (let index = 0; index < studentsArray.length; index++) {
    studentsAge.push(studentsArray[index].age)
  };
  return console.log(meanAverage(studentsAge))
};

const addGrades = (studentsArray) => {
  for (let index = 0; index < studentsArray.length; index++) {
    studentsArray[index].examScores.push(Math.floor(Math.random() * 11))
  };
  return studentsArray
};

const sumGrades = (student) => {
  return sum(student.examScores)
};

const getBestStudents = (studentsArray) => {
  let bestStudent = [studentsArray[0]];
  let bestStudentGrades = sumGrades(bestStudent[0])
  for (let index = 1; index < studentsArray.length; index++) {
    if (sumGrades(studentsArray[index]) > bestStudentGrades){
      bestStudent = [studentsArray[index]]
      bestStudentGrades = sumGrades(studentsArray[index])
    } else if (sumGrades(studentsArray[index]) === bestStudentGrades){
      bestStudent.push(studentsArray[index])
    };
  };
  return bestStudent
};

const getStudentsNamesAndGradeAverage = (studentsArray) => {
  for (let index = 0; index < studentsArray.length; index++) {
    console.log(studentsArray[index].name+ ' ' +meanAverage(studentsArray[index].examScores))
  }
};

const addGradePoint = (grades) => {
  if  (grades.length === 0) {
    grades.push(10)
  } else { for (let index = 0; index < grades.length; index++) {
    if (grades[index] < 10) {
      grades[index] += 1}
    }
  }
  return grades
}

const addPointsToAll = (studentsArray) => {
  for (let index = 0; index < studentsArray.length; index++) {
    addGradePoint(studentsArray[index].examScores)
  }
}

/* 
Menu de opciones
*/

const optionsAvailable = [{
  id: 0,
  description: 'exit',
  function: () => exit()
  },
  {
  id: 1,
  description: 'Mostrar en formato de tabla todo el alumnado.',
  function: () => console.table(students)
},
{
  id: 2,
  description: 'Mostrar por consola la cantidad de alumnado que hay en clase.',
  function: () => console.log('\n'+'Cantidad estudiantes:'+'\n'+students.length)
},
{
  id: 3,
  description: 'Mostrar por consola todos los nombres del alumnado.',
  function: () => {console.log('\n'+'Nombres alumnado:'); getNames(students)}
},
{
  id: 4,
  description: 'Eliminar el último alumno/a de la clase.',
  function: () => deleteLast(students)
},
{
  id: 5,
  description: 'Eliminar un alumno/a aleatoriamente de la clase.',
  function: () => deleteRandom(students)
},
{
  id: 6,
  description: 'Mostrar por consola todos los datos del alumnado femenino.',
  function: () => {console.log('\n'+'Datos alumnas:'); console.log(getFemalesList(students))}
},
{
  id: 7,
  description: 'Mostrar por consola el número de chicos y chicas que hay en la clase.',
  function: () => console.log('\n'+'Cantidad alumnas: ' + getFemalesList(students).length + '\n' + 'Cantidad alumnos: '+ (students.length-getFemalesList(students).length))
},
{
  id: 8,
  description: 'Mostrar true o false por consola si todo el alumnado de la clase son chicas.',
  function: () => {console.log('¿Alumnado 100% femenino?'); checkAllStudentsAreFemale(students)}
},
{
  id: 9,
  description: 'Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.',
  function: () => {console.log('\n'+'Alumnado de 20-25 años:'); getYoungStudents(students)}
},
{
  id: 10,
  description: 'Añadir estudiante random.',
  function: () => addRandomStudent(students)
},
{
  id: 11,
  description: 'Mostrar por consola el nombre de la persona más joven de la clase.',
  function: () => {console.log('\n'+'Estudiante más joven:'); getYoungestStudent(students)}
},
{
  id: 12,
  description: 'Mostrar por consola la edad media de todo el alumnado de la clase.',
  function: () => {console.log('\n'+'Edad media del alumnado:'); getAgeAverage(students)}
},
{
  id: 13,
  description: 'Mostrar por consola la edad media de las chicas de la clase.',
  function: () => {console.log('\n'+'Edad media alumnas:'); getAgeAverage(getFemalesList(students))}
},
{
  id: 14,
  description: 'Añadir nueva nota (random) a todo el alumnado',
  function: () => addGrades(students)
},
{
  id: 15,
  description: 'Ordenar al alumnado alfabéticamente según su nombre.',
  function: () => students.sort((itemA, itemB) => itemA.name.toLowerCase().localeCompare(itemB.name.toLowerCase()))
},
{
  id: 16,
  description: 'Mostrar por consola el nombre del/la estudiante con las mejores notas.',
  function: () => {console.log('\n'+'Estudiante/s con mejores notas:'); getNames(getBestStudents(students))}
},
{
  id: 17,
  description: 'Mostrar por consola la nota media más alta de la clase y a qué estudiante pertenece.',
  function: () => {console.log('\n'+'Estudiante/s con mejores notas y su nota media:'); getStudentsNamesAndGradeAverage(getBestStudents(students))}
},
{
  id: 18,
  description: 'Añadir un punto extra a cada nota existente de todo el alumnado. Si no tienen registrada ninguna nota, se les pone un 10.',
  function: () => addPointsToAll(students)
}
]
