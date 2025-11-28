// Selecciona el botón de hamburguesa

const btn = document.querySelector(".menu-toggle");

// Selecciona el menú horizontal

const menu = document.querySelector(".menu-horizontal");

// Al hacer clic en el botón de hamburguesa

btn.addEventListener("click", () => {
  // Alterna (agrega o quita) la clase "active" en el menú

  // Esto hace que se muestre o se oculte

  menu.classList.toggle("active");

  // (opcional) También puedes alternar una clase en el botón si quieres cambiar su apariencia

  // btn.classList.toggle("open");
});

// Evento al enviar el formulario de contacto

/* document

 .getElementById("formularioContacto")

 .addEventListener("submit", function (e) {

  e.preventDefault(); // Evita el envío real del formulario



  // Muestra el mensaje de confirmación

  const mensaje = document.getElementById("mensajeEnviado");

  mensaje.style.display = "block";



  // Opcional: limpiar el formulario

  this.reset();



  // Ocultar mensaje después de 5 segundos

  setTimeout(() => {

   mensaje.style.display = "none";

  }, 5000);

 }); */

// VALIDACION DE FORMULARIO

const form = document.querySelector('form[name="frm"]');

form.addEventListener("submit", (event) => {
  const fname = form.elements["nombres"].value;
  const flastname = form.elements["apellidos"].value;
  const femail = form.elements["email"].value;
  const fphone = form.elements["telefono"].value;

  if (!fname || !flastname || !femail || !fphone) {
    event.preventDefault();
    alert("Por favor, complete todos los campos del formulario");
  } else if (!validateEmail(femail)) {
    event.preventDefault();
    alert("Por favor, ingrese un correo válido");
  } else if (!validatePhone(fphone)) {
    event.preventDefault();
    alert("El número de teléfono debe tener solo 9 numeros (no letras)");
  } else {
    const confirmation = confirm(
      "Está a punto de enviar el formulario, ¿Desea continuar?"
    );
    if (!confirmation) {
      event.preventDefault();
    } else {
      alert("Formulario enviado correctamente");
    }
  }
});

//CREAR FUNCION validateEmail(femail)

function validateEmail(femail) {
  const re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;

  return re.test(String(femail).toLowerCase());
}
//CREAR FUNCION validatePhone
function validatePhone(fphone) {
  const re = /^[0-9]{9}$/;
  return re.test(fphone);
}

// login
function validarLogin(event) {
  event.preventDefault();
  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password").value;

  const loginModal = document.getElementById("login-modal");
  const mainContentWrapper = document.getElementById("main-content-wrapper");

  if (passwordInput.toLowerCase() === CLAVE_SECRETA) {
    alert("¡Acceso concedido! Bienvenido.");

    if (loginModal && mainContentWrapper) {
      loginModal.classList.add("hidden");
      mainContentWrapper.style.display = "block";
    }
  } else {
    alert("Clave incorrecta. Inténtalo de nuevo.");
    document.getElementById("password").value = "";
  }

  return false;
}
