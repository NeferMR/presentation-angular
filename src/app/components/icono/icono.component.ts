import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icono',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icono.component.html',
  styleUrls: ['./icono.component.css']
})
export class IconoComponent {
  @Input() link!: string;
  @Input() icono!: string;
} 