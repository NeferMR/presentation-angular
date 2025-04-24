import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillItemComponent } from '../skill-item/skill-item.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillItemComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { percentage: 90, name: 'HTML-CSS-JS' },
    { percentage: 90, name: 'Python' },
    { percentage: 85, name: 'React' },
    { percentage: 80, name: 'Java' },
    { percentage: 70, name: 'C#' },
    { percentage: 85, name: 'SQL' },
    { percentage: 95, name: 'Git - Github' },
    { percentage: 70, name: 'Cloud' },
  ];
} 