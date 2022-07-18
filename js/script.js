'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const divWithAdd = document.querySelectorAll('.promo__adv img'),
          genre = document.querySelector('.promo__genre'),
          background = document.querySelector('.promo__bg'),
          moviesList = document.querySelector('.promo__interactive-list'),
          movieInput = document.querySelector('.adding__input'),
          tick = document.querySelector('input[type=checkbox]'),
          formAdd = document.querySelector('form.add');
    
    const sortA = (arr) => {
        arr.sort();
    };

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
         
        let newMovie = movieInput.value;
        const favoriteM = tick.checked;

        if(newMovie) {
            if (newMovie.length > 21){
                newMovie = `${newMovie.substring(0, 22)}...`;
            } 
            if(favoriteM) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newMovie);
            sortA(movieDB.movies);
            webList(movieDB.movies, moviesList);
        }
        console.log(movieDB);
        event.target.reset();
    });
    // formAdd.addEventListener('submit', event => {                    Other way(mine)
    //     event.preventDefault();
    //     if (movieInput.value.length > 21){
    //         let a = movieInput.value.slice(0, 21);
    //         let b = a.concat('...');
    //         movieDB.movies.push(b);
    //     } else {
    //         movieDB.movies.push(movieInput.value);   
    //     }
    //     if (tick.checked) {
    //         console.log('Сделать любимым');
    //     }
    //     sortA(movieDB.movies);
    //     webList(movieDB.movies, moviesList);
    //     event.target.reset();
    // });
    const delAdd = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };
    const changes = function() {
        genre.textContent = 'драма';
        background.style.backgroundImage = "url('img/bg.jpg')";
    };

    const webList = function(film, parent) {       
        parent.innerHTML = '';
        sortA(film);
        film.forEach((e, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${e}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((e, i) => {
            e.addEventListener('click', () => {
                e.parentElement.remove();  
                movieDB.movies.splice(i, 1);
                webList(film, parent);
                console.log(e);
                console.log(movieDB.movies);

            });
        });
    };
    delAdd(divWithAdd);
    changes();
    webList(movieDB.movies, moviesList);
});

