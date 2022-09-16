function addAdv() {
    const viewerDiv = document.getElementById("viewer");
    const pageDivs = viewerDiv.querySelectorAll(".page");
    
    for(let i = 1; i < pageDivs.length; i++) {
        if (i % 3 == 0) {
            const img = document.createElement("img");
            img.src = '0bd196a91d0ed7d01e121923368bc4c6.jpg';
            img.alt = 'adv-imgage';
            // img.style.width = '80%';
            // img.style.height = '5%';
            img.className = 'adv-img-class';
            
            const advDiv = document.createElement("div");
            // advDiv.className = 'adv-class';
            advDiv.className = 'canvasWrapper';
            advDiv.appendChild(img);
            viewerDiv.insertBefore(advDiv, pageDivs[i]);
        }
    }
}
