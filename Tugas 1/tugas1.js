var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height =window.innerHeight;
document.body.appendChild(canvas);



// gunungs
ctx.beginPath(); 
ctx.moveTo(200, 50); 
ctx.lineTo(100, 300);
ctx.lineTo(300, 300);
ctx.closePath();

ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke(); 


ctx.beginPath();
ctx.moveTo(350, 50);  
ctx.lineTo(250, 300);
ctx.lineTo(450, 300);
ctx.closePath(); 

ctx.fillStyle = "green";
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();



// matahari
ctx.beginPath();
ctx.arc(275,150,30, 0, 2*Math.PI);
ctx.fillStyle="orange";
ctx.fill();


// pembatas lagnit dan tanah
ctx.beginPath();
ctx.moveTo(0,300);
ctx.lineTo(1000,300);
ctx.strokeStyle="black";
ctx.lineWidth=2;
ctx.stroke();




// untuk jalan2
ctx.beginPath();
ctx.moveTo(275, 302);  
ctx.lineTo(25,500);
ctx.lineTo(80, 500);
ctx.closePath();

ctx.fillStyle = "gray";
ctx.fill();
ctx.strokeStyle = 'black';
ctx.stroke();



// ctx.beginPath();
// ctx.moveTo(275,305);
// ctx.rect(250,400,20,20);




// ctx.fillStyle="black";
// ctx.fill();

// ctx.beginPath();
// ctx.moveTo(300);  
// ctx.lineTo(25,500);
// ctx.lineTo(80, 500);
// ctx.fillStyle="black";
// ctx.fill();