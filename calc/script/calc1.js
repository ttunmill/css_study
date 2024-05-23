//num1, num2 사용자가 숫자 값을 입력했을 때 
//결과버튼을 클릭했을 때
//#result 결과 위치에 "정답은 OO에요!"
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btn = document.querySelector(".btn");
let total = document.querySelector("#result");
btn.addEventListener("click", sum_result);
function sum_result() {
    let result = Number(num1.value) + Number(num2.value);
    total.value = `정답은 ${result.toLocaleString("ko-kr")} 에요!`;
}