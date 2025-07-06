'use strict'
const numberOfFilms = +prompt("Скільки фільмів подивилися?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if(personalMovieDB.count < 10) {
    alert("Подивились дуже мало фільмів");
}else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert("Ви классичний глядач");
}else if(personalMovieDB.count >= 30){
    alert("Ви кіноман!");
}else{
    alert("Помилка");
}

// for(let i = 0; i < 2; i++){
//     const lastFilm = prompt("Який останній фільм дивилися?", '');
//     if (lastFilm.length == 0 || lastFilm.length > 50 || lastFilm == null) {
//         i--;
//     }else{
//         const filmMark = +prompt("Яку оцінку йому поставите?", '');
//         personalMovieDB.movies[lastFilm] = filmMark;
//     }   
// }

let i = 0;
do {
    const lastFilm = prompt("Який останній фільм дивилися?", '');
    if (lastFilm.length == 0 || lastFilm.length > 50 || lastFilm == null) {
        i--;
    }else{
        i++;
        const filmMark = +prompt("Яку оцінку йому поставите?", '');
        personalMovieDB.movies[lastFilm] = filmMark;
    }   
}while (i < 2)

console.log(personalMovieDB);

