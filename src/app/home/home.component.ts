import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = [
    { title: 'Projeto 1', description: 'Descrição do Projeto 1', imageUrl: 'path/to/image1.jpg' },
    { title: 'Projeto 2', description: 'Descrição do Projeto 2', imageUrl: 'path/to/image2.jpg' },
    { title: 'Projeto 3', description: 'Descrição do Projeto 3', imageUrl: 'path/to/image3.jpg' }
  ];

  explore() {
    console.log('Explorar clicado!');
  }

  viewDetails(item: any) {
    console.log(`Ver detalhes de ${item.title}`);
  }
}
