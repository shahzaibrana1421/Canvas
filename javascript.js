function AddHeader() {
  var headerText = document.getElementById("header").value;
  var c = document.getElementById("canvas-image");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "blue";
  ctx.font = "bold 15px sans-serif";
  const xh = document.getElementById ("hx-axis").value
  ctx.fillText(headerText, xh , 20);

  $('input').keyup(function() {
    context.clearRect(0, 0,  canvas.width,canvas.height);
    context.fillText($(this).val(), xh, 20);
 
  });
}

function Addcaption() {
  var bodyText = document.getElementById("caption").value;
  var c = document.getElementById("canvas-image");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "green";
  ctx.font = "bold 15px sans-serif";
  const xb = document.getElementById ("bx-axis").value
  ctx.fillText(bodyText, xb , 250);

  $('input').keyup(function() {
    context.clearRect(0, 0,  canvas.width,canvas.height);
    context.fillText($(this).val(), xb, 250);
 
  });
}


function AddFooter() {
  var footerText = document.getElementById("footer").value;
  var c = document.getElementById("canvas-image");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "black";
  ctx.font = "bold 15px sans-serif";
  const xf = document.getElementById ("fx-axis").value
  ctx.fillText(footerText, xf , 480);

  $('input').keyup(function() {
    context.clearRect(0, 0,  canvas.width,canvas.height);
    context.fillText($(this).val(), xf, 480);
 
  });
}


document.addEventListener("DOMContentLoaded", function()   {
  
  document.getElementById("header").addEventListener('keyup',function() {
    const value = document.getElementById("header").value
    document.getElementById('header-copied').innerHTML = value
  })

  document.getElementById("footer").addEventListener('keyup',function() {
    const value = document.getElementById("footer").value
    document.getElementById('footer-copied').innerHTML = value
  })

 document.getElementById("file-input").addEventListener('change', function() {
    var img = new Image();
    img.onload = draw;
    img.onerror = failed;
    img.src = URL.createObjectURL(this.files[0]);
  });

  function draw() {
    var canvas = document.getElementById('canvas-image');
    canvas.width = 800;
    canvas.height = 500;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(this, 0,0);

    $('input').keyup(function() {
      context.clearRect(0, 0,  canvas.width,canvas.height);
      context.fillText($(this).val(), xf);
   
    });
  }

  function failed() {
    console.error("The provided file couldn't be loaded as an Image media");
  }
  
});


let fileInput = document.getElementById("file");
var canvas = document.getElementById("canvas-image");
console.log(canvas)
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FFFFFF";
ctx.fillRect(0, 0, canvas.width, canvas.height);

console.log(document.getElementById("file-input"))
document.getElementById("file").addEventListener("change", function (event) {
  if (event.target.files) {
    let file = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      var image = new Image();
      image.src = e.target.result;
      image.onload = function (event) {
        var canvas = document.getElementById("canvas-image");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(0, 20, canvas.width, 115);
        ctx.drawImage(image, 0, 20, canvas.width, 115);
      };
    };
  }
});

function DownloadPic() {
  var canvas = document.getElementById("canvas-image");
  console.log(canvas)
  var image = canvas.toDataURL().replace("image/png", "image/octet-stream");
  var DownloadLink = document.createElement("a");
  DownloadLink.download = "canvas_image.png";
  DownloadLink.href = image;
  DownloadLink.click();
} 
