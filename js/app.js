"use strict"

//FORMULARIOS
const form_añadir = document.querySelector("#datos-formu");
const form_buscar = document.querySelector("#datos-busqueda");
const form_editar = document.querySelector("#datos-editar");

//INPUTS DEL FORMULARIO DE NUEVA HAMBURGUESA
const nombre = document.querySelector("#nombre");
const imagen = document.querySelector("#imagen");
const precio = document.querySelector("#precio");
const peso = document.querySelector("#peso");
const tipo_carne = document.querySelector("#tipo_carne");
const ingredientes = document.querySelector("#ingredientes");
const lechuga = document.querySelector("#lechuga");
const url = document.querySelector("#url");
const b_nuevo = document.querySelector("#nuevo");

//DIV DEL MODAL BOOSTRAP PARA PODER QUITARLO Y PONERLO
const editar_modal = document.querySelector("#editarModal");

//INPUTS DEL FORMULARIO DE EDITAR HAMBURGUESA
const editar_nombre = document.querySelector("#editar_nombre");
const editar_imagen = document.querySelector("#editar_imagen");
const editar_precio = document.querySelector("#editar_precio");
const editar_peso = document.querySelector("#editar_peso");
const editar_tipo_carne = document.querySelector("#editar_tipo_carne");
const editar_ingredientes = document.querySelector("#editar_ingredientes");
const editar_lechuga = document.querySelector("#editar_lechuga");
const editar_url = document.querySelector("#editar_url");
const editar_clave_hamburguesa = document.querySelector("#claveHamburguesa")
const b_editar = document.querySelector("#editar");

//INPUTS DEL FORMULARIO DE BUSCAR
const busqueda = document.querySelector("#busqueda");
const buscar = document.querySelector("#search-addon");

//INPUTS DE ORDENACION
const ord_asc_fecha = document.querySelector("#ordenar_asc");
const ord_desc_precio = document.querySelector("#ordenar_desc");

//TABLA DE HAMBURGUESAS
const tabla_datos = document.querySelector("#datos-list");

//GESTION DE BUSQUEDA
buscar.addEventListener("click",
	() => {
		const datos=Object.values(sessionStorage).map(
			(dato)=>{
				return JSON.parse(dato);
			}
		);
		const datos_filtrados=datos.filter(
			(dato)=>{
				return dato["ingredientes"].toUpperCase().
				       includes(busqueda.value.trim().toUpperCase());
			}
		);
		//VACIAR LA TABLA	
		tabla_datos.innerHTML="";
		datos_filtrados.forEach(
			(dato)=>{
				tabla_datos.appendChild(nuevaHamburguesa(dato));
			}
		)

	});

//GESTION DE ORDENACION -------------------------------VER DE DONDE SACO LA FECHA---------------------------
ord_asc_fecha.addEventListener("click",
	() => {
		//PASAR EL SESSIONSTORAGE A UN ARRAY DE OBJETOS JSON
		const datos=Object.values(sessionStorage).map(
			(dato)=>{
				return JSON.parse(dato);
			}
		);
		//FILTRADO
		const datos_filtrados=datos.filter(
			(dato)=>{
				return dato["ingredientes"].toUpperCase().
				       includes(busqueda.value.trim().toUpperCase());
			}
		);
		//ORDENACION
		const datos_ordenados=datos_filtrados.sort(
			(a,b)=>{
				return a["fecha"].localeCompare(b["fecha"]);
			}
		)

		//VACIAR LA TABLA	
		tabla_datos.innerHTML="";
		datos_ordenados.forEach(
			(dato)=>{
				tabla_datos.appendChild(nuevaHamburguesa(dato));
			}
		)
	});


