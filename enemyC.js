class Enemy {
    constructor() {
       this.enemy = document.createElement('div');
       this.enemy.className = 'enemy'
       this.getRandomPosition();
       this.moveDown();
       this.topPosition = 0;
       this.downInterval;
       this.drawEnemy();
    }

    getRandomPosition() {
       this.enemy.style.left =  Math.floor((Math.random() * 851)+1) + "px";
    }
    
    moveDown() {
       this.downInterval = setInterval(() => {
          this.topPosition = this.topPosition+2;
          this.enemy.style.top = `${this.topPosition}px`
          if(this.topPosition > 645){
            this.checkDeath()
          }
      },10)
   }

    checkDeath(){
            clearInterval(this.downInterval)
            this.enemy.classList.add("death")
            this.enemy.style.top = "645px"
            setTimeout(() => {
            this.enemy.classList.add("gone")
            }, 2000)
            }

    drawEnemy(){
        let background = document.querySelector("#bg");
        background.appendChild(this.enemy)
    }

}


// createElement 해서 그 요소를 만들때 그걸 this로 만들어서 다른곳에서 쓸 수 있게해야 한다.
