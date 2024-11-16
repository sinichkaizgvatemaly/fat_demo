// Функция для загрузки калорий из localStorage (для общей суммы)
function loadCaloriesFromLocalStorage() {
	const savedCcal = localStorage.getItem('totalCcal'); // Получаем сохранённое значение калорий из localStorage
	let totalCcal = 0;

	// Проверяем, если данные существуют
	if (savedCcal) {
		 totalCcal = parseFloat(savedCcal);
		 console.log("Загруженные данные из totalCcal:", totalCcal); // Логируем
	} else {
		 console.log('Нет данных в localStorage (totalCcal). Инициализируем значение по умолчанию (0).');
		 localStorage.setItem('totalCcal', '0'); // Устанавливаем значение по умолчанию
	}

	// Проверяем, является ли totalCcal числом, если нет - возвращаем 0
	return !isNaN(totalCcal) ? totalCcal : 0;
}

// Функция для загрузки данных о продукте (productData)
function loadProductFromLocalStorage() {
	const savedData = localStorage.getItem('productData');
	let productData = null;

	if (savedData) {
		 try {
			  productData = JSON.parse(savedData);
			  console.log("Загруженные данные из productData:", productData); // Логируем
		 } catch (e) {
			  console.error('Ошибка при парсинге productData:', e); // Логируем ошибку
			  productData = { ccal: 0 }; // Устанавливаем значение по умолчанию
		 }
	} else {
		 console.log('Данные не найдены в localStorage (productData). Инициализируем значение по умолчанию.');
		 localStorage.setItem('productData', JSON.stringify({ ccal: 0 })); // Устанавливаем значение по умолчанию
		 productData = { ccal: 0 };
	}

	// Возвращаем количество калорий из productData или 0, если данных нет или ошибка
	return productData && !isNaN(productData.ccal) ? productData.ccal : 0;
}

// Функция для подсчета общей суммы калорий
function updateTotalCalories() {
	const calorieElements = document.querySelectorAll('.info-output'); // Получаем все элементы с классом .info-output
	let totalCalories = 0;

	// Суммируем значения калорий
	calorieElements.forEach(element => {
		 const calorieValue = parseFloat(element.textContent);
		 if (!isNaN(calorieValue)) {
			  totalCalories += calorieValue;
		 }
	});

	// Сохраняем результат в localStorage
	localStorage.setItem('totalCcal', totalCalories.toFixed(1));

	// Обновляем текст в элементе с id "totalCalories"
	const totalCaloriesElement = document.getElementById('totalCalories');
	if (totalCaloriesElement) {
		 totalCaloriesElement.textContent = `${totalCalories.toFixed(1)} ккал`;
	} else {
		 console.warn('Элемент с id "totalCalories" не найден.');
	}
}

// Использование MutationObserver для автоматического обновления калорий
const mutationObserver = new MutationObserver(function() {
	updateTotalCalories(); // Обновляем только общую сумму калорий
	// Убрали вызов calculateCaloriesPercentage
});

// Конфигурация для наблюдения: отслеживаем изменения в DOM
mutationObserver.observe(document.body, {
	childList: true,
	subtree: true,
	characterData: true
});

// Загружаем данные и обновляем калории при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
	updateTotalCalories(); // Обновляем общую сумму калорий
	// Убрали вызов calculateCaloriesPercentage
});