ord_desc_precio.addEventListener("click",
	() => {
		//PASAR EL SESSIONSTORAGE A UN ARRAY DE OBJETOS JSON
		const datos=Object.values(sessionStorage).map(
			(dato)=>{
				return JSON.parse(dato);
			}
		);
		//FILTRADO
		const datos_filtrados=datos.filter(
			(dato)=>{
				return dato["ingredientes"].toUpperCase().
				       includes(busqueda.value.trim().toUpperCase());
			}
		);
		//ORDENACION
		const datos_ordenados=datos_filtrados.sort(
			(a,b)=>{
				return b["precio"]-a["precio"];
			}
		)

		//VACIAR LA TABLA	
		tabla_datos.innerHTML="";
		datos_ordenados.forEach(
			(dato)=>{
				tabla_datos.appendChild(nuevaHamburguesa(dato));
			}
		)
	});

//GESTION DE LA TABLA	
const borrarHamburguesa = (clave_hamburguesa) => {
	return () => {
		const fila_a_borrar = document.querySelector("#" + clave_hamburguesa)
		fila_a_borrar.remove();
		sessionStorage.removeItem(clave_hamburguesa);
	}
}

const modalEditarHamburguesa = (clave_hamburguesa) => {
	return () => {
		const dato=JSON.parse(sessionStorage.getItem(clave_hamburguesa));
		editar_nombre.value=dato["nombre"];
		editar_imagen.value=dato["imagen"];
		editar_precio.value=dato["precio"];
		editar_peso.value=dato["peso"];
		editar_tipo_carne.value=dato["tipo de carne"];
        editar_ingredientes.value=dato["ingredientes"];
		if(dato["lechuga"]===true){
			editar_lechuga.checked = true;
		}
        editar_url.value=dato["pagina del producto"];
		editar_clave_hamburguesa.value=clave_hamburguesa;		

		$(editar_modal).modal("toggle");
	}
}

const nuevaHamburguesa = (json) => {
	let nueva_fila = document.createElement("tr");
	nueva_fila.id = "ID_" + json["nombre"].toUpperCase().replaceAll(" ", "");

	//CREA LA CELDA CON LA IMAGEN
	let div = document.createElement("div");
	div.classList.add("img-tabla");
	let imagen = document.createElement("img");
	imagen.src = json["imagen"];
	let td_imagen = document.createElement("td");
	div.appendChild(imagen);
	td_imagen.appendChild(div);
	nueva_fila.appendChild(td_imagen);

	//CREA LA CELDA CON EL NOMBRE
	let td_nombre = document.createElement("td");
	td_nombre.innerText = json["nombre"];
	nueva_fila.appendChild(td_nombre);

	//CREA LA CELDA CON EL PRECIO
	let td_precio = document.createElement("td");
	td_precio.innerText = json["precio"] + "€";
	nueva_fila.appendChild(td_precio);

	//CREA LA CELDA CON EL PESO
	let td_peso = document.createElement("td");
	td_peso.innerText = json["peso"]+"g";
	nueva_fila.appendChild(td_peso);

    //CREA LA CELDA CON EL TIPO DE CARNE
	let td_tipo_carne = document.createElement("td");
	td_tipo_carne.innerText = json["tipo de carne"];
	nueva_fila.appendChild(td_tipo_carne);

	//CREA LA CELDA CON LOS INGREDIENTES
	let td_ingredientes = document.createElement("td");
	td_ingredientes.innerText = json["ingredientes"];
	nueva_fila.appendChild(td_ingredientes);

    //CREA LA CELDA DE SI TIENE LECHUGA
	let td_lechuga = document.createElement("td");

	if(json["lechuga"]===true){
		td_lechuga.innerHTML = "<i class='fas fa-check-circle text-success fs-1 bg-light rounded-circle'></i>";
	}else if(json["lechuga"]===false){
		td_lechuga.innerHTML = "<i class='fas fa-times-circle text-danger fs-1 bg-light rounded-circle'></i>";
	}

	nueva_fila.appendChild(td_lechuga);

	//CREA LA CELDA CON LA FECHA DE ÚLTIMA MODIFICACIÓN
	let td_fecha = document.createElement("td");
	td_fecha.innerText = json["fecha"];
	nueva_fila.appendChild(td_fecha);

	//CREA LA CELDA CON EL ENLACE DE LA PÁGINA OFICIAL
	let enlace_url = document.createElement("a");
	enlace_url.innerText = "Página oficial";
	enlace_url.href = json["pagina del producto"];
	enlace_url.classList.add("btn", "btn-primary");
	let td_url = document.createElement("td");
	td_url.classList.add("text-center");
	td_url.appendChild(enlace_url);
	nueva_fila.appendChild(td_url);

	//CREA EL BOTON DE EDITAR
	let editar = document.createElement("a");
	editar.innerText = "Editar";
	editar.href = "#";

	//MANEJAR EVENTO DE CLICK SOBRE EL BOTON
	editar.addEventListener("click", modalEditarHamburguesa(nueva_fila.id))
	editar.classList.add("btn", "btn-success");

	let td_editar = document.createElement("td");
	td_editar.appendChild(editar);
	td_editar.classList.add("text-center");
	nueva_fila.appendChild(td_editar);

	//============================================================================================	
	//CREA EL BOTON DE BORRADO
	let borrar = document.createElement("a");
	borrar.innerText = "Eliminar";
	borrar.href = "#";
	borrar.classList.add("btn", "btn-danger");

	//MANEJAR EVENTO DE CLICK SOBRE EL BOTON
	borrar.addEventListener("click", borrarHamburguesa(nueva_fila.id))
	let td_borrar = document.createElement("td");
	td_borrar.appendChild(borrar);
	td_borrar.classList.add("text-center");
	nueva_fila.appendChild(td_borrar);
	//================================================================================================
	return nueva_fila;
}

