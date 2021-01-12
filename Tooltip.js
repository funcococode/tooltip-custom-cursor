const tooltipContainers = document.querySelectorAll('.tooltip');

export default class Tooltip {
    constructor(config) {
        this.color = config.color || "#fff";
        this.bgColor = config.bgColor || "#000";
        this.rolling = config.rolling || false;
        this.position = config.position || "top left";
        this.positionArr = this.position.split(" ");
        this.rounded = config.rounded || false;
    }

    createTooltip() {
        tooltipContainers.forEach(container => {
            let span = document.createElement("span");
            container.appendChild(span);
            span.classList.add("popup");
            span.style.backgroundColor = (this.bgColor == "random") ? this.createRandomColor() : this.bgColor;
            span.style.color = (this.color == "random") ? this.createRandomColor() : this.color;
            span.style.borderRadius = (this.rounded)?"100px":"0";
            span.style.transform = (this.positionArr[0] == "top") ? "translateY(-100%)" : "translateY(100%)";
            span.style.left = (this.positionArr[1] == "left") ? "0" : "100%";
            
            if(this.positionArr.length == 1){
                span.style.transform = "translateY(0%)";
                span.style.left = (this.positionArr[0] == "left") ? "0" : "100%";
                
                if(this.positionArr[0] == "top" || this.positionArr[0] == "bottom"){
                    span.style.transform = (this.positionArr[0] == "top") ? "translateY(-100%)" : "translateY(100%)";
                    span.style.left = "0";
                }
            }

            let toolTip = container.getAttribute("data-tooltip");
            let finalTooltip = (this.rolling) ? `<marquee>${toolTip}</marquee>` : toolTip;
            span.innerHTML = finalTooltip;


            container.addEventListener("mouseover", () => {
                span.classList.add("visible");
            });
            container.addEventListener("mouseout", () => {
                span.classList.remove("visible");
            });
        });
    }


    createRandomColor() {
        let h = Math.floor(Math.random() * 360);
        let s = Math.floor(Math.random() * 100);
        let l = Math.floor(Math.random() * 100);

        return `hsl(${h},${s}%,${l}%)`;
    }
}