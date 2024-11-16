function calculateTotalCalories() {
	// Получаем все элементы с классом .info-output
	const calorieElements = document.querySelectorAll('.info-output');
	let totalCalories = 0;

	// Проходим по каждому элементу и добавляем его калории в общую сумму
	calorieElements.forEach(element => {
	  const calories = parseInt(element.textContent.replace(' ккал', '').trim());
	  if (!isNaN(calories)) {
		 totalCalories += calories;
	  }
	});

	// Обновляем отображение общего количества калорий
	document.getElementById('totalCalories').textContent = `${totalCalories} ккал`;
 }

 // Обработчик события для кнопок удаления
 document.addEventListener('click', function(event) {
	// Если нажата кнопка "x", удаляем родительский элемент (кнопку продукта)
	if (event.target && event.target.classList.contains('remove-btn')) {
	  const productButton = event.target.closest('.product-button');
	  if (productButton) {
		 productButton.remove();
		 // После удаления пересчитываем калории
		 calculateTotalCalories();
	  }
	}
 });

 // Инициализация подсчета калорий при загрузке страницы
 calculateTotalCalories();