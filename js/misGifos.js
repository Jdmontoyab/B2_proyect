let clearGifos = () => {
    //location.reload();
    document.getElementById('inspirate').innerHTML = '';
    let container = document.getElementById('inspirate');
    container.classList.remove('crearGifos');
    changeIcon();
    misGifos(container);
}

const misGifos = (container) => {
    console.log(container);

    container.insertAdjacentHTML('beforeend',
    `<img id="logoMis" src="./assets/icons/icon-mis-gifos.svg"></img>
    <h2 id="titleMis">Mis GIFOS</h2>
    <img id="logoSin" src="./assets/icons/icon-mis-gifos-sin-contenido.svg"></img>
    <h2 id="titleAni">¡Animate a crear tu primer GIFO!</h2>`);
}

/* out.insertAdjacentHTML('beforeend',
        `<div id="gif" class="gif">
            <a href="javascript:showFull('${gif.images.preview_gif.url}','${gif.username}','${gif.title}')"><img id="response" src="${gif.images.preview_gif.url}" alt="${gif.title}"></a>
            
        </div>`); */

