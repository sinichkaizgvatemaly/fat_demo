// // Получаем элементы календаря
// скрипт готов





const calendarDaysContainer = document.getElementById("calendarDays");
const prevMonthBtn = document.getElementById("prevMonthBtn");
const nextMonthBtn = document.getElementById("nextMonthBtn");
const monthName = document.getElementById("monthName");
const yearSelect = document.getElementById("yearSelect");
const returnTodayBtn = document.getElementById("returnToday");

// Получаем текущую дату
const today = new Date();
let currentMonth = today.getMonth(); // Текущий месяц (0-11)
let currentYear = today.getFullYear(); // Текущий год
let currentDay = today.getDate(); // Текущий день

// Заполняем выпадающий список годов
function populateYearSelect() {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear - 5; i <= currentYear + 5; i++) {
        years.push(i);
    }

    years.forEach(year => {
        const option = document.createElement("option");
        option.value = year;
        option.textContent = year;
        if (year === currentYear) {
            option.selected = true;
        }
        yearSelect.appendChild(option);
    });
}

// Функция для отображения календаря на основе месяца и года
function renderCalendar(month, year) {
    const firstDayOfMonth = new Date(year, month, 1); // Первый день месяца
    const lastDayOfMonth = new Date(year, month + 1, 0); // Последний день месяца
    const daysInMonth = lastDayOfMonth.getDate(); // Количество дней в месяце

    // Обновляем название месяца и года
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    monthName.textContent = monthNames[month];

    // Очищаем контейнер с днями
    calendarDaysContainer.innerHTML = "";

    // Добавляем дни в календарь
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar__day");

        const dayButton = document.createElement("button");
        dayButton.textContent = i;
        dayButton.addEventListener("click", () => {
            window.location.href = `datePage.html?date=${year}-${month + 1}-${i}`;
        });

        // Проверяем, если это сегодняшний день, добавляем класс "today"
        if (i === currentDay && month === today.getMonth() && year === today.getFullYear()) {
            dayElement.classList.add("today");
        }

        dayElement.appendChild(dayButton);
        calendarDaysContainer.appendChild(dayElement);
    }
}

// Обработчики на кнопки перехода по месяцам
prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});

// Обработчик на кнопку "Сегодня"
returnTodayBtn.addEventListener("click", () => {
    currentMonth = today.getMonth();
    currentYear = today.getFullYear();
    renderCalendar(currentMonth, currentYear);
});

// Инициализация
populateYearSelect();
renderCalendar(currentMonth, currentYear);
