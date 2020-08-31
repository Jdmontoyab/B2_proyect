const API_KEY = 'q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs';

let url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`;

async function getGifsInit(url) {
    let response = await fetch(url);
    let gifs = await response.json();
    return gifs;
}

getGifsInit(url).then((gifsData) => {
    console.log(gifsData);
    gifsData.data.forEach(gifData => {
        showInit(gifData);
    });
});

let out = document.getElementById('galery'); // Obtener el contenedor de los gifs //

let showInit = (gifData) => {
    //console.log(out);
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
}

// Versión Full //

function showFull (url, user, title) {
    //console.log(url);
    let fullOver = document.getElementById('fOver');
    let fullImg = document.getElementById('fullImg');
    let fullUser = document.getElementById('pOne');
    let fullTitle = document.getElementById('pTwo');
    //console.log(fullImg);
    fullOver.style.display = 'flex';
    fullImg.src = url;
    fullUser.textContent = user;
    fullTitle.textContent = title;
}

// Cambio de tema //

let mode = document.getElementById('mode');

function switchTheme() {
    if (document.theme === 'dark') {
        mode.textContent = 'Modo Nocturno';
        replaceClass('dark', 'light');
    } else {
        mode.textContent = 'Modo Diurno';
        replaceClass('light', 'dark');
    }
    changeIcon();
}

function replaceClass(oldClass, newClass) {
    document.theme = newClass;
    var elements = document.getElementsByClassName(oldClass);
    while (elements.length > 0) {
        elements[0].classList.replace(oldClass, newClass);
    }
}

// Menú desplegable //

let icon = document.getElementById('burger');
icon.addEventListener("click", changeIcon);

let i = 1;

function changeIcon() {
    if (i == 1) {
        icon.src = "./assets/icons/close.svg";
        icon.alt = 'close';
        let menu = document.getElementById('menu');
        menu.style.display = 'block';
        i = 0;
    } else {
        i = 1;
        icon.src = "./assets/icons/burger.svg";
        icon.alt = 'burger';
        let menu = document.getElementById('menu');
        menu.style.display = 'none';
    }
};