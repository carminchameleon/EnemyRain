let theHero = document.querySelector(".hero")
window.addEventListener("keydown", checkDirection)
/*
키 이벤트 (키다운)

1. 키를 눌렀을 때, 그 키가 오른쪽 키인지 왼쪽 키인지 확인 
각각의 방향에 맞는 함수를 실행
2. move방향 함수
  왼쪽으로부터 어느 위치인지 left값을 얻어온다.
  그 값은 string형식이므로 앞의 숫자만 얻는다.
*/
function checkDirection(event){  // 방향 확인
  if ( event.keyCode === 37){
      moveLeft()
      changeLeftFace(); //왼쪽으로 가는 함수
  } else if ( event.keyCode === 39){
      moveRight() // 오른쪽으로 가는 함수
      changeRightFace();
  } else if ( event.keyCode === 38) {   
      turnFront(); // 앞에 보게
  } else if ( event.keyCode === 40) {
      turnBack(); // 뒤돌게
  }
}

function moveLeft(){
    let position = window.getComputedStyle(theHero).left;
    let newPosition = Number(position.split("p")[0])-10// 숫자만 뽑기
    if( newPosition > 19){
    theHero.style.setProperty('left',`${newPosition}px`);
    }
 }

function moveRight(){
    let position = window.getComputedStyle(theHero).left;
    let newPosition = Number(position.split("p")[0]) + 10 // 숫자만 뽑기
    if( newPosition < 882){
    theHero.style.setProperty('left',`${newPosition}px`);
    }
}

function changeLeftFace(){
   theHero.classList.add("left-face")   
   theHero.classList.remove("right-face")
   theHero.classList.remove("back-face")
   theHero.classList.remove("front-face")
}

function changeRightFace(){
    theHero.classList.add("right-face")   
    theHero.classList.remove("left-face")
    theHero.classList.remove("back-face")
    theHero.classList.remove("front-face")
 }

function turnFront(){
    theHero.classList.add("front-face")
    theHero.classList.remove("left-face")
    theHero.classList.remove("right-face")
    theHero.classList.remove("back-face")
}

function turnBack(){
    theHero.classList.add("back-face")
    theHero.classList.remove("front-face")
    theHero.classList.remove("left-face")
    theHero.classList.remove("right-face")
}
  
/* 귀신 떨어지게 하기 

1. keydown 이 눌렸을때 귀신이 떨어지도록 설정
2. 귀신이 랜덤한 x의 위치에서 나와야 함
3. 그 귀신이 일정 시간 주기로 나와야 함 setinterval ( y에서 아래로 내리기)
*/

