# 02_자바스크립트 function 문법 사용법

#### 긴 코드를 짧은 단어로 축약하는 방법

```html
 <div class="alert-box" id="alert">알림창임 
        <button onclick="document.getElementById('alert').style.display = 'none';" >
            닫기
        </button>
    </div>
<button onclick="document.getElementById('alert').style.display = 'block';">버튼</button>
```

> function을 쓰면 긴 코드를 짧게 한 단어로 축약가능 



```javascript
function 작명() {
}
```

> 긴 코드를 축약하고 싶을 때 작성한다. 
>
> * 작명은 자유롭게 작성한다. 



---



```html
 <button onclick="작명()">버튼</button>
```

```javascript
function 작명() {
	document.getElementById('alert').style.display = 'block';
}
```

> * 작명은 `알림창 열기()` 이렇게 다 알기 좋도록 작성하는 것이 좋다. 
> * 물론 작명은 한글이 아닌 영문으로 작성하기 
> * 함수명 영어로 작성할 시 `소문자로 작성` 과 `camelCase`  규칙 지키기



####  ✔️ 새로운 문법을 배우면 어디에 사용하면 좋을지 계속 생각하기 

> 코드를 짧게 축약해서 쓰고 싶을 때 function을 꺼내서 쓰면 된다. 

#### 긴 코드 재 사용이 잦을 때도 편리하다 



---



##### ✔️ 조작할 떄 html 의 하단에 코드를 작성해야 한다 (오류 줄이기)

##### ✔ 자바스크립트 셀렉터 오타 주의하기 (잘못찾는 경우가 많다)

##### ✔️ `of null` 이라는 에러 발생한다면 셀렉터 잘못 작성한 경우이다.

##### ✔️ 다른 문법 오타도 주의하기 (동작을 잘 못한다면 다시 살펴보기)



