// Limpiar sección favoritos //

let prueba = document.getElementById('inspirate');

let clearFav = () => {
    //location.reload();
    if (storage.getIdsFavoritos() == "") {
        document.getElementById('inspirate').innerHTML = '';
        //container.classList.remove('crearGifos');
        changeIcon();
        sinFavoritos(prueba);
        flag = true;
        //getFavorites(allGifs);
    } else {
        document.getElementById('inspirate').innerHTML = '';
        changeIcon();
        conFavoritos(prueba);
        //document.getElementById('results').innerHTML = '';
        let container = document.getElementById('results');
        //container.classList.add('results');
        giphy.getGifsPorIds(storage.getIdsFavoritos()).then((gifsData) => {
            console.log(gifsData);//TODO: eliminar
            if(gifsData!=null)
            gifsData.forEach(gifData => {
                let nGif = new Gif(gifData.title, gifData.username, gifData.images.preview_gif.url, false, gifData.id);
                showInit(nGif, container);
            });
        });
    }
}

const sinFavoritos = (container) => {
    container.insertAdjacentHTML('beforeend',
    `<img id="logoMis" src="./assets/icons/icon-favoritos.svg"></img>
    <h2 id="titleMis">Favoritos</h2>
    <div id="results">
        <img id="logoSin" src="./assets/icons/icon-fav-sin-contenido.svg"></img>
        <h2 id="titleAni">"¡Guarda tu primer GIFO en Favoritos <br> para que se muestre aquí!"</h2>
    </div>`);
}

const conFavoritos = (container) => {
    container.insertAdjacentHTML('beforeend',
    `<img id="logoMis" src="./assets/icons/icon-favoritos.svg"></img>
    <h2 id="titleMis">Favoritos</h2>
    <div id="results" class="results"></div>`);
}

//#########Globales###########//
//let favoritos = document.getElementById("inspirate");
//let giphy = new Giphy();
//let storage = new MiStorage();


let showFav = function(gif){
    let contenedor = document.getElementById("results");
    let img = document.createElement("img");
    img.src=gif.url;
    img.id=gif.id;
    contenedor.appendChild(img);
}

let obtenerObjectEnStorage = function () {
    let gifs = giphy.getGifObjects();
    //console.log(gifs);
    //showFav(gif);
}
obtenerObjectEnStorage();






