 const canvas = document.getElementById("jsCanvas");//width, height 값 필수
//  canvas.width = 700;
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
//  canvas.height = 700;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// canvas MDN document : https://developer.mozilla.org/ko/docs/Web/API/Canvas_API
 const ctx = canvas.getContext("2d");
 ctx.strokeStyle = "#2c2c2c";
 ctx.lineWidth = 2.5;

 let painting = false;

 function onMouseMove(event) {
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y)
    if(!painting) {
        ctx.beginPath();//경로 생성
        ctx.moveTo(x, y);//선 시작 좌표
    } else {
        ctx.lineTo(x, y);//선 끝 좌표
        ctx.stroke();//선 그리기
    }
 }
 function startPainting(event) {
    painting = true;
 }
 function stopPainting() {
     painting = false;
    //  console.log('stop painting')
 }
 if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
 }
