// Получение данных о продукте
// Создание объекта продукта
// Получение и обновление данных в localStorage



function addProduct() {
	const productName = document.getElementById("productName").textContent; // Название продукта
	const protein = document.getElementById("protein").textContent; // Белки
	const fats = document.getElementById("fats").textContent; // Жиры
	const carbs = document.getElementById("carbs").textContent; // Углеводы
	const ccal = document.getElementById("ccal").textContent; // Калории

	// Создаем объект с данными продукта
	const product = {
		  name: productName,
		  protein: protein,
		  fats: fats,
		  carbs: carbs,
		  ccal: ccal
	};

	// Получаем текущие данные из localStorage или создаем новый массив
	let products = JSON.parse(localStorage.getItem('products')) || [];

	// Добавляем новый продукт в массив
	products.push(product);

	// Сохраняем обновленный массив в localStorage
	localStorage.setItem('products', JSON.stringify(products));

	// Перенаправляем на страницу с отображением кнопок продуктов
	window.location.href = 'home.html'; // или другая страница, где отображаются кнопки
}

// Вызываем эту функцию при клике на кнопку "Добавить"
document.getElementById("addButton").addEventListener("click", addProduct);
