window.onload=inicio;
       document.write('<img class="img1" src="img/arbol-de-navidad.png" alt="">')
       document.write('<img class="img2" src="img/campana-de-navidad.png" alt="">')
       document.write('<img class="img3" src="img/monigote-de-nieve.png" alt="">')
       document.write('<img class="img4" src="img/papa-noel.png"alt="">')
var imagenes = ["arbol-de-navidad.png","campana-de-navidad.png","monigote-de-nieve.png", "papa-noel.png"];
var cantidad =imagenes.length;
var orden=[];
function inicio (){
    document.getElementById("boton1").onclick = mas;
    document.getElementById("boton2").onclick = mostrar_todo;
}
function mas (){
    if (orden.length==imagenes.length){
        orden=[];
        document.getElementById("caja").innerHTML="";
        document.getElementById("boton2").disabled = true;  
    }
    do {
        r = Math.floor(Math.random() * cantidad);
    } while (orden.indexOf(r)>=0)
    orden.push(r);
    document.getElementById("caja").innerHTML += `<div><img src="img/${imagenes[r]}></div>`;
    if(orden.length==imagenes.length){
        document.getElementById("boton2").disabled =false;
    }
}
function mostrar_todo(){
    document.getElementById("caja").innerHTML=""
    for( let k=imagenes.length- 1;k>=0;k++)
    {
        document.getElementById("caja").innerHTML += `<div><img src="img/${imagenes[orden[k]]}></div>`;
    }
}


