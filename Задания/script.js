"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
    alert('Вы на среднем уровне');
} else if (personalMovieDB.count > 30) {
    alert('Киноман');
} else {
    alert('Ошибка');
}

for (let i = 0; i < 2; i++) {
    const a = prompt('Какой фильм вы смотрели последним?', ''),
          b = prompt('Какую оценку можете дать ему?', '5');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('correct');
    } else {
        console.log('error');
        i--;
    }   
    
}

console.log(personalMovieDB);

