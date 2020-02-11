## 나와야할 결과물
- guide/enemyrain.mp4 에서 확인해주세요.

## 구현 가이드

https://vimeo.com/389174477

1. 바탕화면 깔기
2. 히어로를 가운데서시작하도록
3. 키이벤트 -> 좌우 누를때 히어로 움직이게
4. 바탕화면 끝 도달하면 더이상 움직이지 않도록
=====================
1. 귀신 하늘에서 시작하도록
2. 랜덤한 x의 위치에서 나와야죠
3. setinterval로 귀신 시작한 위치에서 y를 아래로 내려주시면 됩니다

--------------브라우저 한 가운데에 배경 넣기 ﻿ ﻿ ﻿원하는 가로세로 길이로
한 가운데 넣는 방법
여러가지 css 스타일 중에 선택

히어로 가운데로
배경, 히어로를 하나로 감싸는 디브를 만들고 
그 감싸는 것에 릴레이티브,
히어로에 bottom 0 을 하면 바닥에 붙음

-한가운데에 시작하게 하는 것
fixed header left 50 ( 사과로고 했던 것처럼)
Margin-left


히어로 움직이기
돔 - 인풋에 이벤트 리스너
특정 요소에 키프레스 ( 키다운 키업)을 할때

브라우저에 이 벤트를 달 수 있음
왼쪽을 누르면 왼쪽
오른쪽을 누르면 오른쪽

window.addEventlistenr(keyevent, 

css left 1px 씩 줄이면 됨
css right 1px 값을 추가 하면 된다.

자바스크립트 돔으로 하면 됨
how to get css 로 자바스크립트로 접근을 할 수 있도록
 

두번째.
hero를 보면 이미지가 여러가지이다.
image sprite 
이미지를 불러올때 깜빡거린다.

다른 이미지를 쓸때 다시 통신하지 않아도 됨
깜빡거리지 않게 만들기 위해서 image sprite	
이미지 스프라이트에 대한 블로그 하기

빈 div를 만들고 그 안에 백그라운드로 넣는다.

div는 가만히 있고 background-position
가로, 세로로 땡길 수 있는데 그때 x , y 값으로 조절 하면 된다.

왼쪽을 바라보는 class를 만들고 그 백그라운드 포지션을 정한 후,

.front-face
.left-face
.right-face

백그라운드 이미지, 백그라운드 포지션을 정한 후
윈도우 addEventelistner 
왼쪽으로 넘어가게 하는 css class를 추가 하면 된다.

1. 귀신이 하늘에서 시작하도록
2. 랜덤한 x의 위치에서 나와야죠
3. setinterval로 귀신 시작한 위치에서 y를 아래로 내려주시면 됩니다

----------작동하는 부분-------------

let background = document.querySelector("#bg")
let start = setInterval(makeNewEnemy,3000)

function makeNewEnemy(){
    let newEnemy = document.createElement("div")
    newEnemy.setAttribute('class','enemy')
    let TheNewEnemy = document.querySelector(".enemy")
    topPosition = getRandom(0,870);
    newEnemy.style.left = `${topPosition}px`;
    background.appendChild(newEnemy);

    let top = 0 
    setInterval(moveDown,5)  
    function moveDown(){
        let changedone = top++
        newEnemy.style.top = `${changedone}px`
        checkDeath(changedone)
    }
     function checkDeath(num){
      if (num > 645) {
      newEnemy.classList.add("death")
      newEnemy.style.top = "645px"
      setTimeout(function(){
        newEnemy.setAttribute("class","gone")

        ; }, 1000)
    }
 }
}

function getRandom(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
   }

//     theNewEnemy.style.setProperty('top',`${newTop}px`)
//     if(newTop >  645){
//         changeDeath()
//         clearInterval(TopInterval)

