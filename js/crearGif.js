let clearCrearGifos = () => {
    document.getElementById('inspirate').innerHTML = '';
    document.getElementById('trending').innerHTML = '';
    let container = document.getElementById('inspirate');
    crearGifos(container);
}

const crearGifos = (container) => {
    console.log(container);

    container.insertAdjacentHTML('beforeend',
    `<div id="contPpal">
        <div id="contOne">
            <img id="logoCam" src="./assets/icons/element-camara.svg"></img>
            <img id="logoCam" src="./assets/icons/element-luz-camara.svg"></img>
        </div>
        <div id="contTwo">
            <div id="grabar">
                
            </div>
        </div>
        <div id="contThree">
            <img id="logoCam" src="./assets/icons/element_cinta1.svg"></img>
        </div>
    </div>`);
}