//=========AÑADIR NUEVA HAMBURGUESA COMPROBANDO ANTES LOS DATOS=======================
b_nuevo.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		if (nombre.value.trim() === "") {
			mensajeError("Nombre incorrecto");
		} else if (peso.value.trim() === "" || isNaN(peso.value.trim()) || parseInt(peso.value.trim()) <= 0) {
			mensajeError("Peso incorrecto");
		} else if (precio.value.trim() === "" || isNaN(precio.value.trim()) || parseInt(precio.value.trim()) <= 0) {
			mensajeError("Precio incorrecto");
		} else if (imagen.value.trim() === "") {
			mensajeError("Imagen incorrecta");
		}else if (tipo_carne.value.trim() === "") {
			mensajeError("Tipo de carne incorrecta");
		}else if (ingredientes.value.trim() === "") {
			mensajeError("Ingredientes incorrectos");
		} else if (url.value.trim() === "") {
			mensajeError("Enlace de página oficial incorrecto");
		} else if (sessionStorage.getItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", "")) !== null) {
			mensajeError("La hamburguesa ya existe");
		} else {
			const fecha=new Date();

			let checkbox;

			if(lechuga.checked){
				checkbox=true;
			}else{
				checkbox=false;
			}

			const datos_hamburguesa = {
				"precio": precio.value.trim(),
				"imagen": imagen.value.trim(),
				"nombre": nombre.value.trim(),
				"ingredientes": ingredientes.value.trim(),
				"peso": peso.value.trim(),
                "tipo de carne": tipo_carne.value.trim(),
                "pagina del producto": url.value.trim(),
                "lechuga": checkbox,
				"fecha": fecha.getFullYear()+"-"+fecha.getMonth()+1+"-"+fecha.getDate()
			};
			const nuevo = nuevaHamburguesa(datos_hamburguesa);
			tabla_datos.appendChild(nuevo);
			sessionStorage.setItem("ID_" + nombre.value.trim().toUpperCase().replaceAll(" ", ""), JSON.stringify(datos_hamburguesa));
			form_añadir.reset();
			document.documentElement.scrollTop = document.documentElement.scrollHeight;
			mensajeOk("Añadido correctamente");
		}
	});

//=========EDITAR UNA HAMBURGUESA DESDE EL FORMULARIO======================

