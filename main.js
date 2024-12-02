canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
explorador_ancho=100;
explorador_alto=90; 

background_image = "f5551e140164015.Y3JvcCw0ODAwLDM3NTQsMCww.jpg";

explorador_image = "unnamed.png";

explorador_x = 10;
explorador_y = 10;

//Crea la función "add()"
 
    background_imgTag= new Image();          //Define la variable con una nueva imagen
    background_imgTag.onload=uploadBackground;   // Define una función para cargar esta variable
    background_imgTag.src= background_image;    // Carga la imagen

    explorador_imgTag = new Image();    //Define la variable con una nueva image
    explorador_imgTag.onload= uploadExplorador;      // Define una función para cargar esta variable
    explorador_imgTag.src=explorador_image;         // Carga la imagen

//Crea una función "uploadBackground()".
                              
    function uploadBackground(){
        ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);    //Dibuja la imagen de fondo
 }
//Crea una función "uploadrover()".

    function uploadExplorador(){
        ctx.drawImage(explorador_imgTag, explorador_x, explorador_y, explorador_ancho, explorador_alto);      //Dibuja la imagen del explorador
    }    

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
    if(keyPressed=="38"){
        up();
    }
    //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
    if(keyPressed=="40"){
        down();
    }
    if(keyPressed=="37"){
        left();
    }
    if(keyPressed=="39"){
        right();
    }

    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
if (explorador_y >=0){
    explorador_y = explorador_y -10; // cada que se presiona la tecla flecha arriba, se
    uploadBackground(); // aca se recarga la imagen de fondo 
    uploadExplorador(); // aca se recarga la imagen del explorador
}
}
function down(){
    if (explorador_y <=500){
        explorador_y = explorador_y + 10; // cada que se presiona la tecla flecha abajo, se
        uploadBackground(); // aca se recarga la imagen de fondo 
        uploadExplorador(); // aca se recarga la imagen del explorador
}
}
function right(){ // puede hacer esta función?? ahora con -x
    if (explorador_x >=-10   && explorador_x <=700 ){
        explorador_x = explorador_x + 10; // cada que se presiona la tecla flecha abajo, se
        uploadBackground(); // aca se recarga la imagen de fondo 
        uploadExplorador(); // aca se recarga la imagen del explorador
}
}
function left(){
    if (explorador_x <=710 && explorador_x >=0){
        explorador_x = explorador_x - 10; // cada que se presiona la tecla flecha abajo, se
        uploadBackground(); // aca se recarga la imagen de fondo 
        uploadExplorador(); // aca se recarga la imagen del explorador  
}
}