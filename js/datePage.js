// Получаем параметры из URL
function getQueryParams() {
	const params = new URLSearchParams(window.location.search);
	const date = params.get("date");
	return date;
}

// Обновляем содержимое страницы на основе даты
function updateDateInfo(date) {
	const dateTitle = document.getElementById("dateTitle");
	const dateInfo = document.getElementById("dateInfo");

	if (date) {
		 dateTitle.textContent = `История: ${date}`;
		dateInfo.textContent = `Здесь вы можете добавить подробную информацию о выбранной дате: 
		 
		
		
		
		
		${date}.`;
	} else {
		 dateTitle.textContent = "Дата не указана";
		 dateInfo.textContent = "Пожалуйста, выберите дату в календаре.";
	}
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
	const date = getQueryParams();
	updateDateInfo(date);
});
