// Buscar Gifs //

async function getGitSearch(input) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=${result1}&q=${input}`;
    let response = await fetch(url);
    let gifs = await response.json();
    return gifs;
}

let str = document.getElementById('search');
let results = document.getElementById('group-results');
let title = document.getElementById('title');
let span = document.getElementById('span');

result1 = 12;

let search = () => {
    document.getElementById('results').innerHTML = '';

    let input = str.value; //"teryteryrtu"; // //"Chavo";

    title.textContent = input;

    if (input === '') {
        console.log('Empty');
    } else {
        getGitSearch(input).then((gifsData) => {
            console.log(gifsData);
            console.log(gifsData.pagination.count);
            if (gifsData.pagination.count == 0) {
                console.log('Sin Resultados');
                title.style.display = 'block';
                span.style.display = 'block';
                notResults();
            } else {
                gifsData.data.forEach(gifData => {
                    showResults(gifData);
                    title.style.display = 'block';
                    span.style.display = 'block';
                });
            }
        });
    }
}

let showResults = gif => {
    console.log(gif);
    let out = document.getElementById('results');
    out.classList.add('results');
    out.style.height = 'unset';

    out.insertAdjacentHTML('beforeend',
        `<div id="gif" class="gif">
            <a href="javascript:showFull('${gif.images.preview_gif.url}','${gif.username}','${gif.title}')"><img id="response" src="${gif.images.preview_gif.url}" alt="${gif.title}"></a>
            
        </div>`);

    let see = document.getElementById('see');
    see.style.display = 'block';
}

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