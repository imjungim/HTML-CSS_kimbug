const html = document.documentElement;
const body = document.body;
const div = document.querySelector("div");

div.addEventListener("click", function (e) {
  console.log("DIV");
});

body.addEventListener(
  "click",
  function (e) {
    console.log("BODY");
  },
  true //capture에 실행
); //옵션(캡쳐에실행?T, 버블에 실행?F boolean)

html.addEventListener(
  "click",
  function (e) {
    console.log("HTML");
  },
  true
);

//브라우저가 이벤트핸들러를 달면 이벤트객체라는것을 넣어준다
//e,evt,event 
//이벤트 객체 = 이벤트의 종류에 따라 해당 이벤트와 연관된 정보를 모은것!
//모든이벤트 객체에 공통적으로 들어가는 property도 있다.
//currentTarget, target, stopPropagation(), stopImmediatePropagation(),and preventDefault() ..
//a를 누르면 다른페이지로 이동이 디폴트 로직 

const form = document.querySelector('form')

form.addEventListener("submit",function(e){
  e.preventDefault(); //submit을 하지말아봐ㅏㅏ
})

//html을 control가능 만능 자바스크립트..