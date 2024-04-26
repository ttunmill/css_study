# CSS(Cascading Style Sheet)
## CSS 작성 전 준비사항
* html 문서 준비(태그 작성 완료 상태)
* html, css 파일 별도 폴더 관리
* 최상위 폴더 html 파일 배치
* 하위 폴더명 css, styles 으로 css파일 배치 
* ex) index.html, index.css
---
## CSS 외부스타일시트와 내부스타일시트
* name.css 외부파일로 분리해서 html에 link로 연결하는 **외부스타일시트**
* html파일 내에서 head태그 안에 style태그로 구분해서 작성하는 **내부 스타일시트**
* 외부스타일시트 장단점 :
- 장점 : 1개의 css 파일로 여러개의 html을 관리할 수 있다.
- 단점 : 파일명 또는 파일 위치를 정확히 관리하지 않으면 파일 관리가 어려울 수 있다. 
* 내부스타일시트 장단점 :
- 장점 : html파일 내에 작성하여 태그와 한꺼번에 보기편하다.
- 단점 : 2개이상의 html파일을 동시에 디자인관리하는것이 불가능하다.
---
## CSS 선택자
1. 태그선택자 : `<h1></h1>` -> `h1 {속성:값;}`
2. 클래스선택자 : `<h1 class="a"></h1>` -> `.a {속성:값;}`
3. 아이디선택자 : `<h1 id="b"></h1>` -> `#b {속성:값;}`
4. 자손선택자 : `<h1><em><span></span></em></h1>` -> `h1 em span {속성:값;}`
5. 자식선택자 : `<h1><em><em></em></em></h1>` -> `h1 > em {속성:값;}`
---
## CSS 디자인하기
* CSS 작성 전 HTML이 미리 디자인이 되어있으면 안된다.
* **HTML을 디자인 초기화하는 작업이 CSS 디자인 전 반드시 선행되어야한다!!!**
* 초기화 CSS `reset.css` 공통파일(날짜나 프로젝트명 표기금지!)
---
# CSS 글자 표현 속성
## font-family
* 로컬글꼴(설치글꼴제공) 또는 웹 글꼴을 연결할 수 있다.
* "메인대표글꼴", "후보글꼴" (후보제한없음)
* 후보글꼴은 메인글꼴과 모양이 비슷한 글꼴로 연결해야 한다.
* 글꼴에 띄어쓰기가 있으면 따음표가 필요하다. 
## font-size
* 웹 글꼴 평균 16px
* 사용 단위 px, %, em, rem
* 절대값 : px, 상대값: %, em, rem(권장)
---
# 선택자 우선 순위
* #아이디(3) > .클래스(2) > 태그(1)
1. 다음 중 우선 순위가 가장 높고 낮은 선택지는?
* `#box .a .b p {}` > 3+2+2+1 = 8
* `#box #a .b p {}` > 3+3+2+1 = 9
* `#wrap #box .a {}` > 3+3+2 = 8
* `#wrap .a .b p {}` > 3+2+2+1 = 8
2. 다음 중 우선 순위가 가장 높고 낮은 선택지는?
* `#box a b p {}` > 3+1+1 =6
* `#box #a .b {}` > 3+3+2 =8
* `#box #wrap .a .b {}`> 3+3+2+2 =10
* `#wrap #box a {}` > 3+3+1 =7
---
## color 
* 영문명 직접 입력 ex) 테스트용으로 주로 밝은색을 사용한다.
* aqua, lime, yellow, coral, ...
* 헥사코드 입력 최소값0 ~ 최대값F RFB 코드 기준
* RGB 웹 색상 기준으로 색상을 섞을 수록 밝아진다.
* #Hex #000000 == #000, #FF00CC => #F0C 
* rgba(red, green, blue,alpha) *최대색상 255
---
## box css
### display
* `block, inline, inline-block`
* 특정 태그가 화면에 어떻게 표시될지 지정하는 속성
* `block` : 새로운 행, 크기, 여백 인식
* `inline` : 내용만큼 크기 인식(그 외 크기인식불가능)
* `inline-block` : 내용만큼 크기인식(크기 추가설정가능), 옆으로 정렬
### box-sizing
*  `box-sizing : border-box`
* 요소의 너비와 높이를 계산할 때 테두리, 여백(padding)까지 퐇함해서 계산하는 속성
* 속성 미 적용 시 : w100 + h100 + padding-top20 = 100x120
* 속성 적용 시 : w100 + h100 + padding-top20 = 100x100
### width, height
* 요소의 너비와 높이
* 절대값px, 상대값%, 화면 상대값 vw, vh
* 상대값 처리는 0~100% 사이 값만 사용한다.
### box-shadow
* figma drop-shadow == css box-shadow
* box-shadow: x축 y축 blur값 색상
* 그림자 색상, 투명도 = rgba(0, 0, 0, 0.25)
### border-radius
* 값 입력 필요없이 모양을 둥글게 만들고 싶다면 `50%`를 입력하면 된다.
---
## table
### `tr`행, `td`내용열
* 열(td)는 항상 행(tr)안에 존재해야 합니다.
* table은 행,열을 자식, 자손으로 가지는 부모로써 존재합니다.
### `thead`, `tbody`, `tfoot` 행 그룹
* thead : 제목행그룹, th위주로 구성된 제목행(tr)을 묶을 때 사용합니다.
* tbody : 내용행그룹, th위주로 구성된 내용행(tr)을 묶을 때 사용합니다.
* tfoot : 결과행그룹, th&td들로 구성된 결과값을 가지는 결과행(tr) 묶을 때 사용합니다.
### `colspan`, `rowspan`
* colspan : 수평열 합치기
* rowspan : 수직열 합치기
---
## form요소와 속성
### `<form action="#" method=""></form>`
* action : 폼 데이터를 제출할 서버 스크립트 지정
* method : 폼 데이터를 제출하는 방법
* fieldset, legend : fieldset 양식의 일부를 그룹화하는 태그이며 legend는 그룹에 제목을 포함시킨다.
### `<input type="" name="">`
* type : input 요소가 나타낼 입력 필드의 종류를 정합니다.
* name : input 요소의 이름을 지정합니다.(데이터 구분)
* readonly : input 요소의 입력 필드가 읽기 전용임을 명시합니다.
* autofocus, autocomplete : 페이지가 로드될때 자동으로 포커스하게 해주는 기능, 사용자가 이전에 입력했던 값들을 드롭다운 옵션으로 보여줍니다.
* value : input 요소의 초기값을 지정합니다.
* placeholder : 입력 필드에 사용자가 적절한 값을 입력할 수 있도록 도와주는 짧은 도움말을 명시합니다.
* value 와 placeholder의 차이점 : 
* maxlength : input 요소의 글자수 제한설정합니다.
### `<textarea></textarea>`
* rows, cols : rows는 텍스트 컨트롤에 볼수 있는 텍스트의 행의 수, cols는 텍스트 컨트롤의 외관상의 폭
* 사용용도 및 주의사항 : 
### input 입력양식과 선택양식
* text, url 등의 사용자가 직접입력가능한 입력양식
* radio 등의 사용자의 입력이 아닌 선택으로 들어가는 선택양식
* `name` : 입력양식(데이터구분용), 선택양식(데이터구분(개별데이터x, 그룹데이터구분용))
* `value` : 입력양식(초기값), 선택양식(개별데이터구분용)
---
## CSS Layout
### float, flex
* `float` : 형제 관계에 해당하는 block or inline tag 왼쪽, 오른쪽 정렬할 때 사용
* ex) : ul-li *3개 정렬 `ul li {float : left;}`
* `flex` : 정렬하고자 하는 아이템의 부모한테 flex를 먼저 설정한다.
* ex) : ul-li *3개 정렬 `ul {display : flex;}`
* flex 설정 시 기본값 : 메인축(수평), 교차축(수직)
* `display : flex` : 정렬대상의 부모 설정 속성값, 설정 시 해당 부모 기준 자식까지(자손X) flexible box layout으로 처리하겠다!
### flex
* **부모에 적용하는 속성**
* flex-direction : container에 적용하는 속성으로 container안의 item의 메인축 방향을 설정합니다. 
(row, row-reverse, column, column-reverse)
* flex-wrap : container에 적용하는 속성으로 container 내부 items 줄바꿈처리를 설정합니다. 
(wrap, wrap-reverse, nowrap[기본값])
* flex-flow : container에 적용하는 속성으로 flex-direction과 flex-wrap을 묶음으로 처리할 수 있습니다. 
(flex-flow: row wrap;)
* justify-content : container에 적용하는 속성으로 메인축의 정렬방법을 설정합니다.
(flex-start, flex-end, center, space-between, space-around)
* align-content : container에 적용하는 속성으로 교차축의 아이템이 2줄 이상일 경우 정렬방법입니다.
(stretch[기본값], flex-start, flex-end, center, space-between, space-around)
* align-items : container에 적용하는 속성으로 교차축의 아이템이 1줄 일 경우 정렬방법입니다.
(stretch[기본값], flex-start, flex-end, center, space-between, space-around)
* **자식에 적용하는 속성**
* align-self : item에 적용하는 속성으로 container에 적용하는 align-items보다 우선순위가 높습니다. flex box의 교차축을 정렬합니다.
(flex-start, flex-end, center, baseline)
* order : item에 적용하는 속성으로 아이템의 정렬 순서 설정
(-1, 0, 1, 2, ……)
* flex : flex-grow, flex-shrink, flex-basis 묶음 속성입니다.
(flex : grow shrink basis)