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
    gallery.innerHTML="";
    for(i = 0; i < articleImgArray.length; i++){
        gallery.innerHTML += getImgtoHtml(i);//getImgOutput(i);
    }
    hideMainImgOnGallery(lastImg);
    renderSwitchBtn(lastImg);
}

function renderSwitchBtn(lastImg){
    let btnContainer = document.getElementById('Btn-container');
    btnContainer.innerHTML = getSwitchButtons(lastImg);
}

function hideMainImgOnGallery(lastImg){
    let hiddenImg = document.getElementById('img'+lastImg)
    if(hiddenImg){
        hiddenImg.classList.add('d-none');
    }
}
function showHiddenImgOnGallery(newID,lastImg){
    let hiddenImg = document.getElementById('img'+lastImg)
    if(lastImg !== newID){
        hiddenImg.classList.remove('d-none');
    }
}

function buttonLeft(lastImg){
    let mainImg = document.getElementById('mainImg');
    if(lastImg > 0){
         let newID = lastImg - 1;
        console.log(newID);
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg();
        renderSwitchBtn(newID);
    }else{
        newID = 4
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg();
        renderSwitchBtn(newID);
    }
   
}

function buttonRight(lastImg){
    if(lastImg < articleImgArray.length-1){
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg();
        renderSwitchBtn(newID);
    }else{
        newID = 0;
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg();
        renderSwitchBtn(newID);
    }
   
}


function renderMainImg(){
    let mainImg = document.getElementById('mainImg');
    let galleryDiv = document.getElementById('gallery');
    mainImg.innerHTML ="";
    let imgDivs = galleryDiv.children
    for(let divEntrie of imgDivs){
        if(divEntrie.classList.contains('d-none')){
            console.log(divEntrie.id)
            let targetImgId= Number(divEntrie.id.slice(3,4))
            console.log(targetImgId);// Wichtig
            let ImgUrl = divEntrie.style.cssText;
            let targetImgUrl = ImgUrl.slice(23,61);
            console.log(targetImgUrl)
            mainImg.innerHTML = getMainImgToHtml(targetImgUrl,targetImgId);
            
        }
    }  
}

function addArticleToCard(){
    let shoppinCard = document.getElementById('fullCard-icon')
    shoppinCard.classList.toggle('d-none')
}




