// Código para ejecutar el carousel

window.addEventListener('load', function() {
    new Glider(document.getElementById('lista'), {
        slidestoShow: 1,
        slidesToScroll: 1,
        draggable: true,
        arrows: {
            prev: '.anterior',
            next: '.siguiente'
        }
    });
});

// Cambio de tema

function switchTheme() {
    if (document.theme === 'dark') {
        //let mode = document.getElementById('mode');
        //mode.textContent = 'Modo Nocturno';
        replaceClass('dark', 'light');
    } else {
        //let mode = document.getElementById('mode');
        //mode.textContent = 'Modo Diurno';
        replaceClass('light', 'dark');
    }

    //let menu = document.getElementById('menu');
    //menu.style.display = 'none';
    //changeIcon();
}

function replaceClass(oldClass, newClass) {
    document.theme = newClass;
    var elements = document.getElementsByClassName(oldClass);
    while (elements.length > 0) {
        elements[0].classList.replace(oldClass, newClass);
    }
}

// Menú desplegable

let icon = document.getElementById('burger');
icon.addEventListener("click", changeIcon);

let i = 1;

function changeIcon() {
    if (i == 1) {
        icon.src = "./assets/icons/close.svg";
        icon.alt = 'close';
        let menu = document.getElementById('menu');
        menu.classList.remove('on');
        menu.classList.add('menu');
        i = 0;
        menu.style.display = 'block';
    } else {
        i = 1;
        icon.src = "./assets/icons/burger.svg";
        icon.alt = 'burger';
        let menu = document.getElementById('menu');
        menu.classList.remove('menu');
        menu.classList.add('on');
        menu.style.display = 'none';
    }
};

// Conexión a API Giphy

/* let apiKey = 'q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs';

let url1 = 'https://api.giphy.com/v1/gifs/search?api_key=q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs&limit=1&q=cats';
let url2 = 'https://api.giphy.com/v1/gifs/search?api_key=q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs&limit=1&q=glblctzn-one-world';
let url3 = 'https://api.giphy.com/v1/gifs/search?api_key=q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs&limit=1&q=glblctzn-global-citizen-one-world-together-at-home-f8t7FaLXN9RAcaANFn';

let gif1 = fetch(url1).then(res => res.json());
let gif2 = fetch(url2).then(res => res.json());
let gif3 = fetch(url3).then(res => res.json());

Promise.all([gif1, gif2, gif3]).then(gifs => {
    console.log(gifs);
    gifs.forEach(gif => {
        createHtml(gif)
    })
}).catch(error => console.log(error)); */

// Manejo de Gifs

/* let createHtml = gif => {
    //let out = document.getElementById('lista');
    let out = document.getElementsByClassName('glider-track')[0];

    out.insertAdjacentHTML('beforeend',
    `<div id="gif" class="gif">
        <a onclick="#" style="cursor:pointer" title="Agregar a favorito"><img src="${gif.data[0].images.downsized.url}" alt="${gif.data[0].title}"></a>
        
    </div>`);
} */

{/* <div class="over">
    <div class="buttonGif">
        <img id="fav" class="icon" src='./assets/icons/icon-fav-hover.svg'>
        <img id="dow" class="icon" src='./assets/icons/icon-download.svg'>
        <img id="ful" class="icon" src='./assets/icons/icon-max.svg'>
    </div>
    <div class="infoGif">
        <p id="user">${gif.data[0].user.username}</p>
        <p id="title">${gif.data[0].title}</p>
    </div>
</div> */}