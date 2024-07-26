/** heavy-script.js */

window.addEventListener("load", function() {

console.log('start script...');

// js 현재 시간에 대한 정보를 가지고 있는 객체 --> Date
let startTime = new Date().getTime();
let delay = 3000; // 3초

//3초 동안 브라우저 렌더링 과정을 블로킹 해보자.
// 3초 뒤에 while 문 멈춤 
// 0 < 3
while(new Date().getTime() < startTime + delay) {
    // 3초 동안 루프 동작함.
}

console.log('emd script....');

});
