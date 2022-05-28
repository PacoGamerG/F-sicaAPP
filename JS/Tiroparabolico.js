
let x0, y0, t, g, x, y;

    x0 = 105;
    y0 = 105;
    t = 0;
    g = 9.81; 
  
function reFresh() {
  location.reload(true)
  }

  /* Establece el tiempo 1 minuto = 60000 milliseconds. */
  window.setInterval("reFresh()",100000); 
    
// La función setup se ejecuta una sola vez
function setup() {
  createCanvas(windowWidth, 600); //Se genera el entorno visual de 400x400 pixeles
}

// la función draw se repite una y otra vez
function draw() {
  var angulo0 = parseInt(document.getElementById('angulo').value);
  var v0 = parseInt(document.getElementById('velocidad_i').value);
  x = x0 + v0 * cos(angulo0 * PI / 180) * t;
  y = y0 + v0 * sin(angulo0 * PI / 180) * t - 0.5 * g * t * t; 
  
  frameRate(60);
  stroke(1);
  fill(0, 0, 0);
  ellipse(x, height - y, 16, 16);

  t += 0.1;

  if (height - y > height || x > width || x < 0) {
    t = 0;
  }
}
