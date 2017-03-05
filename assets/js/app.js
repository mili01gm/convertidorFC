var farenheit = document.getElementById('farenheit');
var celsius = document.getElementById('celsius');
var botonC = document.getElementById('botonC');
var botonF = document.getElementById('botonF');

// F to C -----> f to c -32 then *5 then /9
botonC.addEventListener('click',function(){
  //alert("hola");
  var result1 = ((farenheit.value) -32)*(5/9);
  celsius.value = result1.toFixed(2);
})

// C to F -------> c to f *9 then /5 then +32

botonF.addEventListener('click',function(){
  var result2 = ((celsius.value*9)/5)+32;
  farenheit.value = result2.toFixed(2);
})
