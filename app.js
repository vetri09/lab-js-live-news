// elements
let newsContainer = document.getElementsByClassName("news-container")[0];
let country = document.getElementById("dropdown");

//fragment
let fragment = `        
<div class="box">
    <img src="" alt="" class="img">
    <p class="heading"></p>
    <p class="details"></p>
    <button><a href="" class="readmore">READ MORE</a></button>
</div>`;

// api key
const apikey = "4ca6524bc9d74eb1ab3eb97fcc28cbcc";

//dipslays at bef=ginning
var url = `https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apikey}`;
    console.log(url);
    newsContainer.innerHTML="";
    for(let i=0; i<3; i++){
        newsContainer.innerHTML += fragment;

        axios(url)
            .then(data => {
                let heading = document.getElementsByClassName("heading")[i];
                let content = document.getElementsByClassName("details")[i];
                let readbtn = document.getElementsByClassName("readmore")[i];
                let image =document.getElementsByClassName("img")[i];
                image.src = data.data.articles[i].urlToImage;
                heading.innerHTML = data.data.articles[i].title;
                content.innerHTML = data.data.articles[i].description;
                readbtn.href = data.data.articles[i].url;
                // console.log("img: "+data.data.articles[i].urlToImage);
                // console.log("title: "+data.data.articles[i].title);
                // console.log("desp: "+data.data.articles[i].description);
                // console.log("url: "+data.data.articles[i].url);
                // console.log("-------");
            })
    }


// works when option changes
document.getElementById("dropdown").addEventListener("change", ()=> {
    var url = `https://newsapi.org/v2/top-headlines?country=${country.value}&apiKey=${apikey}`;
    console.log(url);
    newsContainer.innerHTML="";
    for(let i=0; i<3; i++){
        newsContainer.innerHTML += fragment;

        axios(url)
            .then(data => {
                let heading = document.getElementsByClassName("heading")[i];
                let content = document.getElementsByClassName("details")[i];
                let readbtn = document.getElementsByClassName("readmore")[i];
                let image =document.getElementsByClassName("img")[i];
                image.src = data.data.articles[i].urlToImage;
                heading.innerHTML = data.data.articles[i].title;
                content.innerHTML = data.data.articles[i].description;
                readbtn.href = data.data.articles[i].url;
                // console.log("img: "+data.data.articles[i].urlToImage);
                // console.log("title: "+data.data.articles[i].title);
                // console.log("desp: "+data.data.articles[i].description);
                // console.log("url: "+data.data.articles[i].url);
                // console.log("-------");
            })
    }
})