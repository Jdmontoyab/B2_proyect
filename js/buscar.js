// Buscar Gifs //

/* async function getGitSearch(input) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${result1}&q=${input}`;
    let response = await fetch(url);
    let gifs = await response.json();
    return gifs;
} */

let str = document.getElementById('search');
let groupRes = document.getElementById('group-results');
let title = document.getElementById('title');
let span = document.getElementById('span');
let results = document.getElementById('results');

let result1 = 12;

let search = () => {
    let input = str.value; //"teryteryrtu"; // //"Chavo";

    title.textContent = input;

    if (input === '') {
        console.log('Empty');
    } else {
        giphy.getGifsSearch(input).then((gifsData) => {
            console.log(gifsData);
            results.innerHTML = '';
            if (gifsData.length == 0) {
                console.log('Sin Resultados');
                title.style.display = 'block';
                span.style.display = 'block';
                notResults();
            } else {
                gifsData.forEach(gifData => {
                    let contenedor = document.getElementById("results");
                    contenedor.classList.add('results');
                    let gif = new Gif(gifData.title, gifData.username, gifData.images.preview_gif.url, false, gifData.id);
                    showInit(gif, contenedor);
                    title.style.display = 'block';
                    span.style.display = 'block';
                    see.style.display = 'block';
                });
            }
        });
    }
}

/*  let showSearch = gifData => {
    console.log(gifData);

    let out = document.getElementById('results');
    out.classList.add('results');
    out.style.height = 'unset';

    out.insertAdjacentHTML('beforeend',
    `<li class="item"><div id="gif" class="gif">
    <img id="full" src="${gifData.images.preview_gif.url}" alt="${gifData.title}">
    <div class="over" onclick="showFull('${gifData.images.preview_gif.url}','${gifData.username}','${gifData.title}')">
        <div class="buttonGif">
            <img id="fav" class="icon" src='./assets/icons/icon-fav-hover.svg'>
            <img id="dow" class="icon" src='./assets/icons/icon-download.svg'>
            <img id="ful" class="icon" src='./assets/icons/icon-max-normal.svg'>
        </div>
        <div class="infoGif">
            <p id="user">${gifData.username}</p>
            <p id="hover-title">${gifData.title}</p>
        </div>
    </div>
</div></li>`);

    let see = document.getElementById('see');
    see.style.display = 'block';
}  */

// Búsqueda sin resultados

let notResults = () => {
    //console.log(input);
    document.getElementById('results').innerHTML = '';
    let out = document.getElementById('results');
    out.classList.remove('results');

    out.insertAdjacentHTML('beforeend',
        `<div id="not" class="not">
            <img class="notResults" src="./assets/icons/icon-busqueda-sin-resultado.svg" alt="Not Results">
            <p id="notResults">Intenta con otra palabra</p>
        </div>`);

    see.style.display = 'none';
}

function close () {
    let fullOver = document.getElementById('fOver');
    fullOver.style.display = 'none';
}

function contVmas () {
    console.log('Ver más');
    result1 += 12;
	search();
}