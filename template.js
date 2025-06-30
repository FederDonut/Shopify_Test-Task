

function getImgtoHtml(i){
     let imgUrl = `./img/${articleImgArray[i]}`
    return `
                <div class="imgs" id="img${i}" style="background-image: url('${imgUrl}');"></div>
    `
}

function getMainImgToHtml(lastImg){
        let mainImgUrl = `./img/${articleImgArray[lastImg]}`
    return`
                <div class="imgBtn" id="leftBtn" onclick="buttonLeft(${lastImg})"></div> 
                <div class="mainImg" id="mainImg${lastImg}" style="background-image: url('${mainImgUrl}');"></div>
                <div class="imgBtn" id="rightBtn" onclick="buttonRight(${lastImg})"></div> 
        `
}

function getSwitchButtons(lastImg){
        return`
                <button onclick="buttonLeft(${lastImg})" class="switch-Btn" id="btn-left" >&lt;</button>
                <button onclick="buttonRight(${lastImg})" class="switch-Btn" id="btn-right" >&gt; </button>
        `
}

function getResponsivLeftBtn(leftImg){
        let imgUrl = articleImgArray[leftImg];
        return`
                <div class="responsivBtn" id="${leftImg}" onclick="changeResponsivImgLeft(${leftImg})" style="background-image: url('./img/${imgUrl}');"></div>
        `
}
function getResponsivRightBtn(lastImg){
        let imgUrl = articleImgArray[lastImg]
        return`
                <div class="responsivBtn" id="${lastImg}" onclick="changeResponsivImgRight(${lastImg})" style="background-image: url('./img/${imgUrl}');"></div>
        `
}