/**
* Мы передаем строку и должны заменить любую z или v вне зависимости от регистра
* на символ звездочки *
* @param {string} string
* @returns {string}
*/
export const replaceZAndVFromString = (string) => {
	let result = '';
	for ( let i = 0; i < string.length; i++) {
		if ( string[i].toLowerCase() === 'z' || string[i].toLowerCase() === 'v' ) {
			result += '*';
		}
		else {
			result += string[i];
		}
	}
	return result;
};

/**
* Функция должна принять 3 аргумента и все строки. Мы передаем строку,
* вторая строка это искомое слово, третья это то слово, на которое мы должны
* заменить. Смотрите использование в файле check.js рядом. Должно вернуть строку
* 1 аргумента с замененным словом(2 аргумент) на слово(3 аргумент)
* @param {string} string
* @param {string} word
* @param {string} newWord
* @returns {string}
*/
export const changeWord = (string, word, newWord) => {
	return string.replace(word, newWord)
};

/**
* Должна вернуть строку(1 аргумент) на обрезанную по длине(2 аргумент, число)
* @param {string} string
* @param {number} length
* @returns {string}
*/
export const truncate = (string, length) => {
	return string.slice('', length);
};

/**
* Принимает строку в первом аргументе, и символ во втором
* И должно вернуть количество этих символов в этой строке
* Попробуйте реализовать просто через цикл for и с проверкой
* посимвольно. Кстати, проверка регистронезависимая. Если у нас
* строка 'I am ivan' и хочу найти количество символов i то будет
* их 2, и если I то тоже 2
* @param {string} string
* @param {string} symbol
* @returns {number}
*/
export const quantityOfSymbols = (string, symbol) => {
	let wordCounter = 0;
	for (let i = 0; i < string.length; i++) {
		if ( string[i].toLowerCase() === symbol.toLowerCase()) {
			wordCounter++;
		}
	};
	return wordCounter;
};

/**
* Принимает строку в первом аргументе, и символ во втором
* И должно вернуть количество этих символов в этой строке
* Попробуйте реализовать через метод indexOf. Напомню, в
* нем есть второй аргумент, который говорит, от какой позиции
* делать поиск. Я хочу, чтобы вы сделали бесконечный цикл
* while и искали символы этим методом, и сделали break когда позиций
* больше нет. Так будет более оптимально, меньше проходов цикла.
* Кстати, проверка регистронезависимая. Если у нас
* строка 'I am ivan' и хочу найти количество символов i то будет
* их 2, и если I то тоже 2
* @param {string} string
* @param {string} symbol
* @returns {number}
*/
export const quantityOfSymbolsWithIndexOf = (string, symbol) => {
	string = string.toLowerCase();
	symbol = symbol.toLowerCase();
	let wordCounter = 0;
	let position = string.indexOf(symbol);
	while (true) {
		if (position === -1) {
			break
		};
		position = string.indexOf(symbol, position + 1);
		wordCounter++;
	};
	return wordCounter;
}
