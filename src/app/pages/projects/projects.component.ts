import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
 
    selectedProject: number = -1; // Asegurar que nunca sea null
  
    projects = [
      {
        title: 'BioExplorer 3D',
        category: 'videojuegos',
        image:['assets/projects/proyecto1.PNG', 'assets/projects/proyecto1-2.PNG', 'assets/projects/proyecto1-3.PNG', 'assets/projects/proyecto1-4.PNG'],
        description: 'Este proyecto nació para la COP 16 en Cali (2024) y tiene dos partes: Mundo Abierto - Primera Persona: El jugador explora un mundo abierto en busca de cartas de 7 categorías de aves. Al elegir una, debe responder una trivia para desbloquear su ficha técnica, sonido y ubicación en Cali. También puede coleccionarlas. Concienciación y Conservación: Sección educativa sobre la conservación de aves, las amenazas a su hábitat y cómo protegerlas',
        rol:'Mi rol:Fui responsable de liderar a todo el equipo involucrado en el proyecto y de desarrollar toda la experiencia interactiva, incluyendo el sistema de información y el juego de búsqueda de cartas. Implementé el almacenamiento de las cartas en un catálogo, la visualización del perfil de cada ave y el sonido asociado a cada una de ellas.',
        herramientas: 'Herramientas utilizadas: Unity, C#, Json, Supabase, Git, GitHub, Figma, Illustrator,Trello.',
        link: 'https://www.behance.net/gallery/219157549/BioExplorer-3D'
      },
      {
        title: 'Emergency3D',
        category: 'videojuegos',
        image:['assets/projects/proyecto2.PNG', 'assets/projects/proyecto2-2.PNG', 'assets/projects/proyecto2-3.PNG', 'assets/projects/proyecto2-4.PNG'],
        description: 'Este proyecto es una simulación interactiva con onboarding explicativo para enseñar a identificar y manejar riesgos. A través de información educativa y minijuegos (ahorcado, sopa de letras, etc.), los usuarios aprenden a reaccionar ante emergencias como incendios y terremotos. Módulos clave: Simulación de Incendios: Identificación y uso de extintores. Simulacros de Emergencia: Ejercicios prácticos para sismos e incendios. Información Interactiva: Minijuegos y datos sobre seguridad laboral',
        rol:'Mi rol: Fui responsable de liderar al equipo encargado de diseñar y desarrollar la simulación, gestionando tanto el contenido educativo como la parte interactiva de los juegos. Mi trabajo incluyó la creación de los escenarios de simulación y asegurarme de que los minijuegos fueran efectivos para transmitir la información sobre manejo de riesgos.',
        herramientas: 'Herramientas utilizadas: Unity, C#, Json, Supabase, Git, GitHub, Figma, Miro.',
        link: 'https://www.behance.net/gallery/219157743/Emergency3D'
      },
      {
        title: 'Emergency3D',
        category: 'web',
        image:['assets/projects/proyecto3.jpg', 'assets/projects/img2.jpg', 'assets/projects/img3.jpg'],
        description: 'Este proyecto es de una simulación interactiva que permite a los usuarios experimentar la operación de un montacargas en un entorno de almacén.',
        rol:'Mi rol: me encargue de realizar las mecanicas del juego y de la parte interactiva de la simulación.',
        herramientas: 'Herramientas utilizadas: Unity, C#, Json, Supabase, Git, GitHub, Figma, Illustrator, Photoshop,Trello.',
        link: 'https://github.com/proyecto3'
      },
      {
        title: 'PixelCodex',
        category: 'web',
        image:['assets/projects/proyecto3.jpg', 'assets/projects/img2.jpg', 'assets/projects/img3.jpg'],
        description: 'Este proyecto es de una simulación interactiva que permite a los usuarios experimentar la operación de un montacargas en un entorno de almacén.',
        rol:'Mi rol: me encargue de realizar las mecanicas del juego y de la parte interactiva de la simulación.',
        herramientas: 'Herramientas utilizadas: Unity, C#, Json, Supabase, Git, GitHub, Figma, Illustrator, Photoshop,Trello.',
        link: 'https://github.com/proyecto3'
      }
    ];
  
    videojuegosProjects: any[] = [];
    webProjects: any[] = [];
  
    ngOnInit(): void {
      this.videojuegosProjects = this.projects.filter(p => p.category === 'videojuegos');
      this.webProjects = this.projects.filter(p => p.category === 'web');
    }
  
    openProject(index: number) {
      this.selectedProject = index;
    }
  
    closeProject() {
      this.selectedProject = -1;
    }
  
    openProjectByTitle(title: string) {
      const index = this.projects.findIndex(p => p.title === title);
      if (index !== -1) {
        this.selectedProject = index;
      }
    }
  }
    
