

/*
Exercice 1
*/
console.log(`---------------  Exercice 1 --------------`);
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1- Supprimez Banana de la baie
console.log(fruits.shift("Banana"));

// 2- Triez le tableau par ordre alphabétique.
console.log(fruits.sort());

// 3- SAjoutez "Kiwi" à la fin du tableau.
console.log(fruits.push("Kiwi"));

// 4- Supprimez "Apples" du tableau. N'utilisez pas la même méthode que dans la partie 1.
console.log(fruits.splice(1, 1));

// 5- Triez le tableau dans l'ordre inverse. (Pas alphabétique, mais inversez le tableau actuel, c'est-à-dire que ['a', 'c', 'b'] devient ['b', 'c', 'a'])
console.log(fruits.reverse());
console.log(fruits);



/*
Exercice 2
*/
console.log(`---------------  Exercice 2 --------------`);

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

// 1- Accédez puis console.log « Oranges ».
console.log(moreFruits[1][1]);



