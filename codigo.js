let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let contrasena = document.getElementById("contrasena");
let formulario = document.getElementById("formulario");
let margenInput = document.querySelector(".form_input>input");

formulario.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});


const validateInputs = () => {
  let iconoC = document.querySelector(".icono_c");
  let textC = document.querySelector(".textC");

  let iconoN = document.querySelector(".icono_n");
  let textN = document.querySelector(".textN");

  let iconoE = document.querySelector(".icono_e");
  let textE = document.querySelector(".textE");

  let iconoA = document.querySelector(".icono_a");
  let textA = document.querySelector(".textA");

    if(nombre.value === '') {
        iconoN.style.display="flex";
        textN.style.display="block";
        nombre.style.border="1px solid hsl(0, 100%, 74%)";
        margenInput.style.marginTop="0px";
        nombre.value=" ";
    } else {
        nombre.style.border="1px solid hsl(28, 10%, 26%)";
        iconoN.style.display="none";
        textN.style.display="none";
    };
    if(apellido.value === '') {
        iconoA.style.display="flex";
        textA.style.display="block";
        apellido.style.border="1px solid hsl(0, 100%, 74%)";
        apellido.value=" ";
    } else {
        iconoA.style.display="none";
        textA.style.display="none";
        apellido.style.border="1px solid hsl(28, 10%, 26%)";
    }
    if(correo.value === '') {
        iconoE.style.display="flex";
        textE.style.display="block";
        correo.style.border="1px solid hsl(0, 100%, 74%)";
        correo.style.color="hsl(0, 100%, 74%)";
        correo.value="email@example.com";
    } else{
        iconoE.style.display="none";
        textE.style.display="none";
        correo.style.border="1px solid hsl(28, 10%, 26%)";
    }
    if(contrasena.value === '') {
        contrasena.style.border="1px solid hsl(0, 100%, 74%)";
        iconoC.style.display="flex";
        textC.style.display="block";
        contrasena.value=` `;
        contrasena.style.color="#fff";
    } else {
        iconoC.style.display="none";
        textC.style.display="none";
        contrasena.style.border="1px solid hsl(28, 10%, 26%)";
    }
};
