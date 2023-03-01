# 01_동적 UI를 만드는 스텝(Alert 박스)

#### Alert 박스 내 닫기 버튼과 띄우기 버튼 기능 만들어 보기 

#### 닫기 버튼을 누르면 Alert 박스가 사라진다. 





#### ⭐UI 만드는 STEP

1. HTML, CSS 로 미리 디자인하기 
2. 필요할 때 보여달라고 코드 작성하기 (자바스크립트로)



#### 1. HTML, CSS 로 미리 디자인하기 

```HTML
<div class="alert-box">알림창임</div>
```

```CSS
.alert-box {
    background-color: skyblue;
    padding: 20px;
    color: white;
    border-radius: 5px;
    /* 숨겨야 한다면, display: none; 해주기 */
    display: none;
  } 
```

![image-20230301153143972](C:\Users\areur\AppData\Roaming\Typora\typora-user-images\image-20230301153143972.png)





#### 2. 필요할 때 보여달라고 코드 작성하기 (자바스크립트로)

```html
<button 
        onclick="document.getElementById('alert').style.display = 'block';">버튼
</button>
```

