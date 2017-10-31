import {Component} from '@angular/core';
import {Router, ActivatedRoute,Params} from '@angular/router';

@Component({
	selector:'modulo',
	templateUrl:'./modulo.component.html'
	})
export class ModuloComponent{
	public titulo ="Página de modulo";
	public parametro;

	constructor(
		private _route : ActivatedRoute,
		private _router : Router
		){}

	ngOnInit(){
		this._route.params.forEach((params:Params) =>{
			this.parametro = params["page"];
			console.log(params);
			})
	}
}