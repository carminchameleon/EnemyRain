
/* 
1. 귀신 하늘에서 시작하도록
2. 랜덤한 x의 위치에서 나와야죠
3. setinterval로 귀신 시작한 위치에서 y를 아래로 내려주시면 됩니다


1. 적을 하늘에서 내려오게 하기
원래 위치 top 에 + 1 되도록

2. 그 내려오게 하는 위치를 랜덤으로 설정하기

3. 내려오는 타이밍을 setInterval로 하게 하기
*/


// 1. 3초마다 새로운 적을 만들게 하기

// window.setInterval(makeEnemy, 3000)
 
// function makeEnemy(){
//   let theEnemy = document.createElement("div")
//   theEnemy.classList.add("enemy")

//   let randomPosition =  getRandom(0,882);
//   theEnemy.style.left = `${randomPosition}px`
//   let TopInterVal = setInterval(moveEnemy,30)
// //   newEnemy.style.setProperty("left",`${randomPosition}px`)
//   background.appendChild(theEnemy)
// }

// function getRandom(min, max){
//     return Math.floor((Math.random() * (max - min + 1)) + min);
// }

// let theTop = 0;
// function moveEnemy(){
//     let theNewEnemy = document.querySelector(".enemy")
//     let newTop = theTop++
//     theNewEnemy.style.setProperty('top',`${newTop}px`)
//     if(newTop >  645){
//         changeDeath()
//         clearInterval(TopInterval)
//     }
// }