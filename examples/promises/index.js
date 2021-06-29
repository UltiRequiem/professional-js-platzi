const API_KEY = 'b89fc45c2067cbd33560270639722eae';

const getMovie = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return response.json();
};

const getPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`
  );
  return (await response.json()).results;
};

const getTopMoviesIds = async (n = 3) => {
  const popularMovies = await getPopularMovies();
  return popularMovies.slice(0, n).map((movie) => movie.id);
};

const renderMovies = (movies) => {
  const movieList = document.getElementById('movies');
  movieList.innerHTML = '';

  movies.forEach((movie) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w342${movie.poster_path}" />
            <h5>${movie.title}</h5>
            <p>Released on <em>${movie.release_date}</em></p>
            `;

    movieList.appendChild(listItem);
  });
};

const getTopMoviesInSequence = async () => {
  const ids = await getTopMoviesIds();
  const movies = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const id of ids) {
    // eslint-disable-next-line no-await-in-loop
    const movie = await getMovie(id);
    movies.push(movie);
  }

  return movies;
};

const getTopMoviesInParallel = async () => {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovie(id));

  return Promise.all(moviePromises);
};

const getFastestTopMovie = async () => {
  const ids = await getTopMoviesIds();
  const moviePromises = ids.map((id) => getMovie(id));

  return Promise.race(moviePromises);
};

document.getElementById('sequence').onclick = async () => {
  const movies = await getTopMoviesInSequence();
  renderMovies(movies);
};

document.getElementById('parallel').onclick = async () => {
  const movies = await getTopMoviesInParallel();
  renderMovies(movies);
};

document.getElementById('fastest').onclick = async () => {
  const movie = await getFastestTopMovie();
  renderMovies([movie]);
};
