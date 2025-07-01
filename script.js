let articleImgArray = [
    "NeoricDunkel_Hell2_1298x.jpeg",
    "neoric_zitrone_dunkel_1298x.jpeg",
    "dsc02531_1412x.jpeg",
    "dsc02543_1412x.jpeg",
    "neoric_zitrone_hell_1298x.jpeg", //Hauptbild standartmäßig
]


function init(){
    renderImggallery();
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
    renderMainImg(lastImg)
    renderImgOnLeftImgBtn(lastImg);
    renderImgOnRightImgBtn(lastImg);
    
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
    if(lastImg > 0){
         let newID = lastImg - 1;
        console.log(newID);
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg(newID);
        renderSwitchBtn(newID);
        renderImgOnLeftImgBtn(newID);
        renderImgOnRightImgBtn(newID);
    }else{
        newID = 4
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg(newID);
        renderSwitchBtn(newID);
        renderImgOnLeftImgBtn(newID);
        renderImgOnRightImgBtn(newID);
    }
   
}

function buttonRight(lastImg){
    if(lastImg < articleImgArray.length-1){
        let newID = lastImg + 1
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg(newID);
        renderSwitchBtn(newID);
        renderImgOnLeftImgBtn(newID);
        renderImgOnRightImgBtn(newID);
    }else{
        newID = 0;
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg(newID);
        renderSwitchBtn(newID);
        renderImgOnLeftImgBtn(newID);
        renderImgOnRightImgBtn(newID);
    }
   
}

function renderMainImg(currentMainImg){
    let mainImg = document.getElementById('mainImg');
    mainImg.innerHTML = "";
    if(articleImgArray[currentMainImg]){
            mainImg.innerHTML = getMainImgToHtml(currentMainImg);
        } 
}


function renderImgOnLeftImgBtn(lastImg){
    let leftImgBtn = document.getElementById('leftBtn');
    let leftImgId;
    leftImgBtn.innerHTML ="";
    console.log('leftBtn');
    if(lastImg > 0){
        leftImgId = lastImg -1;
    }else{
        leftImgId = articleImgArray.length -1;
    }
    
    if(leftImgBtn){
        leftImgBtn.innerHTML = getResponsivLeftBtn(leftImgId);    
    }
}

function renderImgOnRightImgBtn(lastImg){
    let rightImgBtn = document.getElementById('rightBtn');
    let rightImgId;
    if(lastImg < articleImgArray.length-1){
        rightImgId = lastImg +1;
    }else{
        rightImgId = 0
    }
    if(rightImgBtn){
        rightImgBtn.innerHTML = getResponsivRightBtn(rightImgId);
    }
    
}


function addArticleToCard(){
    let shoppinCard = document.getElementById('fullCard-icon')
    shoppinCard.classList.toggle('d-none')
    
}
