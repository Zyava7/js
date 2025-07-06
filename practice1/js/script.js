'use strict'
const numberOfFilms = +prompt("Скільки фільмів подивилися?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm = prompt("Який останній фільм дивилися?", ''),
        filmMark = +prompt("Яку оцінку йому поставите?", ''),
        lastFilm2 = prompt("Який останній фільм дивилися?", ''),
        filmMark2 = +prompt("Яку оцінку йому поставите?", '');

personalMovieDB.movies[lastFilm] = filmMark;
personalMovieDB.movies[lastFilm2] = filmMark2;

console.log(personalMovieDB);

