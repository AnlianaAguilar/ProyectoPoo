//objeto global
var persona = {
    //atributos / características / propiedades
    nombre:'',
    apellido:'',
    correo:'',
    celular:'',
    // métodos / acciones / comportamientos
    saludar: function(){
        let mensaje = `Hola me llamo ${this.nombre} ${this.apellido}, gusto en saludar`;
        return mensaje;
    },
    proporcionarDatosContacto: function(){
        let datosContacto = `Mis datos de contacto son correo; ${this.correo}, y mi celular es ${this.celular}`;
        return datosContacto;
    },
};


function asignarDatosAlObjeto(unNombre,unApellido,unCorreo,unCelular){
    persona.nombre = unNombre;
    persona.apellido = unApellido;
    persona.correo = unCorreo;
    persona.celular = unCelular;
}

function atraparDatosDelForm(){
    let elNombre = document.getElementById('txtNombre').value;
    let elApellido = document.getElementById('txtApellido').value;
    let elCorreo = document.getElementById('txtCorreo').value;
    let elCelular = document.getElementById('txtCelular').value;
    // asignar los datos atrapados del Form al objeto
    asignarDatosAlObjeto(elNombre, elApellido, elCorreo, elCelular);
    alert('Los datos fueron almacenados en un objeto');
}


function presentarInformacion(){
    let elParrafoSaludo = document.getElementById('parrafoSaludo');
    elParrafoSaludo.innerText = persona.saludar();

    let elParrafoContacto = document.getElementById('parrafoContacto');
    elParrafoContacto.innerText = persona.proporcionarDatosContacto();
}


function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', atraparDatosDelForm);

    let elBotonMostrar = document.getElementById('btnMostrarDatos');
    elBotonMostrar.addEventListener('click', presentarInformacion);
}