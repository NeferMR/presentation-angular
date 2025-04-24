// src/app/projects/projects.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService, Project } from '../../services/project.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  technologies: string[] = [];
  stacks: string[] = [];
  selectedTechnology: string = '';
  selectedStack: string = '';
  selectedProject: Project | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data;
      this.updateFilters();
    });
  }

  updateFilters() {
    const allTechs = this.projects.flatMap(p => p.Tecnologia);
    this.technologies = Array.from(new Set(allTechs));
    this.stacks = Array.from(new Set(this.projects.map(p => p.Stack)));
  }

  openModal(p: Project) {
    this.selectedProject = p;
  }

  closeModal() {
    this.selectedProject = null;
  }
}
