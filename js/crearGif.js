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
            <video id="video">

            </video>
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
        <div id="contNumCrono">
        <div id="numeros">
            <img id="one" class="num" src="./assets/icons/paso-a-paso.svg" alt="one">
            <img id="two" class="num" src="./assets/icons/paso-a-paso.svg" alt="two">
            <img id="three" class="num" src="./assets/icons/paso-a-paso.svg" alt="three">         
        </div>
        <h5 id="crono"></h5>
        </div>
        <div id="linea"></div>
        <button id="start" class="show" onclick="start()">COMENZAR</button>
    </div>
    <img id="cinta" class="light" src="./assets/icons/pelicula.svg" alt="Cinta">`);
}

//let video = document.getElementById('video');

function getStreamAndRecord () { 
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 }
        }
    }).then(function(stream) {
        video.srcObject = stream;
        video.play();

        let stepOne = document.getElementById('one');
        let stepTwo = document.getElementById('two');
        let button = document.getElementById('start');
        stepTwo.src = "./assets/icons/paso-a-paso-hover.svg";
        stepOne.src = "./assets/icons/paso-a-paso.svg";
        button.classList.remove('hide');
        button.classList.add('show');
        button.innerText = 'GRABAR';
        button.onclick = getGrabar;
    });
}

const start = () => {
    let h4 = document.getElementsByTagName('h4')[0];
    let pInfo = document.getElementsByTagName('p')[0];
    let button = document.getElementById('start');
    let stepOne = document.getElementById('one');

    h4.textContent = "¿Nos das acceso a tu cámara?";
    pInfo.textContent = "El acceso a tu camara será válido sólo por el tiempo en el que estés creando el GIFO.";
    stepOne.src = "./assets/icons/paso-a-paso-hover.svg";
    button.classList.remove('show');
    button.classList.add('hide');

    getStreamAndRecord();
}

let recorder;

const getGrabar = () => {
    let button = document.getElementById('start');
    let video = document.getElementById('video');
    button.innerText = 'FINALIZAR';

    recorder = RecordRTC(video.srcObject, {
        type: 'gif'
    });

    recorder.startRecording();

    button.onclick = getStop;
}

function getStop() {
    recorder.stopRecording(function() {
        let blob = recorder.getBlob();
        giphy.guardarGiphy(blob);
    });
}


 
/* recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,
    onGifRecordingStarted: function() {
    console.log('started')
   },
}); */

/* navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false
}).then(async function(stream) {
    let recorder = RecordRTC(stream, {
        type: 'video'
    });
    recorder.startRecording();

    recorder.stopRecording(function() {
        let blob = recorder.getBlob();
        invokeSaveAsDialog(blob);
    });
}); */