let articleImgArray = [
    "NeoricDunkel_Hell2_1298x.jpeg",
    "neoric_zitrone_dunkel_1298x.jpeg",
    "dsc02531_1412x.jpeg",
    "dsc02543_1412x.jpeg",
    "neoric_zitrone_hell_1298x.jpeg", //Hauptbild standartmäßig
]


function init(){
    renderImggallery();
    renderMainImg();
}



function renderImggallery(){
    let gallery = document.getElementById('gallery');
    let lastImg = articleImgArray.length-1;
    console.log()
    gallery.innerHTML="";
    for(i = 0; i < articleImgArray.length; i++){
        gallery.innerHTML += getImgtoHtml(i);//getImgOutput(i);
       
    }
    hideMainImgOnGallery(lastImg);
}

function hideMainImgOnGallery(lastImg){

    let hiddenImg = document.getElementById('img'+lastImg)
    if(hiddenImg){
        hiddenImg.classList.add('d-none');
    }
}

function renderMainImg(){
    let mainImg = document.getElementById('mainImg');
    let galleryDiv = document.getElementById('gallery');
    mainImg.innerHTML ="";
    //console.log(gallery);
    let imgDivs = galleryDiv.children
    for(let divEntrie of imgDivs){
        //console.log(divEntrie.className);
        if(divEntrie.classList.contains('d-none')){
            //console.log(true)
            console.log(divEntrie.id)
            let targetImgId= Number(divEntrie.id.slice(3,4))
            console.log(targetImgId);
            //console.log(divEntrie.style.cssText);
            let ImgUrl = divEntrie.style.cssText;
            //console.log(targetImgUrl)
            let targetImgUrl = ImgUrl.slice(23,59);
            console.log(targetImgUrl)
            mainImg.innerHTML = getMainImgToHtml(targetImgUrl,targetImgId);
        }
    }
    
}