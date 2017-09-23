function EditarDatos(){
    function EditarDatos( nuevoTitulo, nuevoDesc){
        if (nuevoTitulo == "") {
            Titulo = Titulo;
        }
        else { Tittulo == nuevoTitulo}
    
        if (nuevoDesc == "") {
            Descripcion = Descripcion;
        }
        else { Descripcion == nuevDesc}
        
    
    }

    //Tareas[i].estado=(Tareas[i].estado=="ACTIVO")?"CERRADO":"ACTIVO";
    
    /** 
    do {
        var Titulo = prompt("Editar Titulo");
        
    } while (Titulo == "");
    
    do {
        var Descripcion = prompt("Editar Descripcion");
        
    } while (Descripcion == "");

    document.getElementById("PruebaTitulo").innerHTML = Titulo;  era prueba
    document.getElementById("PruebaDescripcion").innerHTML = Descripcion;  era prueba
    **/
}



function editarTarea(id, nuevoTitulo, nuevDesc) {
    for (var i = 0; i < Tareas.length; i++) { 
    	if(Tareas[i].id == id) {
    	Tareas[i].titulo=nuevTitulo;
			
    	}
}
}


function mostrarTareas(Tareas) {
    var TareaFila =  function () {
        var columna = "";
        var beditar = "<input type='button' onclick='ClaseTodo.cambiarEstado()' value='EDITAR'>";
        var beliminar = "<input type='button' onclick='removerTareas(id)' value='ELIMINAR'>";
        var bcambiarestado = "<input type='button' onclick='cambiarEstado(id)' value='CAMBIAR ESTADO'>";

        for (var i= 0 < tareas.length; i++ ) {
            columna = columna + "<td>" + Tareas[i] + "</td>" + "<td>" + beditar + beliminar  + bcambiarestado + "</td>";
        }    

        fila == "<tr>" + columna + "</tr>"
        return fila;    
    }
    document.getElementById("cuerpoTareas").innerHTML = TareaFila();

}













-----------------------

function mostrar(c) {
    
     document.getElementById("lblNombre").innerHTML = c.Nombre; 
     document.getElementById("lblApellido").innerHTML = c.Apellido; 
     document.getElementById("lblTipDoc").innerHTML = c.TpDocumento; 
     document.getElementById("lblNroDocumento").innerHTML = c.NroDocumento; 
     document.getElementById("lblTelefono").innerHTML = c.Telefono; 
     document.getElementById("lblEmail").innerHTML = c.Email; 
 }
