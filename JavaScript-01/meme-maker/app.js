const canvas = document.querySelector("canvas");
// 그림을 그리기 위해서는 context를 얻어야 한다.
// context = 브러쉬
const ctx = canvas.getContext("2d")
// width, height를 자바스크립트에서만 수정하기.
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(50, 50, 100, 200);
