export default function PopularList() {
    const KEY = '744d4295a955a17cccf78658c430f199';
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${KEY}`)
}
