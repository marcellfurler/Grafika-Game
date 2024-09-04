var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 400;
document.body.appendChild(canvas);

var sunY = 230; 

function drawScene() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Langit
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, canvas.width, 300);

    // Tanah
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, canvas.width, canvas.height - 300);

    // Matahari
    ctx.beginPath();
    ctx.arc(275, sunY, 30, 0, 2 * Math.PI);
    ctx.fillStyle = "orange";
    ctx.fill();


    // Gunungs
    ctx.beginPath(); 
    ctx.moveTo(200, 50); 
    ctx.lineTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.closePath();
    ctx.fillStyle = "darkgreen";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke(); 

    ctx.beginPath();
    ctx.moveTo(350, 50);  
    ctx.lineTo(250, 300);
    ctx.lineTo(450, 300);
    ctx.closePath(); 
    ctx.fillStyle = "darkgreen";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();



    // Pembatas langit dan tanah
    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(1000, 300);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();

    // Jalan
    ctx.beginPath();
    ctx.moveTo(275, 302);  
    ctx.lineTo(25, 500);
    ctx.lineTo(80, 500);
    ctx.closePath();
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.stroke();
}

function animateSunrise() {
    if (sunY > 60) {  
        sunY -= 1;
        drawScene(); 
        requestAnimationFrame(animateSunrise); 
    }
}

animateSunrise();
