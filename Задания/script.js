"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');       
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
}; 

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
        alert('Вы на среднем уровне');
    } else if (personalMovieDB.count > 30) {
        alert('Киноман');
    } else {
        alert('Ошибка');
    }
}

// detectPersonalLevel();

function rememberMyFilms () {
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
}

// rememberMyFilms();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// showMyDB(personalMovieDB.privat);

console.log(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres ();