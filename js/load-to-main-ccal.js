// Функция для загрузки данных из localStorage при загрузке страницы
function loadProductFromLocalStorage() {
	const savedData = localStorage.getItem('productData');
	if (savedData) {
		 const productData = JSON.parse(savedData);
		 // Обновляем элементы на странице
		 document.getElementById('totalCcal').textContent = productData.ccal + ' ккал';
	} else {
		 console.log('Данные не найдены в localStorage.');
	}
}

// Загружаем данные при загрузке страницы home.html
document.addEventListener('DOMContentLoaded', function() {
	loadProductFromLocalStorage();
});

