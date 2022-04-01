 const canvas = document.getElementById("jsCanvas");//width, height 값 필수
//  canvas.width = 700;
canvas.width = document.getElementsByClassName("canvas")[0].offsetWidth;
//  canvas.height = 700;
canvas.height = document.getElementsByClassName("canvas")[0].offsetHeight;

// canvas MDN document : https://developer.mozilla.org/ko/docs/Web/API/Canvas_API
 const ctx = canvas.getContext("2d");

 const INITIAL_COLOR = "#2c2c2c"
 ctx.strokeStyle = INITIAL_COLOR;
 ctx.lineWidth = 2.5;
 ctx.fillStyle = "white";
 ctx.fillRect(0,0,canvas.width, canvas.height);

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

//////  Change Color
const colors = document.getElementsByClassName("jsColor");
//  console.log(Array.from(colors))
Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

function handleColorClick(event) {
    // console.log('color change')
    // console.log(event.target.style);
    const color = event.target.style.backgroundColor;
    // console.log(color)
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

////// Change Stroke Width
const range = document.getElementById("jsRange");

if (range) {
    range.addEventListener("input", handleRangeChange);
}

function handleRangeChange(event) {
    // console.log(event)
    // console.log(event.target.value)
    const storkeSize = event.target.value;
    ctx.lineWidth = storkeSize;
}

///// Filling Mode
let filling = false;

const mode = document.getElementById("jsMode")
if (mode) {
    mode.addEventListener("click", handleModeClick);
}
function handleModeClick() {
    if(filling === true) {
        filling = false;
        mode.innerText = "Fill";
        
    } else {
        filling = true;
        mode.innerText = "Paint";
    }//Change button text
}
// ctx.fillRect(30,20,60,40); //사각형 생성
// ctx.fillStyle = "green"; //fill color 지정

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0,0,canvas.width, canvas.height);
        console.log(ctx.fillStyle);
    }
}

////// SAVE IMAGE
const saveBtn = document.getElementById("jsSave");


function handleRightClick(event) {
    event.preventDefault();
  }//우클릭 방지

 if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
 }
 function handleSaveClick() {
    const image = canvas.toDataURL(); //image data --> URL
    const link = document.createElement("a");// create link
    link.href = image;//image data 값 href 지정
    link.download = "내가그린기린그림🎨"; //a 태그 download 속성 사용
    link.click();//JS로 클릭 조종
    0


    
  }
if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleRightClick);
  }