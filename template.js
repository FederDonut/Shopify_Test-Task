

function getImgtoHtml(i){
     let imgUrl = `./img/${articleImgArray[i]}`
    return `
                <div class="imgs" id="img${i}" style="background-image: url('${imgUrl}');"></div>
    `
}

function getMainImgToHtml(targetImgUrl,targetImgId){
    return`
                <div class="imgBtn" id="left${targetImgId-1}" style="background-image: url('');"></div> 
                <div class="mainImg" id="img${targetImgId}" style="background-image: url('${targetImgUrl}');"></div>
                <div class="imgBtn" id="right${targetImgId+1}" style="background-image: url('');"></div> 
        `
}

function getSwitchButtons(lastImg){
        return`
                <button onclick="buttonLeft(${lastImg})" class="switch-Btn" id="btn-left" >&lt;</button>
                <button onclick="buttonRight(${lastImg})" class="switch-Btn" id="btn-right" >&gt; </button>
        `
}

