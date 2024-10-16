import { Component } from '@angular/core';
import { randomInt } from 'crypto';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  url: string = "{{ variavel aqui dentro }} - essa string foi interpolada"; 
  urlImage: string = "http://lorempixel.com/400/200/nature/";
  getValorRamdom(){
    return 1+1+1+1+1+1;
  }
}
