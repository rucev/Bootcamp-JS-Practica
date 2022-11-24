import readline from "readline"; 
import  { optionsAvailable } from "./options-menu.js";

/*
Ejecución del programa y del menu
*/

const showMenu = () => {
  console.log("\nOpciones\n");
  for (let index = 1; index < optionsAvailable.length; index++) {
    console.log(
      "\t" +
        optionsAvailable[index].id +
        "\t" +
        optionsAvailable[index].description
    );
  }
};

const question = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  showMenu();
  rl.question(
    "\nElige el número de la opción qué quieres hacer\n\t",
    (option) => {
      option = parseInt(option);
      if (option > 0 && option < optionsAvailable.length) {
        optionsAvailable[option].function();
      } else {
        optionsAvailable[0].function();
      }
      rl.close();
      question();
    }
  );
};

question();
