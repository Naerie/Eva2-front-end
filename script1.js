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
        personas.push(p)    
        console.log(p)
    }
    cargarDatos()
    vNombre = ""
    vEmail = ""


}

function vTexto(elemento,valor, error){
    let largo = valor.lenght
    if (largo > 0){
        elemento.style.background = "green"
        elemento.style.color = "white"
        return "exito"
    } else{
        elemento.style.background = "red"
        elemento.style.color = "white"
        error.innerText = "debe contener solo letras y no ser vacio"
        return "fallo"
    }

}

function validarEmail(elemento, valor, error){
    let pattern = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.cl$"
    if (valor != pattern){
        elemento.style.background = "red"
        elemento.style.color = "white"
        error.innerText = "Debe tener solo un @ y terminar en .cl"
        return "fallo"
    }
    else{
        elemento.style.background = "green"
        elemento.style.color = "white"
        return "exito"
    }
}

function cargarDatos(){
    let mapPersonas = personas.map((p,index)=>){

    }



}

function eliminar(indice){
    for personas.filter(p, indice){
        if (index != indice){
            return p
        }
    }
    

}

function actualizarFormulario(){

}
 function actualizar(){

 }