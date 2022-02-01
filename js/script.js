"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '1');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой фильм вы смотрели последним?', ''),
      b = prompt('Какую оценку можете дать ему?', '5'),
      c = prompt('Какой фильм вы смотрели последним?', ''),
      d = prompt('Какую оценку можете дать ему?', '5'); 

personalMovieDB.movies[a] = b;
personalMovieDB.movies[d] = c; 
