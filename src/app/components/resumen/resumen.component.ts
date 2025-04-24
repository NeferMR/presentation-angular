import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css'],
})
export class ResumenComponent {
  itemsExperiencia = [
    {
      title: 'Practicas Profesionales',
      date: 'Transelca S.A.S - 2024',
      descripcion:
        'Durante este periodo de practicas profesionales, pude desempeñarme en el desarrollo de un sistema de gestión de proyectos de la empresa, el cual se encarga de gestionar los proyectos de la empresa, desde la creación hasta la finalización, asi como también la generación de diversos procesos automatizados que recortarán notablemente el tiempo de esfuerzo humano invertido dentro de este area, con el fin de mejorar la eficiencia y la calidad de la gestión y del análisis de estos mismos proyectos.',
    },
    {
      title: 'Tutor de algoritmia y programación',
      date: 'Universidad del Norte - 2022 - 2023',
      descripcion:
        'Durante este periodo, pude desempeñarme como tutor de algoritmia y programación, para los estudiantes de primeros semestre de la universidad, con el fin de mejorar su comprensión y habilidades dentro de este campo de la programación, tanto en area de programación en lenguajes como también en area de algoritmia apoyando a desarrollar su lógica de programación, para así poder tener una base sólida y poder desempeñarse de manera más eficiente en el mundo laboral.',
    },
  ];
  itemsEstudio = [
    {
      title: 'Ingeniería de Sistemas',
      date: 'Universidad del Norte - 2020 - 2025',
      descripcion:
        'Periodo universitario donde aprendí muchísimas cosas tanto personal como profesional, ya que, aparte de aprender de cosas tan básicas como la programación, algoritmia, bases de datos, etc, hasta teorías y técnicas mas complejas como las metodologías de trabajo, la gestión de equipos, la eficiencia y eficacia de procesos, la comunicación efectiva con el cliente, etc. también aprendí de muchas otras cosas como el correcto trabajo en equipo, la importancia de la comunicación, la importancia de la resolución de problemas,la investigación, los tiempos de respuesta, etc.',
    },
  ];
}
