let pointer = document.querySelector("#circle");
let tooltipElements = document.querySelectorAll("h1[data-tooltip]");
tooltipElements.forEach(elem => {
    elem.addEventListener("mouseover",(e)=>{
        let popupText = e.target.getAttribute("data-tooltip");
        elem.firstChild.innerHTML = `<marquee>${popupText}</marquee>`;
        elem.firstChild.classList.add("visible")
        elem.firstChild.style.left = -(elem.getBoundingClientRect().x - elem.firstChild.getBoundingClientRect().width) + "px"
    });

    elem.addEventListener("mouseout",(e)=>{
        elem.firstChild.classList.remove("visible")
    })
})

addEventListener("mousemove",(e)=>{
    move(e.x,e.y)
    if(e.target.getAttribute("data-tooltip")){
        let targetCoords = {
            x : e.target.getBoundingClientRect().left,
            y : e.target.getBoundingClientRect().top,
            width : e.target.getBoundingClientRect().width,
            height : e.target.getBoundingClientRect().height
        } 
        pointer.style.transition = "min-width ease 0.25s , min-height ease 0.21s  , background ease 0.25s";
        pointer.style.left = (targetCoords.x) + "px";
        pointer.style.top = (targetCoords.y) + "px";
        pointer.style.background = "none";
        pointer.style.border = "1px solid black"
        pointer.style.minWidth = targetCoords.width + "px";
        pointer.style.minHeight = targetCoords.height + "px";
        pointer.style.zIndex = "1";

        
    }else{
        pointer.style.background = "black";
        pointer.style.border = "none"
        pointer.style.transition = "min-width ease 0.25s , min-height ease 0.21s, background ease 0.25s ";
        pointer.style.minWidth = "30px";
        pointer.style.minHeight = "30px"
    }
    
})

function move(x,y){
    pointer.style.left = (x ) + "px";
    pointer.style.top = (y ) + "px";
}