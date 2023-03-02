# JavaScript-Basic
> JavaScript 입문과 웹 UI개발
<br />

## 🍎 Level_01 

**01_자바스크립트의 근본** 
> html 파일 안에 몰래 숨어서 `html 조작과 변경` 을 담당하는 언어

🧐 왜 조작을 할까? 
* 탭, 모달 등 웹페이지UI 만들 수 있다
* 유저가 입력한 데이터를검사할 수 도 있다.
* 유저가 버튼을 누르면 서버로 데이터 요청을 할 수 있다.  
<br />


**02_자바스크립트 기초**
 
**◼ JS로 HTML 조작하는 방법**
```javascript
  <script> 자바스크립트를 실행하는 부분 <script/>
```
* `안녕하세요` 를 `안녕`으로 바꾸는 코드 
```HTML
  <h1 id="hello">안녕하세요</h1>
```
```javascript
  <script> 
     document.getElementById('hello').innerHTML = '안녕';
  <script/>
```
**🔻 코드에 대한 자세한 해석** 
> * `document` : html 문서 
> * `.` 점 : ~의
> * `getElement` : 요소를 가져와라 
> * `ById('hello')` : id가 hello인 것 
> * `document.getElementById('hello')` : html 문서의 id가 hello 인 요소 찾아와 
> * `innerHTML` : 내부 HTML
> * `document.getElementById('hello').innerHTML = "안녕";` : HTML 문서의 ID가 HELLO인 요소 찾아와 그거의 내부 HTML을 '안녕' 으로
> * `=` : 오른쪽을 왼쪽에 넣으라는 뜻 

<br />

**◼ HTML의 모든 것 바꿀 수 있다** 
```javascript
  document.getElementById('??1').??2 = '??3';
```
* `??` 부분 3개만 잘 채우면 상상하는 모든 것 변경 가능
* `??1 : 아이디 적기` , `??2 : 무엇을` , `??3 : 어떻게` 

<br />


* 만약 글자색을 빨강색으로 변경하고 싶다면? 

```javascript
document.getElementById('hello').style.color = 'red';
```

* 초보를 고수로 바꾸기 
```HTML
  <h1 id="hi">JS 초보에요</h1>
```

```javascript
 document.getElementById('hi').innerHTML = 'JS 고수에요';
```
> * `hi` : 바꿀요소ID
> * `innerHTML` : 무엇을 
> * `'JS 고수에요';` : 어떻게 

* `getElementById('hi')` => **셀렉터** 라고 부름 

<br />

🤷‍♀️ 자바스크립트 코드 길어보인다 왜 이렇게 길게 코드를 작성해야할까? 
> 우리는 `왜` 라는 고민을 항상 해야한다. 
> - 모든 프로그래밍은 컴퓨터에게 일 시키는행위 
> - 컴퓨터는 사람처럼 대하면 안된다. 
> - 컴퓨터에게 추상적인 명령이 아닌 구체적인 설명을 포함한 명령을 해야한다. 

