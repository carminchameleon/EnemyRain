let background = document.querySelector("#bg")

class Enemy {
  constructor(){
    this.makeElement()
  }
    makeElement(){  // 새롭게 원소를 만들고, 그 원소의 시작 값을 랜덤하게 부여
    let newOne = document.createElement('div')
    newOne.className = "enemy"
    let randomTop = Math.floor((Math.random() * 851)+1);
    newOne.style.left = `${randomTop}px`
    background.appendChild(newOne)
  
    let y = 0     
    setInterval(moveDown,10)  
    function moveDown(){
        let changedY = y++
        newOne.style.top = `${changedY}px`
        checkDeath(changedY)
    }

    function checkDeath(num){
      if (num > 645) {
       newOne.classList.add("death")
       newOne.style.top = "645px"
       setTimeout(function(){
          newOne.classList.add("gone")
         }, 2000)
      }

      
    }
  }
}
