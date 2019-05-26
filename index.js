'use strict'

const values = document.getElementsByClassName('input-value');//узлы вводимых решений
let result = document.getElementById('result-value');//узел для вывода
result.innerText = "Waiting, friend..."

document.getElementById('add-button').addEventListener('click',(e) => {
  if(isCorrectNumber(values[0].value) && isCorrectNumber(values[1].value)) result.innerText = (+values[0].value) + (+values[1].value);//Вывод результата
  else result.innerText = "Not correct, friend";
});

document.getElementById('clean-button').addEventListener('click',(e) => {//очистка окна вывода
  result.innerText = "Waiting, friend..."
});

const isCorrectNumber = (value) => {//Проверка корректности ввода чисел
	if(isNaN(+value) || !value.length) return false;//является ли значение числом или наличие ввода
	return true;
};

