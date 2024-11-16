export function calculateTotalCalories() {
	const protein = parseFloat(document.getElementById('proteinInput')?.value) || 0;
	const fats = parseFloat(document.getElementById('fatsInput')?.value) || 0;
	const carbs = parseFloat(document.getElementById('carbsInput')?.value) || 0;

	const totalCcal = (protein * 4) + (fats * 9) + (carbs * 4);

	const totalCcalElement = document.getElementById('totalCcal');
	if (totalCcalElement) {
		 totalCcalElement.textContent = totalCcal + ' ккал';
	}

	return totalCcal;
}

export function saveProductToServer(date, protein, carbs, fats, ccal) {
	const productData = { date, protein, carbs, fats, ccal };
	localStorage.setItem('productData', JSON.stringify(productData));

	fetch('https://6725230fc39fedae05b40910.mockapi.io/fat_Alien/settingsccal', {
		 method: 'POST',
		 headers: { 'Content-Type': 'application/json' },
		 body: JSON.stringify(productData),
	})
	.then(response => response.json())
	.then(data => console.log('Данные успешно сохранены:', data))
	.catch(error => console.error('Ошибка при сохранении:', error));
}
