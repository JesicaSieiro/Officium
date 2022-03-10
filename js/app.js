window.addEventListener('scroll',function(){
    /* obtengo todos los elementos */
    let textoPortones=document.getElementById('textoPortones');
    let textoPintura=document.getElementById('textoPintura');
    let textoPersianas=document.getElementById('textoPersianas');

    let carruselPortones=document.getElementById('carruselPortones');
    let carruselPintura=document.getElementById('carruselPintura');
    let carruselPersiana=document.getElementById('carruselPersiana');

    /* obtengo la posicion de cada elemento */
  /*   let posiciontxtPorton=textoPortones.getBoundingClientRect().top;
    let posiciontxtPintura=textoPintura.getBoundingClientRect().top;
    let posiciontxtPersiana=textoPersianas.getBoundingClientRect().top; */

    let posicioncarruselPorton=carruselPortones.getBoundingClientRect().top;
    let posicioncarruselPersiana=carruselPersiana.getBoundingClientRect().top;
    let posicioncarruselPintura=carruselPintura.getBoundingClientRect().top;

    /* obtengo el tamano de la pantalla */
    let tamPantalla=this.window.innerHeight/3;
    //let anchoPantalla=this.window.innerWidth/3;

    if(screen.width >= 1024){
       // console.log(anchoPantalla);
        if(posicioncarruselPorton < tamPantalla ){
            textoPortones.style.animation='ingresoDer 1s';
            textoPortones.style.setProperty('transform','translate(-50px, 1px)');
            textoPortones.style.setProperty('opacity','1');
        }
        if(posicioncarruselPintura < tamPantalla ){
            textoPintura.style.animation='ingresoIzq 1s';
            textoPintura.style.setProperty('transform','translate(60px, 15px)');
            textoPintura.style.setProperty('opacity','1');
        }
        if(posicioncarruselPersiana < tamPantalla ){
            textoPersianas.style.animation='ingresoDer 1s';
            textoPersianas.style.setProperty('transform','translate(-50px, 1px)');
            textoPersianas.style.setProperty('opacity','1');
        }
    }
    else{
       
        if(posicioncarruselPorton < tamPantalla ){
            textoPortones.style.animation='ingresoDer 1s';
            textoPortones.style.setProperty('transform','translate(0px, 15px)');
            textoPortones.style.setProperty('opacity','1');
        }
        if(posicioncarruselPintura < tamPantalla ){
            textoPintura.style.animation='ingresoIzq 1s';
            textoPintura.style.setProperty('transform','translate(0px, 15px)');
            textoPintura.style.setProperty('opacity','1');
        }
        if(posicioncarruselPersiana < tamPantalla ){
            textoPersianas.style.animation='ingresoDer 1s';
            textoPersianas.style.setProperty('transform','translate(0px, 15px)');
            textoPersianas.style.setProperty('opacity','1');
        }
    }
   

})