b_editar.addEventListener("click",
	(evento) => {
		evento.preventDefault();
		const nueva_clave_hamburguesa="ID_"+editar_nombre.
									value.
			                        trim().
									toUpperCase().
									replaceAll(" ","");

		if (editar_nombre.value.trim()==="") {
			mensajeError("Nombre incorrecto");
		} else if (editar_peso.value.trim() === "" || isNaN(editar_peso.value.trim()) || parseInt(editar_peso.value.trim()) <= 0) {
			mensajeError("Peso incorrecto");
		} else if (editar_precio.value.trim() === "" || isNaN(editar_precio.value.trim()) || parseInt(editar_precio.value.trim()) <= 0) {
			mensajeError("Precio incorrecto");
		} else if (editar_imagen.value.trim() === "") {
			mensajeError("Imagen incorrecta");
		}else if (editar_tipo_carne.value.trim() === "") {
			mensajeError("Tipo de carne incorrecta");
		}else if (editar_ingredientes.value.trim() === "") {
			mensajeError("Ingredientes incorrectos");
		} else if (editar_url.value.trim() === "") {
			mensajeError("Enlace de página oficial incorrecto");
		} else if (editar_clave_hamburguesa.value!==nueva_clave_hamburguesa
			     && sessionStorage.getItem(nueva_clave_hamburguesa)
				                              !== null){
			 	mensajeError("La hamburguesa ya existe");
		} else {
			const fecha= new Date();

			let checkbox;

			if(editar_lechuga.checked){
				checkbox=true;
			}else{
				checkbox=false;
			}

			const datos_hamburguesa={
				"precio": editar_precio.value.trim(),
				"imagen": editar_imagen.value.trim(),
				"nombre": editar_nombre.value.trim(),
				"ingredientes": editar_ingredientes.value.trim(),
				"peso": editar_peso.value.trim(),
                "tipo de carne": editar_tipo_carne.value.trim(),
                "pagina del producto": editar_url.value.trim(),
                "lechuga": checkbox,
				"fecha": fecha.getFullYear()+"-"+fecha.getMonth()+1+"-"+fecha.getDate()
			};
			//TR CON LOS NUEVOS DATOS
			const hamburguesa_editada=nuevaHamburguesa(datos_hamburguesa);
			//TR ANTERIOR
			const fila_a_editar=document.
			                querySelector("#"+editar_clave_hamburguesa.value);
			//COLOCAMOS EN LA POSICION DEL TR ANTERIOR EL NUEVO
			fila_a_editar.replaceWith(hamburguesa_editada);
			//ACTUALIZAR EL STORAGE
			sessionStorage.setItem(nueva_clave_hamburguesa,
				                   JSON.stringify(datos_hamburguesa));
			if(nueva_clave_hamburguesa!==editar_clave_hamburguesa.value){
			     sessionStorage.removeItem(editar_clave_hamburguesa.value);
			}

			form_editar.reset();
			$(editar_modal).modal("toggle");
			mensajeOk("Editado correctamente");
		}
	});

//AÑADIR DATOS INICIALES DE LA BASE DE DATOS AL STORAGE (POR AHORA FICHERO JSON)
//LA PRIMERA VEZ QUE SE INICIE INVENTAR CLAVE PARA RECORDAR QUE HEMOS INICIADO SESION

if (sessionStorage.length===0) {
	datos.forEach(
		(dato) => {
			sessionStorage.setItem("ID_" + dato["nombre"].
				                   toUpperCase()
								   .replaceAll(" ", ""),
				                   JSON.stringify(dato))
		});
}

//AÑADIR LOS DATOS DEL STORAGE PARA MANEJAR LA APLICACION A TRAVES DE ELLOS Y NO TENER QUE USAR SIEMPRE LA BASE DE DATOS
Object.values(sessionStorage).forEach(
	(dato) => {
		tabla_datos.appendChild(nuevaHamburguesa(JSON.parse(dato)));
	}
)