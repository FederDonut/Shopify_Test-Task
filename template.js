

function getImgtoHtml(i){
     let imgUrl = `./img/${articleImgArray[i]}`
    return `
            <div class="imgs" id="img${i}" style="background-image: url('${imgUrl}');"></div> 
    `
}

function getMainImgToHtml(targetImgUrl,targetImgId){
    return`
            <div class="mainImg" id="img${targetImgId}" style="background-image: url('${targetImgUrl}');"></div>
    `
}