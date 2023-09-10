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


////////////////////////////////////////////////////////////////////////
// Forma

const form = document.querySelector('.add');
const inputAdd = document.querySelector('.adding__input');
const yes = document.getElementById('rules');
const buttonForm = form.querySelector('button');




// Удаление всех картинок с рекламой


const deleteAdb = (arr) => {
    arr.forEach(item => item.remove());
}
deleteAdb(promoAdvImg)

// Изменение заголовка с жанром
promoGenre.textContent = 'Драма';

// Изменение фона баннера
promoBg.style.background = "url('../img/bg.jpg')";



// Сортирование массива по алфавиту

function movieSort() {
    movieDB.movies.sort()
}

// Создание листа фильмов
function createMovieLst(films, parent) {
    promoList.innerHTML = ''
    movieSort()
    films.forEach((item, index) => {

        parent.innerHTML += `
        <li class="promo__interactive-item">${index + 1}) ${item}<div class="delete"></div></li>
        `

    })
    const deleteItem = document.querySelectorAll('.delete');
    deleteItem.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1)
            createMovieLst(movieDB.movies, promoList)
        })
    })
}


buttonForm.addEventListener('click', (e) => {
    e.preventDefault();

    if (!inputAdd.value == '') {

        if (inputAdd.value.length > 21) {
            movieDB.movies.push(`${inputAdd.value.slice(0, 21)}...`)

        } else {
            movieDB.movies.push(inputAdd.value)

        }
        movieSort()
        createMovieLst(movieDB.movies, promoList)
    }


    if (yes.checked === true) {
        console.log('Добавляем любимый фильм')
    }

    inputAdd.value = ''
    console.log(movieDB.movies)

})

createMovieLst(movieDB.movies, promoList)
