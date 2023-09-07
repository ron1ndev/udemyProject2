/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Исходные данные по элементам со страницы

// Блок с рекламой
const promoAdv = document.querySelector('.promo__adv'),
    promoAdvImg = promoAdv.querySelectorAll('img');
// Заголовок жанра
const promoGenre = document.querySelector('.promo__genre');
// Див с фоном баннера
const promoBg = document.querySelector('.promo__bg');
// Элементы списка фильмов
const promoInteractiveItem = document.querySelectorAll('.promo__interactive-item');

const promoList = document.querySelector('.promo__interactive-list');


// Удаление всех картинок с рекламой
promoAdvImg.forEach(item => item.remove());

// Изменение заголовка с жанром
promoGenre.textContent = 'Драма';

// Изменение фона баннера
promoBg.style.background = "url('../img/bg.jpg')";

// Сортирование массива по алфавиту
let sortMovies = movieDB.movies.sort()

// Изменение текста в пунктах списка на названия из массива фильмов
// promoInteractiveItem.forEach((item, index) => {
//     item.textContent = `${index + 1}) ${sortMovies[index]}`
// })


promoList.innerHTML = ''


const li = document.createElement('li')
li.innerHTML = '1'

sortMovies.forEach((item, index) => {

    promoList.innerHTML += `
    <li class="promo__interactive-item">${index + 1}) ${item}<div class="delete"></div></li>
    `

})










