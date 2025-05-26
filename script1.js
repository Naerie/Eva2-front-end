//validar nombre, debe contener solo letras y no ser vacio
//validar correo: Debe tener solo un @ y terminar en .cl

let personas = []

function validar(){
    let eNombre = document.getElementById("nombre")
    let vNombre = eNombre.value
    let eEmail = document.getElementById("email")
    let vEmail = eEmail.value
    let eErrorNombre = document.getElementById("errorNombre")
    let vErrorNombre = eErrorNombre.value
    let eErrorEmail = document.getElementById("errorEmail")
    let validacionN = vTexto(eNombre, vNombre, eErrorNombre)
    let validacionE = validarEmail(eEmail,vEmail,eErrorEmail)
    if (validacionN == "exito" && validacionE =="exito"){
        let p = {"nombre": vNombre, "email":vEmail} 
    }
    
    personas.push(p)    
    console.log(p)
    vNombre = ""
    vEmail = ""
    cargarDatos()


}

function vTexto(elemento,valor, error){
    let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
    if (valor.length > 0 && regex.test(valor)){
        elemento.style.background = "green"
        elemento.style.color = "white"
        error.innerText = ""
        return "exito"
    } else{
        elemento.style.background = "red"
        elemento.style.color = "white"
        error.innerText = "Debe contener solo letras y no ser vacio"
        return "fallo"
    }

}

function validarEmail(elemento, valor, error){
    let regex = /^[a-z0-9._%+\-]+@[a-z0-9.\-]+\.(cl)$/
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


// function cargarDatos(){
//     let mapPersonas = personas.map((p,index)=>{
//         return ""
//     })
// }

// 



// }

// function eliminar(indice){
//     for personas.filter(p, indice){
//         if (index != indice){
//             return p
//         }
//     }
    

// }

// function actualizarFormulario(){

// }
//  function actualizar(){

//  }