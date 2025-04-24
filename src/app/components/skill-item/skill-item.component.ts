import { Component, Input, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skill-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill-item.component.html',
  styleUrls: ['./skill-item.component.css'],
})
export class SkillItemComponent implements AfterViewInit {
  @Input() percentage: number = 0;
  @Input() name: string = '';

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const circle = this.el.nativeElement.querySelector('.skill-circle');
    if (circle) {
      circle.style.setProperty('--percentage', '0%');
      setTimeout(() => {
        circle.style.setProperty('--percentage', `${this.percentage}%`);
      }, 100);
    }
  }
}
