import "./style.css";

// const jsonData =
//   '{"title": "My favorite Movies", "movies": [{"title": " The Shawshank Redemption", "year": 1994, "director": "Frank Daranbont"},{"title": " The Godfather","year": 1972, "director": "Francis Ford Coppola"},{"title": "The Dark Knight", "year": 2008, "director": "Christopher Nolan"}]}';

// const movieData = JSON.parse(jsonData);

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

// console.log(1);
// console.log(2);
// console.log(3);

// function fetcAllFacebookUsersData() {
//   setTimeout(function () {
//     console.log("fetching weather");
//   }, 5000);
// }

// fetcAllFacebookUsersData();

// console.log(4);
// console.log(5);

// function countToTen() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// console.log("Start Counting");
// countToTen();
// console.log("End Counting");

// console.log(1);
// console.log(2);

// function sayHello() {
//   console.log("hello");
// }

// setTimeout(sayHello, 3000);

// console.log(4);

// function getQuote() {
//   return new Promise((resolve, reject) => {
//     fetch("https://api.quotable.io/quotes/random")
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// getQuote()
//   .then((data) => {
//     document.body.innerHTML = `<h1>${data[0].author}</h1>
//     <p>${data[0].content}</p>`;
//   })
//   .catch((error) => console.error(error));

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// }

// fetchData()
//   .then((data) => {
//     document.body.innerHTML = `<h1>${data.title}</h1>
//    <p>${data.body}</p>`;
//   })
//   .catch((error) => console.error(error));

console.log(1);
console.log(2);
console.log(3);

async function fetchQuote() {
  try {
    const response = await fetch("https://api.quotable.io/quotes/random");
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

fetchQuote()
  .then((data) => console.log(data[0]))
  .catch((error) => console.error(error));

console.log(4);
console.log(5);
