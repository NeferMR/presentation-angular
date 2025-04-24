import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  formData = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  enviarMensaje() {
    // Aquí iría la lógica para enviar el mensaje
    console.log('Mensaje enviado:', this.formData);
    this.formData = { nombre: '', email: '', mensaje: '' };
  }
} 