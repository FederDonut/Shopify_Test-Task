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
    renderMainImg2(lastImg)
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
        renderMainImg2(newID);
        renderSwitchBtn(newID);
    }else{
        newID = 4
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg2(newID);
        renderSwitchBtn(newID);
    }
   
}

function buttonRight(lastImg){
    if(lastImg < articleImgArray.length-1){
        let newID = lastImg + 1
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg2(newID);
        renderSwitchBtn(newID);
    }else{
        newID = 0;
        hideMainImgOnGallery(newID);
        showHiddenImgOnGallery(newID,lastImg);
        renderMainImg2(newID);
        renderSwitchBtn(newID);
    }
   
}

function renderMainImg2(lastImg){
    let mainImg = document.getElementById('mainImg');
    mainImg.innerHTML = "";
    if(articleImgArray[lastImg]){
            mainImg.innerHTML = getMainImgToHtml(lastImg);
        } 
}


function renderImgOnLeftImgBtn(lastImg){
    let leftImg = document.getElementById('leftBtn');
    let leftResponsiveId;
    if(lastImg > 0){
        leftResponsiveId = lastImg -1;
    }else{
        leftResponsiveId = articleImgArray.length -1;
    }
    
    if(leftResponsiveId){
        leftImg.innerHTML = getResponsivLeftBtn(leftResponsiveId);    
    }
}

function renderImgOnRightImgBtn(lastImg){
    let rightImg = document.getElementById('rightBtn');
    let rightResponsiveId;
    if(lastImg < articleImgArray.length-1){
        rightResponsiveId = lastImg +1;
    }else{
        rightResponsiveId = 0
    }
    if(rightImg){
        rightImg.innerHTML = getResponsivRightBtn(rightResponsiveId);
    }
    
}

//function changeResponsivImgLeft(lastImg){
//    let leftImg = document.getElementById('leftBtn');
//    console.log(lastImg);
//    console.log(lastImg-1);
//    if(lastImg>0){
//        lastImg= lastImg-1;  
//        leftImg.innerHTML = getResponsivLeftBtn(lastImg) 
//    }else{
//        lastImg=4;
//        leftImg.innerHTML = getResponsivLeftBtn(lastImg);
//    }
//}

//function changeResponsivImgRight(lastImg){
//    //console.log(lastImg+1);
//    let rightImg = document.getElementById('rightBtn');
//    let mainContent = document.getElementById('img'+lastImg);
//    let leftImg = document.getElementById('leftBtn');
//    let secImg = document.getElementById('3');
//    //console.log(secImg.id);
//    if(lastImg < articleImgArray.length-1){
//        lastImg = lastImg +1;
//
//        //rightImg.innerHTML = getResponsivRightBtn(lastImg);
//        //console.log(articleImgArray[lastImg]);
//        //mainContent.style.backgroundImage
//    }else{
//        lastImg = 0;
//        //rightImg.innerHTML = getResponsivRightBtn(lastImg);
//        console.log(articleImgArray[lastImg]);
//    }
//    renderMainImg2(lastImg);
//    rightImg.innerHTML=getResponsivRightBtn(lastImg);
//
//}

function addArticleToCard(){
    let shoppinCard = document.getElementById('fullCard-icon')
    shoppinCard.classList.toggle('d-none')
    
}
//
//function changeResponsivImgRight(currentImgId){ // lastImg in currentImgId umbenannt für Klarheit
//    let newId;
//
//    if(currentImgId < articleImgArray.length - 1){
//        newId = currentImgId + 1;
//    } else {
//        newId = 0; // Springt zum ersten Bild, wenn das Ende erreicht ist
//    }
//
//    // Aktualisiere das Hauptbild mit der neuen ID
//    renderMainImg2(newId);
//    let rightImg = document.getElementById('rightBtn');
//    let leftImg = document.getElementById('leftBtn'); // leftBtn muss auch aktualisiert werden
//    // Berechne die IDs für die responsiven Buttons basierend auf newId
//    let rightResponsiveId = (newId < articleImgArray.length - 1) ? (newId + 1) : 0;
//    let leftResponsiveId = (newId > 0) ? (newId - 1) : (articleImgArray.length - 1);
//
//
//    if (rightImg) { // Sicherheitscheck
//        rightImg.innerHTML = getResponsivRightBtn(rightResponsiveId);
//    }
//    if (leftImg) { // Sicherheitscheck
//        leftImg.innerHTML = getResponsivLeftBtn(leftResponsiveId);
//    }
////
//    //console.log("Aktuelles Hauptbild:", articleImgArray[newId]);
//}
//
//function changeResponsivImgLeft(currentImgId){
//    let newId;
//    
//    if(currentImgId > 0){
//        newId = currentImgId -1;
//    }else{
//        newId = articleImgArray.length-1;
//    }
//    renderMainImg2(newId);
//    let rightImg = document.getElementById('rightBtn');
//    let leftImg = document.getElementById('leftBtn');
//
//    let rightResponsiveId;
//    if(newId < articleImgArray.length -1){
//        rightResponsiveId = newId +1;
//    }else{
//        rightResponsiveId = 0;
//    }
//    let leftResponsiveId;
//    if(newId > 0){
//        leftResponsiveId = newId -1;
//    }else{
//        leftResponsiveId = articleImgArray.length -1
//    }
//
//    if (rightImg) {
//        rightImg.innerHTML = getResponsivRightBtn(rightResponsiveId);
//    }
//    if (leftImg) {
//        leftImg.innerHTML = getResponsivLeftBtn(leftResponsiveId);
//    }
//}



