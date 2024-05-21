/* 
계산식) 적정체중 = (본인신장-100)*0.9
- 현재 키와 몸무게를 자유롭게 입력하고
- 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let goals = document.querySelector("#goals");
let result_btn = document.querySelector("#result");


result_btn.addEventListener("click", function() {
    let total = (Number(height.value) - 100)*0.9;
    console.log(total)
    if(height.value == "" || weight.value == "") {
        goals.value = `값이 입력되지 않았습니다.`;
    } else if (weight.value >= total) {
        goals.value = `적정체중은 ${total}kg이며 ${weight.value - total}kg 초과되셨습니다.`;
    } else {
        goals.value = `축하합니다 적정체중입니다.`
    }
    // if(weight.value >= total) {
    //     goals.value = `적정체중은 ${total}kg이며 ${weight.value - total}kg 초과되셨습니다.`;
    // } else {
    //     goals.value = `축하합니다 적정체중입니다.`
    // }
})