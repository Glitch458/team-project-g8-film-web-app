import movieList from '../templates/movie-list.hbs'
// ["438631","522402","580489"]

const bodyEl = document.querySelector('body')
console.log(bodyEl)

let arr = [438631]
localStorage.setItem('watched', JSON.stringify(arr));

function fetchMoviesFromStorage(movieId) {
    // https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
    const base_url = `https://api.themoviedb.org/3/`;
    let end_point = `movie/`
    const API_KEY = `?api_key=744d4295a955a17cccf78658c430f199`;
    let query_params = `${movieId}`;
    let language_param = `&language=en-US`
    const url = base_url + end_point + query_params + API_KEY + language_param ;
  
    fetch(url)
        .then((result) => {
            // if (result.status === 404) {
            //     const myError = error({
            //         title: '404',
            //         text: 'Not Found.',
            //         stack: myStack,
            //     });
            // }
            console.log("result", result)
            return result.json()
        })
        .then((data) => {
            bodyEl.innerHTML = '';
            let movieMarkup = movieList(data);
            bodyEl.insertAdjacentHTML('beforeend', movieMarkup)           
            console.log(data)
            console.log(movieMarkup)
            return data
        })
        .catch((error) => {
            console.log('err', error)           

        })
    
    }

const getMoviesFromStorage = function (array) {
    const saved = JSON.parse(localStorage.getItem(('watched')));
    for (let id of array) {        
        console.log(id)
        
        // return fetchMoviesFromStorage(id)
    }
};

getMoviesFromStorage(arr)
