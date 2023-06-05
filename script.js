const API_KEY ="api_key=532e070bcd3bafade0a4952cae06fab8";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
fetch(API_URL)
.then(response => response.json())
.then(data=>{
    console.log(data)
  movietitle(data.results)
})
function movietitle(data){
    data.forEach(element => {
        let {original_title, poster_path} = element
   
    let a = document.querySelector(".main")
    let b= document.createElement("div")
    b.className="movie"
    a.appendChild(b)
    b.innerHTML=`<img class = "poster" src="${IMG_URL+ poster_path}" alt="" srcset=""><span class="moviename">${original_title}</span>`
});
}