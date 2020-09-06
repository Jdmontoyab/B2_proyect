//#########Globales###########//
//let contenedor = document.getElementById("results");
let giphy = new Giphy();//Instanciar la clase de Giphy archivo clases.js
let storage = new MiStorage();//Instanciar la clase de MiStorage archivo clases.js
const CLASS_FAVORITO='favorito';//para el almacenamiento del localStorage

giphy.getTrending().then((gifs) => {
    let contenedor = document.getElementById("galery");
    console.log(gifs); //TODO:eliminar
    contenedor.innerHTML='';
    gifs.data.forEach(gifData => {
        let gif = new Gif(gifData.title, gifData.username, gifData.images.preview_gif.url, false, gifData.id);
        showInit(gif, contenedor);
        //almacenarObjetoEnStorage(gif);
    });
});
//Almacenar todos los objetos en el localStorage
let almacenarObjetoEnStorage = function(gif) {
    //console.log(gif);
    giphy.setGifObject(gif);
}

//Carga de gif en la pagina
let showInit = function(gif, contenedor){
    console.log(gif);
    console.log(contenedor);
    let divContent = document.createElement("div"); // div contenedor del gif
    divContent.classList.add("gif");
    
    let img = document.createElement("img");
    img.src = gif.url;
    img.dataset.id = gif.id;
    img.dataset.url = gif.url;
    img.dataset.user = gif.user;
    img.dataset.name = gif.name;
    img.addEventListener('click', giphy.getFullGif);
    divContent.appendChild(img);

    let divOver = document.createElement("div");
    divOver.classList.add("over");
    divContent.appendChild(divOver);

    let divIcons = document.createElement("div"); // div contenedor de los iconos
    divIcons.classList.add("buttonGif");

    let divfavorito = document.createElement("div"); // botón favoritos
    divfavorito.id = gif.id;
    divfavorito.classList.add("no-favorito", "icon"); // todos los gif empiezan sin ser favoritos
    if(storage.getIdFavoritos(gif.id)!= null) // Se evalua si el gif está en favorito
        divfavorito.classList.add(CLASS_FAVORITO); // Si es favorito, se agrega la clase 
    divfavorito.addEventListener("click", giphy.driverFav)
    
    divIcons.appendChild(divfavorito);
    
    let divDescarga = document.createElement("div"); // botón descarga
    divDescarga.id = gif.id;
    divDescarga.dataset.url = gif.url; //almacenado datos como atributos de elemento html
    divDescarga.dataset.nombre = gif.name;
    divDescarga.classList.add("descarga", "icon");
    divDescarga.addEventListener("click",(e)=>{
        //llamado al metodo descargarGif de la clase Giphy
        giphy.descargarGif(e.currentTarget.dataset['url'], e.currentTarget.dataset['nombre']);
    });
    divIcons.appendChild(divDescarga);
    
    let divFull = document.createElement("div"); // botón para la versión full
    divFull.dataset.id = gif.id;
    divFull.classList.add("full", "icon");
    divFull.dataset.url = gif.url;
    divFull.dataset.user = gif.user;
    divFull.dataset.name = gif.name;
    divFull.addEventListener('click', giphy.getFullGif);

    divIcons.appendChild(divFull);

    let divInfo = document.createElement("div");
    divInfo.classList.add("infoGif");

    let user = document.createElement("p");
    user.id = "user";
    user.textContent = gif.user;
    divInfo.appendChild(user);

    let title = document.createElement("p");
    title.id =  "title";
    title.textContent = gif.name;

    divInfo.appendChild(title);

    divOver.appendChild(divIcons);
    divOver.appendChild(divInfo);

    divContent.appendChild(divOver);
    contenedor.appendChild(divContent);
}




/* // Petición inicial => Trendings //

const API_KEY = 'q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs';

let url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3`;

async function getGifsInit(url) {
    let response = await fetch(url);
    let gifs = await response.json();
    return gifs;
}

let allGifs = [];

getGifsInit(url).then((gifsData) => {
    console.log(gifsData);
    gifsData.data.forEach(gifData => {
        showInit(gifData);
        var nGif = new Gif(gifData.title, gifData.username, gifData.images.preview_gif.url, false);
        allGifs.push(nGif);
    });
});

// Agregar respuesta de la petición a la sección correspondiente //

//let out = document.getElementById('galery'); // Obtener el contenedor de los gifs //

let showInit = (gifData) => {
    //console.log(out);
    out.insertAdjacentHTML('beforeend',
    `<li class="item"><div id="gif" class="gif">
            <img id="full" src="${gifData.images.preview_gif.url}" alt="${gifData.title}">
            <div class="over">
                <div class="buttonGif">
                    <a href="#"><img id="fav" class="icon" src='./assets/icons/icon-fav-hover.svg'></a>
                    <img id="dow" class="icon" src='./assets/icons/icon-download.svg'>
                    <a href="javascript:showFull('${gifData.images.preview_gif.url}','${gifData.username}','${gifData.title}')"><img id="ful" class="icon" src='./assets/icons/icon-max-normal.svg'></a>
                </div>
                <div class="infoGif">
                    <p id="user">${gifData.username}</p>
                    <p id="hover-title">${gifData.title}</p>
                </div>
            </div>
    </div></li>`);
} */

// Obtener y agregar funcionalidad al botón favoritos

/* let bFav = document.getElementById('fav');
console.log(bFav); */

// Versión Full //

/* function showFull (url, user, title) {
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

    divfavorito.addEventListener("click",(e)=>{
        // En esta sección podría operar con el atributo mark que tengo en el objeto almacenado en el localStorage
        if(e.currentTarget.classList.contains(CLASS_FAVORITO)){
            // Si tiene la clase favorito se elimina porque lo están retirando
            e.currentTarget.classList.remove(CLASS_FAVORITO);
            giphy.remFovoritById(e.currentTarget);
        }else{
            //Si NO tiene la clase favorito se adiciona porque lo están agregando
            e.currentTarget.classList.add(CLASS_FAVORITO);
            giphy.addFavoritById(e.currentTarget);
        }
} */

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
        icon.classList.add('burgerAct');
        icon.alt = 'close';
        let menu = document.getElementById('menu');
        menu.classList.remove('off');
        i = 0;
    } else {
        i = 1;
        icon.classList.remove('burgerAct')
        icon.alt = 'burger';
        let menu = document.getElementById('menu');
        menu.classList.add('off');
    }
};