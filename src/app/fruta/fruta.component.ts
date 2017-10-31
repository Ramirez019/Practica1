import { Component} from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl:'./fruta.Component.html'
})
export class FrutaComponent{
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public edad:number;
	public mayorDeEdad:boolean;
	public trabajos:Array<any> = ['Progamador', 24, 'Medico'];
	comodin:any;

	constructor(){
		this.nombre ='Cristian Rc';
		this.edad = 26;
		this.mayorDeEdad = false;
		this.comodin = "SI"
	}

	ngOnInit(){
		this.CambiarNombre();
		this.CambiarEdad(1);
		console.log(this.nombre + " " +this.edad)

		//Variables y alcance
		var uno = 8;
		var dos = 15;

		if(uno===8)
		{
			//var manera globla let a nivel de bloque
			let uno = 3; 
			var dos = 88;
			console.log('Dentro del if: '+uno+' ' +dos)
		}
		console.log('fuera del if: '+uno+' '+dos)
	}

	CambiarNombre(){
		this.nombre = "Mateo Rc";
	}

	CambiarEdad(edad){
		this.edad = edad;
	}
}