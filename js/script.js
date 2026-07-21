//===========================
// CAMBIAR COLOR DEL MENÚ
//===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.style.background="#082b63";
        header.style.transition="0.4s";

    }else{

        header.style.background="#0b3d91";

    }

});//===========================
// BOTÓN VOLVER ARRIBA
//===========================

const boton = document.getElementById("btnSubir");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 300){

        boton.style.display="block";

    }else{

        boton.style.display="none";

    }

});

boton.addEventListener("click", ()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});//===========================
// ANIMACIÓN DE TARJETAS
//===========================

const tarjetas = document.querySelectorAll(".card");

const mostrar = ()=>{

    tarjetas.forEach(card=>{

        const posicion = card.getBoundingClientRect().top;

        const pantalla = window.innerHeight;

        if(posicion < pantalla-100){

            card.style.opacity="1";
            card.style.transform="translateY(0px)";

        }

    });

}

window.addEventListener("scroll",mostrar);

mostrar();tarjetas.forEach(card=>{

    card.style.opacity="0";

    card.style.transform="translateY(50px)";

    card.style.transition=".8s";

});//===========================
// GALERÍA
//===========================

const imagenes = document.querySelectorAll(".imagenes img");

imagenes.forEach(img=>{

    img.addEventListener("click",()=>{

        const ventana = window.open("");

        ventana.document.write(

        "<img src='"+img.src+"' style='width:100%'>"

        );

    });

});//===========================
// BIENVENIDA
//===========================

window.onload=()=>{

console.log("Proyecto cargado correctamente");

}//===========================
// MODO OSCURO
//===========================

const modo = document.createElement("button");

modo.innerHTML="🌙";

modo.id="modo";

document.body.appendChild(modo);

modo.style.position="fixed";
modo.style.bottom="30px";
modo.style.left="30px";
modo.style.width="55px";
modo.style.height="55px";
modo.style.borderRadius="50%";
modo.style.border="none";
modo.style.cursor="pointer";
modo.style.background="#222";
modo.style.color="white";
modo.style.fontSize="22px";
modo.style.boxShadow="0 0 10px rgba(0,0,0,.4)";let oscuro=false;

modo.onclick=()=>{

oscuro=!oscuro;

if(oscuro){

document.body.style.background="#151515";

document.body.style.color="white";

modo.innerHTML="☀";

}else{

document.body.style.background="#f4f7fa";

document.body.style.color="#333";

modo.innerHTML="🌙";

}

}//===========================
// EFECTO BOTÓN
//===========================

const principal=document.querySelector(".boton");

principal.addEventListener("mouseover",()=>{

principal.style.transform="scale(1.1)";

});

principal.addEventListener("mouseout",()=>{

principal.style.transform="scale(1)";

});//===========================
// CONTADOR
//===========================

let visitas=sessionStorage.getItem("visitas");

if(!visitas){

visitas=1;

}else{

visitas++;

}

sessionStorage.setItem("visitas",visitas);

console.log("Visitas durante esta sesión:",visitas);const objetivos = {

magnitud:5.2,

profundidad:50,

zonas:8

};

function animar(id,final,incremento){

let valor=0;

const elemento=document.getElementById(id);

const intervalo=setInterval(()=>{

valor+=incremento;

if(valor>=final){

valor=final;

clearInterval(intervalo);

}

elemento.innerHTML=valor;

},40);

}

window.addEventListener("load",()=>{

animar("magnitud",objetivos.magnitud,0.1);

animar("profundidad",objetivos.profundidad,1);

animar("zonas",objetivos.zonas,1);

});const secciones=document.querySelectorAll("section");

const aparecer=new IntersectionObserver((entradas)=>{

entradas.forEach(entrada=>{

if(entrada.isIntersecting){

entrada.target.style.opacity="1";

entrada.target.style.transform="translateY(0)";

}

});

});

secciones.forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="1s";

aparecer.observe(sec);

});