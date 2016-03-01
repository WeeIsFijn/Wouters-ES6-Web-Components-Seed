import {ShaderProgram} from 'GL/Shaders/ShaderProgram.js';

export class WebGL {
 
 constructor({canvas}) {

  let gl;

  try {
    gl = canvas.getContext("experimental-webgl");
    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;
  } catch (err) {
    console.log('An error occurred initializing webGL');
    console.log(err);
  }

  if (!gl) {
    alert('WebGl could not be initialized.');
  }

  gl.clearColor(1.0, 0.0, 0.0, 0.0);
  gl.enable(gl.DEPTH_TEST);

  // setup a GLSL program
  let program = new ShaderProgram(gl, "2d-vertex-shader", "2d-fragment-shader");
  gl.useProgram(program);
   
  // look up where the vertex data needs to go.
  let positionLocation = gl.getAttribLocation(program, "a_position");
   
  // Create a buffer and put a single clipspace rectangle in
  // it (2 triangles)
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
          -1.0, -1.0,
           1.0, -1.0,
          -1.0,  1.0,
          -1.0,  1.0,
           1.0, -1.0,
           1.0,  1.0]),
      gl.STATIC_DRAW);
  gl.enableVertexAttribArray(positionLocation);
  gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
   
  // draw
  gl.drawArrays(gl.TRIANGLES, 0, 6);

 }


}