import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isModalOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  techItems = [
    {
      name: 'HTML y CSS base',
      link: 'https://nefermr.github.io/Presentation/',
    },
    {
      name: 'React y tailwind',
      link: 'https://presentation-react-kohl.vercel.app/',
    },
  ];
}
