import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  servicios = [
    {
      titulo: 'Desarrollo Frontend',
      descripcion: 'Cuento con experiencia en el desarrollo de aplicaciones web, con el uso de tecnologías como HTML, CSS, JavaScript, React, Node.js, entre otras.',
      icono: 'icon-embed2'
    },
    {
      titulo: 'Desarrollo Backend',
      descripcion: 'Cuento con experiencia y gran pasión por el desarrollo backend, conel uso de tecnologías como Node.js, Express, MongoDB, entre otras.',
      icono: 'icon-tree'
    },
    {
      titulo: 'Automatización de procesos',
      descripcion: 'Automatización de procesos, con el uso de tecnologías como Node.js,Python, Power Automate, entre otras.',
      icono: 'icon-cogs'
    },
    {
      titulo: 'Análisis de datos',
      descripcion: 'Análisis de datos, con el uso de tecnologías como Python, Power BI, entre otras.',
      icono: 'icon-stats-dots'
    }
  ];
} 