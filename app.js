 const canvas = document.getElementById("jsCanvas");

 let painting = false;

 function onMouseMove(event) {
    // console.log(event);
    const x = event.offsetX;
    const y = event.offsetY;
    // console.log(x, y)
 }
 function onMouseDown(event) {
    painting = true;
    // console.log('painting')
 }
 function onMouseUp(event) {
     stopPainting();

 }
 function stopPainting() {
     painting = false;
    //  console.log('stop painting')
 }
 if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup",onMouseUp);
    canvas.addEventListener("mouseleave", stopPainting);
 }
