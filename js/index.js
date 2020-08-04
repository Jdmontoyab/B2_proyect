// Cambio de tema

function switchTheme() {
    if (document.theme === 'dark') {
        replaceClass('dark', 'light');
    } else {
        replaceClass('light', 'dark');
    }
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
        i = 0;
    } else {
        i = 1;
        icon.src = "./assets/icons/burger.svg";
        icon.alt = 'burger';
        let menu = document.getElementById('menu');
        menu.classList.add('on');
    }
};

/*class Gif {
    constructor(nombre, autor, url, likes) {
        this.nombre = nombre;
        this.autor = autor;
        this.url = url;
        this.likes = likes;
    }
}

let gifs = [
    new Gif('gato1', 'Pedro', 'https://media3.giphy.com/media/13CoXDiaCcCoyk/200.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=200.gif', 37),
    new Gif('gato2', 'Ana', 'https://media3.giphy.com/media/CjmvTCZf2U3p09Cn0h/200.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=200.gif', 57),
    new Gif('gato3', 'Marcela', 'https://media0.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=giphy.gif', 3),
    new Gif('gato4', 'Johan', 'https://media2.giphy.com/media/12PA1eI8FBqEBa/giphy.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=giphy.gif', 264),
    new Gif('gato5', 'Julian', 'https://media0.giphy.com/media/Nm8ZPAGOwZUQM/200.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=200.gif', 456),
    new Gif('gato6', 'Carolina', 'src="https://media0.giphy.com/media/8hXXilmk33wtmAGJNu/giphy.gif?cid=ecf05e47rjs1zimdpmwmxw2nu4dd8oqh6ktbz636j3n8p0x7&rid=giphy.gif"', 83)
];

let contenedor = document.getElementsByClassName('content')[0];

for (let i = 0; i < gifs.length; i++) {
    let gif = gifs[i];

    let hTres = document.createElement('h3');
    hTres.textContent = gif.nombre;

    let imagen = document.createElement('img');
    imagen.src = gif.url;
    imagen.alt = 'Error al cargar el gif'

    let p = document.createElement('p');
    p.innerText = gif.autor;

    let span = document.createElement('span');
    span.textContent = 'likes: ' + gif.likes;

    let div = document.createElement('div');
    div.appendChild(hTres);
    div.appendChild(imagen);
    div.appendChild(p);
    div.appendChild(span);

    contenedor.appendChild(div);
} */