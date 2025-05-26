//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eEmail = document.getElementById("email")
    let vEmail = eEmail.value
    let eErrorNombre = document.getElementById("errorNombre")
    let eErrorEmail = document.getElementById("errorEmail")
    let validacionN = vTexto(eNombre, vNombre, eErrorNombre)
    let validacionE = validarEmail(eEmail,vEmail,eErrorEmail)
    if (validacionN == "exito" && validacionE =="exito"){
        let p = {
            "nombre": vNombre, 
            "email":vEmail} 
        personas.push(p)    
        console.log(personas) 
        eNombre.value = ""
        eEmail.value = ""
        eNombre.style.background = ""
        eEmail.style.background = ""
        eEmail.style.color = ""
        eNombre.style.color = "" 
    }
    
    cargarDatos()


}

function vTexto(elemento,valor, error){
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/
    if (valor.length > 0 && regex.test(valor)){
        elemento.style.background = "green"
        elemento.style.color = "white"
        error.innerText = ""
        return "exito"
    } else{
        elemento.style.background = "red"
        elemento.style.color = "white"
        error.innerText = "Debe contener solo letras y no estar vacio"
        return "fallo"
    }

}

function validarEmail(elemento, valor, error){
    let regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.(cl)$/i
    if (regex.test(valor) && valor.length > 0){
        elemento.style.background = "green"
        elemento.style.color = "white"
        error.innerText = ""
        return "exito"
        
    }
    else{
        elemento.style.background = "red"
        elemento.style.color = "white"
        error.innerText = "Debe tener solo un @ y terminar en .cl"
        return "fallo"
    }
}


function cargarDatos(){
    let mapPersonas = personas.map((p,index)=>{
        return "<tr><td>"+p.nombre+"</td><td>"+p.email+"</td><td><button onclick='actualizarFormulario("+index+")'>Actualizar</button><button type='button' value='"+index+"' onclick='eliminar("+index+")'>Eliminar</button></td></tr>"
    })
    let cuerpoTabla = document.getElementById("cuerpoTabla")
    let cuerpoTablaStr = mapPersonas.join("")
    cuerpoTabla.innerHTML = cuerpoTablaStr
}

function eliminar(indice){
    personas = personas.filter((p, index)=>{
        if (index != indice){
            return p
        }
    })
    cargarDatos()
    }
    

function actualizarFormulario(indice){
    let formularioActualizar = document.getElementById("formularioActualizar")
    let eNombreA = document.getElementById("nombre1")
    let eEmailA = document.getElementById("email1")
    formularioActualizar.classList.remove("visibilidad")
    let persona = personas.filter((p, index)=>{
        if (indice == index){
            return p
        }
    })
    eNombreA.value =persona[0].nombre
    eEmailA.value = persona[0].email 
    let btnActualizar = document.getElementById("btn-actualizar")
    btnActualizar.value = indice
}


function actualizar(){
    let eNombreA = document.getElementById("nombre1")
    let vNombre = eNombreA.value
    let eEmailA = document.getElementById("email1")
    let vEmail = eEmailA.value
    let btnActualizar = document.getElementById("btn-actualizar")
    let indice = btnActualizar.value
    let formularioActualizar = document.getElementById("formularioActualizar")
    let eErrorNombre = document.getElementById("errorNombre1")
    let eErrorEmail = document.getElementById("errorEmail1")
    let validacionN = vTexto(eNombreA, vNombre, eErrorNombre)
    let validacionE = validarEmail(eEmailA, vEmail, eErrorEmail)
    let formularioVisibilidad = false

    if (validacionN == "exito" && validacionE == "exito") {
        personas = personas.map((p, index) => {
            if(index == indice){
                formularioVisibilidad = true
                return {
                    nombre: vNombre,
                    email: vEmail
                }
            } else {
                return p
            }
        })
        if(formularioVisibilidad){
            formularioActualizar.classList.add("visibilidad")
        }

        cargarDatos()
    }
}
