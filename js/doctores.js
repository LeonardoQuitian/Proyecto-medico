function mostrardoctores() {
    let doctores = []
    let localDoctores = localStorage.getItem("doctores")
    if(localDoctores){
        doctores = JSON.parse(localDoctores)
    }
    const tablaDoctores = document.getElementById("tabla-doctores")
    const cuerpoTabla = tablaDoctores.getElementsByTagName("tbody")[0]
    doctores.forEach(doctor => {
        let fila = cuerpoTabla.insertRow()
        let celdaNombredoctor = fila.insertCell()
        let celdaApellido = fila.insertCell()
        let celdaNumeroCedula = fila.insertCell()
        let celdaEspecialidad = fila.insertCell()
        let celdaConsultorio = fila.insertCell()
        let celdaCorreo = fila.insertCell()
        

        celdaNombredoctor.textContent = doctor.nombre
        celdaApellido.textContent = doctor.apellido
        celdaNumeroCedula.textContent = doctor.cedula
        celdaEspecialidad.textContent = doctor.especialidad
        celdaConsultorio.textContent = doctor.consultorio
        celdaCorreo.textContent = doctor.correo
        
    });
}

mostrardoctores()