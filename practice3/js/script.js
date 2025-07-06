'use strict'

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Скільки фільмів подивилися?", '');
    while(numberOfFilms == ''  || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("Скільки фільмів подивилися?", '');
    }
}
// start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const lastFilm = prompt("Який останній фільм дивилися?", '');
        if (lastFilm.length == 0 || lastFilm.length > 50 || lastFilm == null){
            i--;
        }else{
            const filmMark = +prompt("Яку оцінку йому поставите?", '');
            personalMovieDB.movies[lastFilm] = filmMark;
        }   
    }
}
// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10) {
        alert("Подивились дуже мало фільмів");
    }else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert("Ви класичний глядач");
    }else if(personalMovieDB.count >= 30){
        alert("Ви кіноман!");
    }else{
        alert("Помилка");
    }
}
// detectPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        // const favGenre = prompt(`Ваш улюбленний жанр # ${i}`, '');
        // personalMovieDB.genres[i - 1] = favGenre;

        personalMovieDB.genres[i - 1] = prompt(`Ваш улюбленний жанр # ${i}`, '');
    }
}

writeYourGenres();


 console.log(personalMovieDB);

