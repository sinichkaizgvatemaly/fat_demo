/**
 * Выполняет поиск по введенному запросу и отображает результаты.
 * Отправляет запрос на сервер с введенным пользователем текстом в поле поиска.
 * Если результаты найдены, они отображаются в виде списка. Если нет — показывается сообщение о том, что продукты не найдены.
 * добавляет в лист продуктов
 * закрывает окно поиска при клике вне окна
 */


function searchFood() {
	const query = document.getElementById('searchInput').value.toLowerCase(); // Получаем введенный текст
	const resultsContainer = document.getElementById('searchResults');

	if (query.length < 1) {
		 resultsContainer.innerHTML = ''; // Очищаем результаты, если поиск пустой
		 resultsContainer.style.display = 'none'; // Прячем подсказки
		 return;
	}

	// Отправляем запрос на сервер для поиска
	fetch(`https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/calories?name=${query}`)
		 .then(response => response.json()) // Преобразуем ответ в JSON
		 .then(data => {
			  resultsContainer.innerHTML = ''; // Очищаем предыдущие результаты

			  if (data.length > 0) {
					// Если результаты найдены, отображаем их
					data.forEach(product => {
						 const resultItem = document.createElement('div');
						 resultItem.classList.add('search-result-item');
						 resultItem.innerHTML = `
							  <a href="product.html?id=${product.id}">${product.name}</a>
						 `;
						 resultsContainer.appendChild(resultItem);
					});
					resultsContainer.style.display = 'block'; // Показываем подсказки
			  } else {
					// Если результатов нет, показываем сообщение
					resultsContainer.innerHTML = '<p>Продукты не найдены</p>';
					resultsContainer.style.display = 'block';
			  }
		 })
		 .catch(error => {
			  console.error('Ошибка при поиске:', error);
			  resultsContainer.innerHTML = '<p>Произошла ошибка при поиске.</p>';
			  resultsContainer.style.display = 'block';
		 });
}

// Привязка функции поиска к событию input (каждое изменение в поле)
document.getElementById('searchInput').addEventListener('input', searchFood);

// Закрытие результатов при клике вне области
document.addEventListener('click', function(event) {
	const resultsContainer = document.getElementById('searchResults');
	const searchInput = document.getElementById('searchInput');
	
	if (!resultsContainer.contains(event.target) && event.target !== searchInput) {
		 resultsContainer.style.display = 'none'; // Скрываем подсказки
	}
});




// Закрытие результатов при клике вне области
document.addEventListener('click', function(event) {
	const resultsContainer = document.getElementById('searchResults');
	const searchInput = document.getElementById('searchInput');
	
	if (!resultsContainer.contains(event.target) && event.target !== searchInput) {
		 resultsContainer.style.display = 'none'; // Скрываем подсказки
	}
});
