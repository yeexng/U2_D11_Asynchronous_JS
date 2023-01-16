const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c8036c3e18mshc001205e7d4da2ap1c7f63jsn3a5bd1406386",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const getAlbum = () => {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=pinkfloyd") //promise pending
    .then((rawAlbums) => rawAlbums.json()) //also promise
    .then((albums) => {
      renderAlbums(albums);
    })

    .catch((err) => renderError(err));
};

const renderAlbums = (fetchAlbums) => {
  let row = document.querySelector(".row");
  for (let i = 0; i < fetchAlbums.length; i++) {
    const singleAlbum = fetchAlbums[i];
    row.innerHTML += `
      
        <div class="col">
            <div class="card">
                <img src="${singleAlbum.album.cover}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${singleAlbum.title}</h5>
                    <p class="card-text">by ${singleAlbum.artist.name}</p>
                </div>
            </div>
        </div>`;
  }
  console.log(row);
};

const renderError = (error) => {
  let container = document.querySelector(".container");
  container.innerHTML = `<div class="alert alert-danger" role="alert">
    ${error}
  </div>`;
};

getAlbum();
