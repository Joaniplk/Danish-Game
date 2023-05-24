const textSpace = document.getElementById("text");
const paragraph = document.getElementById("paragraph");
class Level{
    constructor(index, color, imgSrc ,border, edge, top, bottom, text="helloworld"){
        this.index = index;
        this.color = color;
        this.border = border;
        this.edge = edge;
        this.top = top;
        this.bottom = bottom;
        this.margin = 200;
        this.specialStart = this.edge / 2 - this.margin;
        this.specialEnd = this.edge / 2 + this.margin;
        this.text = text;
        this.show = false;
        this.img = new Image();
        this.img.src = imgSrc; 
    }

    update(x, input, firstLoad){
        if(x >= this.specialStart && x <= this.specialEnd && !firstLoad){
            if(input){
                this.show = true;
            }
            if(this.show){
                paragraph.innerText = this.text;
                textSpace.style.background = "rgba(0, 98, 189, 1)";
                textSpace.style.color = "rgba(240, 248, 255,1)";
            }
        }else{
            this.show = false;
        }
        if(!this.show){
            paragraph.innerText = "";
            textSpace.style.background = "rgba(0, 98, 189, 0)";
            textSpace.style.color = "rgba(240, 248, 255,0)";
        }
    }

    draw(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.border,this.bottom,this.edge,this.top);
        ctx.drawImage(this.img, 0, 0, this.edge, this.top);
    }
}