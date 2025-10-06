// Datos iniciales
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

// Función para mostrar resultados en la página
function displayResults(title, results) {
    const container = document.getElementById('results-container');
    const exerciseDiv = document.createElement('div');
    exerciseDiv.className = 'exercise';

    const titleElement = document.createElement('h3');
    titleElement.textContent = title;
    exerciseDiv.appendChild(titleElement);

    if (Array.isArray(results)) {
        results.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';

            if (typeof item === 'object') {
                resultItem.textContent = JSON.stringify(item);
            } else {
                resultItem.textContent = item;
            }

            exerciseDiv.appendChild(resultItem);
        });
    } else if (typeof results === 'object') {
        Object.keys(results).forEach(key => {
            const resultItem = document.createElement('div');
            resultItem.className = 'count-item';

            const keySpan = document.createElement('span');
            keySpan.textContent = key;

            const valueSpan = document.createElement('span');
            valueSpan.textContent = results[key];

            resultItem.appendChild(keySpan);
            resultItem.appendChild(valueSpan);
            exerciseDiv.appendChild(resultItem);
        });
    } else {
        const resultItem = document.createElement('div');
        resultItem.className = 'total';
        resultItem.textContent = results;
        exerciseDiv.appendChild(resultItem);
    }

    container.appendChild(exerciseDiv);
}

// Ejercicio 1: Filtrar inventores que nacieron en los 1500
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.log('1. Inventores que nacieron en los 1500:', fifteen);
displayResults('1. Inventores que nacieron en los 1500', fifteen);

// Ejercicio 2: Obtener arreglo de apellidos de inventores
const lastNames = inventors.map(inventor => inventor.last);
console.log('2. Apellidos de los inventores:', lastNames);
displayResults('2. Apellidos de los inventores', lastNames);

// Ejercicio 3: Ordenar inventores por fecha de nacimiento (más viejos primero)
const ordered = inventors.sort((a, b) => a.year - b.year);
console.log('3. Inventores ordenados por año de nacimiento:', ordered);
displayResults('3. Inventores ordenados por año de nacimiento', ordered);

// Ejercicio 4: Calcular años totales vividos por todos los inventores
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log('4. Años totales vividos por todos los inventores:', totalYears);
displayResults('4. Años totales vividos por todos los inventores', totalYears);

// Ejercicio 5: Ordenar inventores por años vividos (de mayor a menor)
const oldest = inventors.sort((a, b) => {
    const lastInventor = a.passed - a.year;
    const nextInventor = b.passed - b.year;
    return nextInventor - lastInventor;
});
console.log('5. Inventores ordenados por años vividos:', oldest);
displayResults('5. Inventores ordenados por años vividos', oldest);

// Ejercicio 6: Ordenar personas alfabéticamente por apellido
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log('6. Personas ordenadas alfabéticamente por apellido:', alpha);
displayResults('6. Personas ordenadas alfabéticamente por apellido', alpha);

// Ejercicio 7: Sumar instancias de cada medio de transporte
const transportation = data.reduce((obj, item) => {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});
console.log('7. Instancias de medios de transporte:', transportation);
displayResults('7. Instancias de medios de transporte', transportation);