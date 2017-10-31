import { Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.Component.html'
	})

export class EmpleadoComponent{
	public titulo = 'Componente empleados';
	public listado_empleado = 'Juan, Luis, Jorge y Raul';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;
	public color_seleccionado:string;

constructor(){
		this.empleado = new Empleado('Cristian Rc',26,'Development',false);
		this.trabajadores = [
		new Empleado('Cristian Rc',26,'Development',true),
		new Empleado('Mateo Rc',1,'Director general',true),
		new Empleado('Eunice Cb',26,'RH',true)
		]; 
		console.log(this.trabajadores);
		this.trabajador_externo = true;
		this.color="blue";
		this.color_seleccionado = '#ccc';

}

	ngOnInit(){
	console.log(this.empleado);
	}

	cambiarExterno(valor){
		this.trabajador_externo =valor;
	}

	cambiarColor(color)
	{
		this.color = color;
	}

	logColorSeleccionado(){
		console.log(this.color_seleccionado);
	}
}