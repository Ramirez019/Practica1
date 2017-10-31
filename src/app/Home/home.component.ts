import { Component} from '@angular/core';
import { RopaServices} from '../services/ropa.service';

@Component({
	selector:'home',
	templateUrl:'./home.component.html',
	providers: [RopaServices]
	})

export class HomeComponent{
	public titulo="Página principal";
	public listado_ropa:Array<string>;
	public prenda_guardar:string;

	public fecha;
	public nombre = 'MatEo Rc'

	constructor(
		private _RopaServices:RopaServices
		){
		this.fecha = new Date(2017,0,15)
	}

	ngOnInit()
	{
		console.log(this._RopaServices.prueba('camiseta nike'));
		this.listado_ropa = this._RopaServices.getRopa();
		console.log(this.listado_ropa);
	}

	guardarPrenda()
	{
		this._RopaServices.addRopa(this.prenda_guardar);
		this.prenda_guardar = null;
	}

	eliminarPrenda(index:number)
	{
		this._RopaServices.deleteRopa(index);
	}
}