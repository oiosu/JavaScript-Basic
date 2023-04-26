# JavaScript-Basic
> JavaScript 입문과 웹 UI개발
<br />

## 🍎 Level_01 

## [00. 강의소개와 자바스크립트의 근본](https://github.com/oiosu/JavaScript-Basic/blob/master/00_%EA%B0%95%EC%9D%98%EC%86%8C%EA%B0%9C%EC%99%80%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98%20%EA%B7%BC%EB%B3%B8.md)
### **자바스크립트는 HTML 조작을 위해 사용합니다.** 

> html 파일 안에 몰래 숨어서 **"html 조작과 변경"** 을 담당하는 언어

## [01_동적 UI를 만드는 스텝(Alert 박스)](https://github.com/oiosu/JavaScript-Basic/blob/master/01_%EB%8F%99%EC%A0%81%20UI%EB%A5%BC%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EC%8A%A4%ED%85%9D(Alert%20%EB%B0%95%EC%8A%A4).md)

* Alert 박스 내 닫기 버튼과 띄우기 버튼 기능 만들어 보기

## [02. 자바스크립트 function 문법 사용법](https://github.com/oiosu/JavaScript-Basic/blob/master/02_%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20function%20%EB%AC%B8%EB%B2%95%20%EC%82%AC%EC%9A%A9%EB%B2%95.md)

* 새로운 문법을 배우면 어디에 사용하면 좋을지 계속 생각하기 <br>
*  조작할 때 html 의 하단에 코드를 작성해야 한다 (오류 줄이기) <br>
*  자바스크립트 셀렉터 오타 주의하기 (잘못찾는 경우가 많다) <br>
*  of null 이라는 에러 발생한다면 셀렉터 잘못 작성한 경우이다. <br>
*  다른 문법 오타도 주의하기 (동작을 잘 못한다면 다시 살펴보기) <br>

## [03. function의 파라미터 문법](https://github.com/oiosu/JavaScript-Basic/blob/master/03_function%EC%9D%98%20%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%20%EB%AC%B8%EB%B2%95.md)

###  function에 구명 뚫기 

```javascript
function 알림창열기(구멍) {
    document.getElementById('alert').style.display = 구멍;
}
```

```html
<button onclick= "알림창닫기('none');" >닫기</button>
<button onclick= "알림창열기('block');">버튼</button>
```

* `알림창열기(구멍);` : 알림창열기 안의 코드를 실행해주세요.
* `알림창열기('안녕');` : 구멍에 `'안녕'` 넣어서 알림창열기 안의 코드를 실행해주세요.



#### 🧐 그렇다면 구멍을 어떻게 사용할 수 있을까?

`알림창열기('block');` : 알림창 열기 

`알림창열기('none');` : 알림창 닫기 

⭐ 따라서 전에는 기능 2개를 축약하려고 함수 2개나 만들었다면, 이제는 2개 필요없고 함수 1개만으로 구현이 가능하다 => 구멍 문법



---

* `구멍` 은 정확하게 개발 용어로 `파라미터` 라고 한다. 
* `파라미터`는 필수 문법이 아니다. 
* `,`를 사용해서 파라미터 여러개 작성 가능하다. 

---

#### 파라미터 예시 

```javascript
fuction plus(구멍){
    2 + 구멍
}
//plus(1);
// : 구멍 자리에 1 넣어서 plus 안의 코드 실행해줘
// : 이렇게 사용하면 굳이 비슷한 함수 여러개를 만들 필요가 없다. 
```
