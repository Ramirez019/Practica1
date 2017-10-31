import { Pipe,PipeTransform} from '@angular/core';

@Pipe({name:'conversor'})

export class conversorPipe implements PipeTransform{
	transform(value, por){
		let value_one = parseInt(value);
		let value_tow = parseInt(por);
		let result = "La multiplicacion: "+ value_one+" x "+value_tow+" = "+(value_tow*value_one);

		return result;
	}
}