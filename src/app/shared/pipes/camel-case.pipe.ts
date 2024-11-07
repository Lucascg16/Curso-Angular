import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
  standalone: true
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let values = value.split(' ');
    let resultado: string = '';

    for (let value of values){
      resultado += `${this.capitalizar(value)} `;
    }
    
    return resultado;
  }

  capitalizar(valor: string): string{    
    return valor.substring(0, 1).toUpperCase() + valor.substring(1).toLowerCase();
  }
}
