import "./style.css";

const jsonData =
  '{"title": "My favorite Movies", "movies": [{"title": " The Shawshank Redemption", "year": 1994, "director": "Frank Daranbont"},{"title": " The Godfather","year": 1972, "director": "Francis Ford Coppola"},{"title": "The Dark Knight", "year": 2008, "director": "Christopher Nolan"}]}';

const movieData = JSON.parse(jsonData);

// document.body.innerHTML = `<h1>${movieData.title}</h1>
// <h2>Movies</h2>

// <article>${movieData.movies[0].title},
// <p>${movieData.movies[0].year}</p>
// <p>${movieData.movies[0].director}</p>
// </article>

// <article>${movieData.movies[1].title},
// <p>${movieData.movies[1].year}</p>
// <p>${movieData.movies[1].director}</p>
// </article>

// <article>${movieData.movies[2].title},
// <p>${movieData.movies[2].year}</p>
// <p>${movieData.movies[2].director}</p>
// </article>`;

// const title = document.createElement("h1");
// title.textContent = movieData.title;
// const app = document.getElementById("app");

// app.appendChild(title);

// movieData.movies.forEach((movie) => {
//   const movieContainer = document.createElement("div");
//   movieContainer.classList.add("movie-Container");

//   const h2 = document.createElement("h2");
//   h2.textContent = movie.title;

//   const h3 = document.createElement("h3");
//   h3.textContent = movie.year;

//   const p = document.createElement("p");
//   p.textContent = movie.director;

//   movieContainer.append(h2, h3, p);
//   app.appendChild(movieContainer);
// });

console.log(1);
console.log(2);
console.log(3);

function fetchWeather() {
  console.log("fetching weather");
}

fetchWeather();

console.log(4);
console.log(5);
