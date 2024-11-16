// Функция для загрузки продуктов с localStorage
function loadProducts() {
	// Загружаем данные из localStorage
	const products = JSON.parse(localStorage.getItem('products')) || [];
 
	// Если в localStorage есть продукты
	if (products.length > 0) {
	  const productsContainer = document.querySelector('.products-container'); // Контейнер для продуктов
 
	  // Перебираем все продукты и создаем HTML-контент для каждого
	  products.forEach(product => {
		 // Создаем кнопку для каждого продукта
		 const productButton = document.createElement('button');
		 productButton.classList.add('product-button'); // Добавляем класс для стилей
 
		 // Вставляем информацию о продукте и кнопку для удаления
		 productButton.innerHTML = `
		 <span class="product-name">${product.name}</span> 
		 <div class="info-output">${product.ccal} ккал</div>
		 <button class="remove-btn">x</button>
	  `;
	  
 
		 // Добавляем обработчик на кнопку "x" для удаления продукта
		 const removeButton = productButton.querySelector('.remove-btn');
		 removeButton.addEventListener('click', (e) => {
			e.stopPropagation(); // Предотвращаем всплытие события
			removeProduct(product.name); // Удаляем продукт из localStorage
			productButton.remove(); // Удаляем кнопку продукта
		 });
 
		 // Обработчик для отображения информации о продукте при клике
		 productButton.onclick = () => showProductInfo(product.name, product.ccal);
 
		 // Добавляем кнопку в контейнер
		 productsContainer.appendChild(productButton);
	  });
	} else {
	  // Если продуктов нет, показываем сообщение
	  const productsContainer = document.querySelector('.products-container');
	  productsContainer.innerHTML = '<p>Пусто</p>';
	}
 }
 
 // Функция для отображения информации о продукте при клике
 function showProductInfo(name, ccal) {
	// Создаем URL для страницы с информацией о продукте
	const productUrl = `product.html?name=${encodeURIComponent(name)}&ccal=${encodeURIComponent(ccal)}`;
 
	// Переход на страницу с информацией о продукте
	window.location.href = productUrl;
 }
 
 // Функция для удаления продукта из localStorage
 function removeProduct(productName) {
	// Загружаем текущие продукты из localStorage
	let products = JSON.parse(localStorage.getItem('products')) || [];
 
	// Фильтруем продукт по имени, удаляя его из массива
	products = products.filter(product => product.name !== productName);
 
	// Обновляем localStorage
	localStorage.setItem('products', JSON.stringify(products));
 }
 
 // Функция для добавления продукта в localStorage
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
 
 // Загружаем продукты при загрузке страницы
 document.addEventListener('DOMContentLoaded', loadProducts);
 
 // Добавляем обработчик на кнопку "Добавить"
//  document.getElementById("addButton").addEventListener("click", addProduct);
 