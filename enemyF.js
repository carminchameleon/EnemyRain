let background = document.querySelector("#bg")
let start = setInterval(makeNewEnemy,1000)
let TheNewEnemy = document.querySelector(".enemy")
let x;


function makeNewEnemy(){ 
    let newEnemy = document.createElement("div")
    newEnemy.className = 'enemy'
    x = getRandom(0,860);
    newEnemy.style.left = `${x}px`;
    background.appendChild(newEnemy);

    let y = 0 
    setInterval(moveDown,5)  
    
    function moveDown(){
        changedY = y++
        newEnemy.style.top = `${changedY}px`
        checkDeath(changedY)
    }
    
    function checkDeath(num){
      if (num > 645) {
      newEnemy.classList.add("death")
      newEnemy.style.top = "645px"
      setTimeout(function(){
        newEnemy.classList.add("gone")
        ; }, 2000)
      }
    }
}




function getRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
   }

//머리에 닿으면 죽는 기능
/*
offsetTop
hero의 머리 높이

1. 머리 위에 닿았을 때 
hero 길이 빼면 그 높이가 나옴

2. offSetLeft 이미 숫자로 되어 있음


 */