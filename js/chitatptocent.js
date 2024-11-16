import { calculateTotalCalories } from './done/save-to-server.result.js';
import { calculateCaloriesPercentage, updateTotalCalories } from './done/totalCcalFromFood.js';

document.addEventListener('DOMContentLoaded', function () {
    if (typeof calculateTotalCalories === 'function' && typeof updateTotalCalories === 'function') {
        const totalCalories = calculateTotalCalories();
        const totalUpdateCalories = updateTotalCalories();

        if (totalCalories !== 0) {
            const result = (totalCalories / totalUpdateCalories) * 100;
            console.log('Результат деления второй функции на первую: ', result);

            const percentageElement = document.getElementById('caloriesPercentage');
            if (percentageElement) {
                percentageElement.textContent = result.toFixed(2) + '%';
            } else {
                console.warn('Элемент с id "caloriesPercentage" не найден.');
            }
        } else {
            console.error('Ошибка: попытка деления на ноль.');
        }
    } else {
        console.error('Ошибка: одна или обе функции не были импортированы.');
    }
});

