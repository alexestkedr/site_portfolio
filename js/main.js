function timer()
{
	// Находим элемент h1 в документе
	span = document.getElementsByTagName('span')[0];
	
	// Устанавливаем дату
	var date = new Date();
	
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	
	if (hours < 10) hours = "0" + hours;// Для удобства отображения
	if (minutes < 10) minutes = "0" + minutes;
	if (seconds < 10) seconds = "0" + seconds;
	
	span.innerHTML = hours + ":" + minutes + ":" + seconds;
	
	// Вызываем функцию раз в одну секунду
	setTimeout('timer()', 1000);
}

					// ЗАДАЧА 1	
/*					
var admin, name;// две переменных через запятую
name = 'Vasilij';
admin = name;
console.log(admin);
*/


