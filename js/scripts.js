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