function imgFinder() {
    let ele = document.getElementsByClassName('imgFinderOn');
    if (ele.length > 0) {
        ele[0].parentNode.removeChild(ele[0]);
        return;
    }
    let imgs = document.getElementsByTagName('img');
    let div = document.createElement('div');
    div.style = `z-index: 99999;      
    background-color: grey;      
    position: absolute;    
    top: 0%;
    max-width: 100%;`;
    div.classList.add('imgFinderOn');
    for (let img of imgs) {
        img.draggable = true;
        let newImg = document.createElement('img');
        newImg.src = img.src;
        div.appendChild(newImg);
    }
    document.body.appendChild(div);
}
imgFinder();