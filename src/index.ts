/* Ejercicios de Repaso
Ejercicio – Personas en una Disco

• Para tener control de la gente que hay en una disco el gerente quiere
saber cuantas personas de diferentes edades han entrado.
• No se han permitido la entrada a menores de 18 ni mayores de 40.
Para la carga de los datos se usa la función aleatorio (use la función
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
• Se sabe que la cantidad total de personas dentro del local es de 270
• Se quiere saber:
• Cuántas personas son menores de 21 años
• Cuántas personas mayores o igual a 21 años
• Cuántas personas en total */

function aleatorio(menorValor: number, mayorValor: number): number {
  return Math.floor(Math.random() * (mayorValor - menorValor) + menorValor);
}
function edades(personas: number[], parametroDeComparacion: number) {
  let mayores: number = 0;
  for (let i = 0; i < personas.length; i++) {
    if (personas[i] >= parametroDeComparacion) {
      mayores = mayores + 1;
    }
  }
  console.log(
    `hay\n ${
      personas.length - mayores
    } personas menores a 21 años ,\n ${mayores} personas mayores a  21  años \n y un total de ${
      personas.length
    } personas.`
  );
}
let totalDePersonas: number = 270;

let arrayEdades: number[] = new Array(totalDePersonas);
for (let i = 0; i < totalDePersonas; i++) {
  arrayEdades[i] = aleatorio(19, 40);
}
console.log(arrayEdades.length);
edades(arrayEdades, 21);
