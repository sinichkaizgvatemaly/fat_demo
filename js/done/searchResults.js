document.getElementById('searchBtn').addEventListener('click', function() {
	const searchResults = document.getElementById('searchResults');
	searchResults.style.display = 'block'; // Показываем при клике на кнопку
});

// При необходимости скрывать `searchResults` по клику на кнопку очистки
document.getElementById('clearBtn').addEventListener('click', function() {
	document.getElementById('searchInput').value = ''; // Очищаем поле ввода
	document.getElementById('searchResults').style.display = 'none'; // Скрываем результаты
});

// Закрытие `searchResults` при клике вне его зоны
document.addEventListener('click', function(event) {
	const searchResults = document.getElementById('searchResults');
	const searchContainer = document.querySelector('.search-container'); // Контейнер, внутри которого находится поиск

	// Проверяем, что клик был не по кнопке, не по полю ввода и не по результатам поиска
	if (!searchContainer.contains(event.target)) {
		 searchResults.style.display = 'none';
	}
});


