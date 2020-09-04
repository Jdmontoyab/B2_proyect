let clearCrearGifos = () => {
    document.getElementById('inspirate').innerHTML = '';
    document.getElementById('trending').innerHTML = '';
    let container = document.getElementById('inspirate');
    container.classList.add('crearGifos');
    crearGifos(container);
}

const crearGifos = (container) => {
    //console.log(container);

    container.insertAdjacentHTML('beforeend',
    `<div id="camara">
        <img id="logoCam" class="light" src="./assets/icons/camara.svg"></img>
        <img id="luzCam" class="light" src="./assets/icons/Path-2.svg"></img>
    </div>
    <div id="containerMisGifos1">
        <div id="pantalla">
            <div id="esquinasSup">
                <div id="supIzq" class="corner"></div>
                <div id="supDer" class="corner"></div>
            </div>
            <div id="string">
                <h4>Aquí podrás<br>crear tus propios<span id="Gifos"> GIFOS</span></h4>
                <p>¡Crea tu GIFO en sólo 3 pasos!<br>(sólo necesitas una cámara para grabar un video)</p>
            </div>
            <div id="esquinasInf">
                <div id="infIzq" class="corner"> </div>
                <div id="infDer" class="corner"></div>
            </div>
        </div>
        <div id="numeros">
            <img class="num" src="./assets/icons/paso-a-paso.svg" alt="uno">
            <img class="num" src="./assets/icons/paso-a-paso.svg" alt="dos">
            <img class="num" src="./assets/icons/paso-a-paso.svg" alt="tres">
        </div>
        <div id="linea"></div>
        <button>COMENZAR</button>
    </div>
    <img id="cinta" class="light" src="./assets/icons/pelicula.svg" alt="Cinta">`);
}