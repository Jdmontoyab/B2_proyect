// Creación de clase gifos // 

//#########Global###########//

class Gif{
	constructor(name, user, url, mark, id){
        this.name = name;
        this.user = user;
		this.url = url;
        this.mark = mark;
        this.id = id;
    }
}

class MiStorage{
    constructor(){
        this.miStorage = window.localStorage;
        this.favoritos = 'favoritos';
    }
    getIdsFavoritos(){
        let favoritos = this.miStorage.getItem(this.favoritos);
        return favoritos != null?favoritos.split(','):[];
    }
    setIdsFavoritos(e){
        this.miStorage.setItem(this.favoritos,e);
    }
    getIdFavoritos(id){
        let favoritos = this.getIdsFavoritos();
        return favoritos.indexOf(id)<0?null:favoritos[favoritos.indexOf(id)];
    }
}
class Giphy{
    constructor(){
        this.API_KEY = 'q5Lb7RCg18Q0OZU4RqBRJb1BmwQvkpWs';
        this.URL_TRENDING = 'https://api.giphy.com/v1/gifs/trending';
        this.URL_BASE = 'https://api.giphy.com/v1/gifs';
    }

    async getTrending(limit=3, offset=0){//async y await
        let response = await fetch(this.URL_TRENDING+'?api_key='+this.API_KEY+'&limit='+limit+'&offset='+offset);//concatenando
        let gifs = await response.json();
        return gifs;
    }

    async getGifsSearch(input){
        if(input === '') return null;
        let returnData = null;
        await fetch(`${this.URL_BASE}/search?api_key=${this.API_KEY}&limit=${result1}&q=${input}`)
                .then(res => res.json()
                    .then(data => {
                        returnData = data.data;
                    })
                ).catch(err=>console.error(err));
        return returnData;
    }

    async getGifsPorIds(ids){
        if(ids.length==0) return null;
        let returnData=null;
        await fetch(`${this.URL_BASE}?api_key=${this.API_KEY}&ids=${ids.toString()}`)
                .then(res=>res.json()
                    .then(data=>{
                        returnData=data.data;
                    })
                ).catch(err=>console.error(err));
        return returnData;
    }

    async getGifPorId(id){
        let returnData=null;
        await fetch(`${this.URL_BASE}?api_key=${API_KEY}&gif_id=${id}`)
            .then(res=>res.json()
                .then(data=>{
                    returnData = data.data;
                })
            ).catch(err=>console.error(err));
        return returnData;
    }

    addFavoritById(e){
        let storage = new MiStorage();
        let favoritos = storage.getIdsFavoritos();
        if(favoritos.indexOf(e.id)<0)
            favoritos.push(e.id);
        storage.setIdsFavoritos(favoritos);
    }
    
    remFovoritById(e){
        let storage = new MiStorage();
        let favoritos = storage.getIdsFavoritos();
        let i = favoritos.indexOf(e.id);
        if(i>=0)
            favoritos.splice(i,1);
        storage.setIdsFavoritos(favoritos);
    }

    async descargarGif (url, nombre) {
        await fetch(url).then((img)=> {
            img.blob().then((file)=>{
                let a = document.createElement("a");
                a.href = URL.createObjectURL(file);
                a.download= nombre;
                a.click();
            });
        });
    }

    setGifObject(gif){
        storage.miStorage.setItem(gif.id,JSON.stringify(gif));        
    }

    getGifObjects(){
        let gifs = storage.getIdsFavoritos();
        let gifsList=[];
        for (let i = 0; i < gifs.length; i++) {
            let gif = storage.miStorage.getItem(gifs[i]);
            if(gif!=null)
                gifsList.push(JSON.parse(gif));
        }
        return gifsList;
    }

    getFullGif(e){
        let contenedorFullScreen = document.getElementById('full-screen');
        contenedorFullScreen.classList.add('fullOver');

        let divClose = document.createElement("div");
        divClose.classList.add('close');
        divClose.addEventListener('click', () => {
            contenedorFullScreen.innerHTML = "";
            contenedorFullScreen.classList.remove('fullOver');
        });

        let imgFull = document.createElement("img");
        imgFull.src = e.currentTarget.dataset['url'];
        imgFull.classList.add('img-full');

        let divBase = document.createElement("div");
        divBase.classList.add('base');

        let divString = document.createElement("div");
        divString.id = "string";

        let pOne = document.createElement("p");
        pOne.id = "pOne";
        pOne.innerText = e.currentTarget.dataset['user'];
        let pTwo = document.createElement("p");
        pTwo.id = "pTwo";
        pTwo.innerText = e.currentTarget.dataset['name'];

        divString.appendChild(pOne);
        divString.appendChild(pTwo);

        let divOptions = document.createElement("div");
        divOptions.id = "options";

        let divFav = document.createElement("div");
        divFav.id = e.currentTarget.dataset['id'];
        divFav.classList.add('icon-full', 'no-fav');
        if(storage.getIdFavoritos(divFav.id)!= null)
            divFav.classList.add(CLASS_FAVORITO);
        divFav.addEventListener("click", giphy.driverFav)

        let divDown = document.createElement("div");
        divDown.id = "down";
        divDown.classList.add('icon-full');
        //divDown.addEventListener("click", giphy.descargarGif(imgFull.src, pTwo.innerText));

        divOptions.appendChild(divFav);
        divOptions.appendChild(divDown);

        divBase.appendChild(divString);
        divBase.appendChild(divOptions);
        
        contenedorFullScreen.appendChild(divClose);
        contenedorFullScreen.appendChild(imgFull);
        contenedorFullScreen.appendChild(divBase);
        contenedorFullScreen.classList.add("show-full");
    }

    driverFav(e) {
        if(e.currentTarget.classList.contains(CLASS_FAVORITO)){
            e.currentTarget.classList.remove(CLASS_FAVORITO);
            giphy.remFovoritById(e.currentTarget);
        } else {
            e.currentTarget.classList.add(CLASS_FAVORITO);
            giphy.addFavoritById(e.currentTarget);
        }
    }
}