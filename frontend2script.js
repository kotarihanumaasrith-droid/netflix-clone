const API_URL = "http://localhost:5000/api/movies";

async function loadMovies() {
  try {
    const res = await fetch(API_URL);
    const movies = await res.json();

    const container = document.getElementById("movies");

    movies.forEach(movie => {
      const div = document.createElement("div");
      div.classList.add("movie");

      div.innerHTML = `
        <img src="${movie.thumbnail}" />
        <p>${movie.title}</p>
      `;

      div.onclick = () => playMovie(movie.videoUrl);

      container.appendChild(div);
    });

  } catch (error) {
    console.error("Error loading movies:", error);
  }
}

function playMovie(url) {
  const player = document.getElementById("videoPlayer");
  const container = document.getElementById("player-container");

  player.src = url;
  container.style.display = "block";
}

loadMovies();
