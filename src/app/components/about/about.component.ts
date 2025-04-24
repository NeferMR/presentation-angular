import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconoComponent } from '../icono/icono.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconoComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  items = [
    { categoria: 'Nombre', valor: 'Nefer Medina' },
    { categoria: 'Edad', valor: '23 años' },
    { categoria: 'Estudios', valor: 'Ingeniero de Sistemas' },
    { categoria: 'Email', valor: 'nefermr5@gmail.com', link: 'mailto:nefermr5@gmail.com' },
    { categoria: 'Teléfono', valor: '+57 300 466 7017', link: 'tel:+573004667017' }
  ];
} 