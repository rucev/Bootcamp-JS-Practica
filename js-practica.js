/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/

const { exit } = require('process');

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

const optionsAvailable = [
  () => { exit },
  () => { console.table(students) }
]


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});


/*1 Mostrar en formato de tabla todos los alumnos.*/
optionsAvailable[1]();

/*2 Mostrar por consola la cantidad de alumnos que hay en clase.*/
console.log(students.length);

/*3 Mostrar por consola todos los nombres de los alumnos.*/
getNames = (studentsArray) => {
  let names = []
  for (let index = 0; index < studentsArray.length; index++) {
    names.push(studentsArray[index].name)
  };
  console.log('All names:' + names.join())
};

/*4 Eliminar el último alumno de la clase.*/
deleteLast = (studentsArray) => {
  studentsArray.length = studentsArray.length - 1;
  return studentsArray
};

/*5 Eliminar un alumno aleatoriamente de la clase.*/
deleteRandom = (studentsArray) => {
  let student = (Math.random() * studentsArray.length) | 0
  return studentsArray.splice(student, 1)
};

/*6 Mostrar por consola todos los datos de los alumnos que son chicas.*/
getFemalesList = (studentsArray) => {
  let females= [];
  for (let index = 0; index < studentsArray.length; index++) {
    if (studentsArray[index].gender === 'female'){
      females.push(studentsArray[index]);
    }
  };
  return females
};

console.log(getFemalesList(students))

/*7 Mostrar por consola el número de chicos y chicas que hay en la clase.*/
console.log('female students:' + getFemalesList(students).length + '\n' + 'male students:'+ (students.length-getFemalesList(students).length));

/*8 Mostrar true o false por consola si todos los alumnos de la clase son chicas.*/

checkAllStudentsAreFemale = (studentsArray) => {
  let isTrue = studentsArray.every(student => student.gender === 'female');
  return console.log(isTrue)
}

/*9 Mostrar por consola los nombres de los alumnos que tengan entre 20 y 25 años.*/
getYoungStudents = (studentsArray) => {
  let youngStudents = [];
  for (let index = 0; index < studentsArray.length; index++) {
    if ((studentsArray[index].age >= 20) && (studentsArray[index].age <= 25)){
      youngStudents.push(studentsArray[index].name);
    }
  };
  return console.log(youngStudents)
};

/*10 Añadir un alumno nuevo con los siguientes datos:
  - nombre aleatorio.
  - edad aleatoria entre 20 y 50 años.
  - género aleatorio.
  - listado de calificaciones vacío.

¡OJO!, el nombre y el género tienen que ir acordes.*/

addRandomStudent = (studentsArray) => {
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

/*11 Mostrar por consola el nombre de la persona más joven de la clase.
¡OJO!, si varias personas de la clase comparten la edad más baja, cualquiera de ellos es una respuesta válida. */

getYoungestStudent = (studentsArray) => {
  let minAge = Math.min(...studentsArray.map(student => student.age));
  let minAgeData = studentsArray.filter(student => student.age === minAge);
  youngestStudentsNames = []
  for (let index = 0; index < minAgeData.length; index++) {
    youngestStudentsNames.push(minAgeData[index].name)
  };
  return console.log(youngestStudentsNames.join())
}

/*12 Mostrar por consola la edad media de todos los alumnos de la clase.*/

const median = array => {
  const mid = Math.floor(array.length / 2),
    nums = [...array].sort((a, b) => a - b);
  return array.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

getAgeMedia = (studentsArray) => {
  studentsAge = []
  for (let index = 0; index < studentsArray.length; index++) {
    studentsAge.push(studentsArray[index].age)
  };
  return console.log(median(studentsAge))
}

/*13 Mostrar por consola la edad media de las chicas de la clase.*/
getAgeMedia(getFemalesList(students));

/*14 Añadir nueva nota a los alumnos. Por cada alumno de la clase, tendremos que calcular una nota de forma aleatoria(número entre 0 y 10) y añadirla a su listado de notas.*/
addGrades = (studentsArray) => {
  for (let index = 0; index < studentsArray.length; index++) {
    studentsArray[index].examScores.push(Math.floor(Math.random() * 11))
  };
  return studentsArray
}

/*15 Ordenar el array de alumnos alfabéticamente según su nombre. */

students.sort((itemA, itemB) => itemA.name.toLowerCase().localeCompare(itemB.name.toLowerCase()))

