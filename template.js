

function getImgtoHtml(i){
     let imgUrl = `./img/${articleImgArray[i]}`
    return `
                <div class="imgs" id="img${i}" style="background-image: url('${imgUrl}');"></div>
    `
}

function getMainImgToHtml(currentMainImg){
        let mainImgUrl = `./img/${articleImgArray[currentMainImg]}`
    return`
                <div class="imgBtn" id="leftBtn" onclick="buttonLeft(${currentMainImg})"></div> 
                <div class="mainImg" id="mainImg${currentMainImg}" style="background-image: url('${mainImgUrl}');"></div>
                <div class="imgBtn" id="rightBtn" onclick="buttonRight(${currentMainImg})"></div> 
        `
}

function getSwitchButtons(lastImg){
        return`
                <button onclick="buttonLeft(${lastImg})" class="switch-Btn" id="btn-left" >&lt;</button>
                <button onclick="buttonRight(${lastImg})" class="switch-Btn" id="btn-right" >&gt; </button>
        `
}

function getResponsivLeftBtn(leftImgId){
        let imgUrl = articleImgArray[leftImgId];
        return`
                <div class="responsivBtn" id="${leftImgId}"  style="background-image: url('./img/${imgUrl}');"></div>
        `
}
function getResponsivRightBtn(rightImgId){
        let imgUrl = articleImgArray[rightImgId]
        return`
                <div class="responsivBtn" id="${rightImgId}"  style="background-image: url('./img/${imgUrl}');"></div>
        `
}