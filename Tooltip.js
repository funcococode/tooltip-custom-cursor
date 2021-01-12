const tooltipContainers = document.querySelectorAll('.tooltip');

export default class Tooltip{
    constructor(config){
        this.color = config.color || "#fff";
        this.bgColor = config.bgColor || "#000";
        this.rolling = config.rolling || false;
    }

    createTooltip(){
        tooltipContainers.forEach(container=>{
            let span = document.createElement("span");
            container.appendChild(span);
            span.classList.add("popup");
            span.style.backgroundColor = this.bgColor;
            span.style.color = this.color;
            
            let toolTip = container.getAttribute("data-tooltip");
            let finalTooltip = (this.rolling) ? `<marquee>${toolTip}</marquee>` : toolTip;
            span.innerHTML = finalTooltip;
            
            
            container.addEventListener("mouseover",()=>{
                span.classList.add("visible");
            });
            container.addEventListener("mouseout",()=>{
                span.classList.remove("visible");
            });
        });
    }

}

