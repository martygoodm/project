"use strict";

const personalMovieDB = { 
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
            while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');       
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
            alert('Вы на среднем уровне');
        } else if (personalMovieDB.count > 30) {
            alert('Киноман');
        } else {
            alert('Ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true; 
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre ==='' || genre == null){
                alert('Вы ввели некорректно');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }

        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    } 
}; 

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30 ) {
//         alert('Вы на среднем уровне');
//     } else if (personalMovieDB.count > 30) {
//         alert('Киноман');
//     } else {
//         alert('Ошибка');
//     }
// }

// detectPersonalLevel();

// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Какой фильм вы смотрели последним?', ''),
//               b = prompt('Какую оценку можете дать ему?', '5');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('correct');
//         } else {
//             console.log('error');
//             i--;
//         }   
        
//     }
// }

// rememberMyFilms();

// function showMyDB (hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);