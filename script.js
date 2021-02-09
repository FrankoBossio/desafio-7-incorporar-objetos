
function capturar(){

function auto (marca, año, tipo){
        this.marca = marca;
        this.año = año;
        this.tipo = tipo;
    }


var marcaCapturar = document.getElementById("marca").value;

var añoCapturar = document.getElementById("año").value;

var tipoCapturar = document.getElementById("radioBasico").value;

var tipoCapturar = document.getElementById("radioCompleto").value;



 auto1 = new auto (marcaCapturar, añoCapturar, tipoCapturar);
console.log(auto1);




cotizar();

}


var basededatos = [];
function cotizar (){
  basededatos.push (auto1)
  console.log (basededatos)
} 




function enter (e) {
	if (event.which == 13  ||  event.keyCode == 13) {
		alert("Calculando valor de seguro");
	}
}



function validarCampos (event){


	var valor = event.target.value;

	if (valor ==""){
		event.target.className = "form-control is-invalied"
	}

	else {
		event.target.className = "form-control"
	}

	validarTodosLosCampos()
}


function validarTodosLosCampos (){


	var valormarcaCapturar = marcaCapturar.value;
	var valorañoCapturar = añoCapturar.value;
	var valortipoCapturar = tipoCapturar.value;


		document.getElementByClassName("button-primary").disable = !(valormarcaCapturar !=="" && valormarcaCapturar !=="" && valormarcaCapturar !=="" )
	}
