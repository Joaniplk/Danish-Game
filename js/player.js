class Player{
    constructor(x,y,width,height,speed=3,imgSrcL, imgSrcR){
        this.x = x;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.levelIndex = 0;
        this.controls = new Controls();
        this.imgL = new Image();
        this.imgL.src = imgSrcL;
        this.imgR = new Image();
        this.imgR.src = imgSrcR;
        this.goingLeft = false;
        this.goingRight = true;
    }

    update(ctx, border, edge, nextLevelExist, prevLevelExist){
        this.#move(border, edge, nextLevelExist, prevLevelExist);
        this.#draw(ctx);
    }

    #move(border, edge, nextLevelExist, prevLevelExist){
        if(this.controls.right){
            this.goingRight = true;
            this.goingLeft = false;
            this.x += this.speed;
        }
        if(this.controls.left){
            this.goingRight = false;
            this.goingLeft = true;
            this.x -= this.speed;
        }
        if(this.x >= edge - this.width){
            this.x = edge - this.width;
            if(nextLevelExist){
            this.levelIndex++;
            this.x = border + 5;
            }
        }
        if(this.x <= border){
            this.x = border;
            if(prevLevelExist){
            this.levelIndex--;
            this.x = edge - 5 - this.width;
            }
        }
    }

    #draw(ctx){
        if(this.goingRight)ctx.drawImage(this.imgR, this.x, this.y, this.width, this.height);
        if(this.goingLeft)ctx.drawImage(this.imgL, this.x, this.y, this.width, this.height);
    }
}