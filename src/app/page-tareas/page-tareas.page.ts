import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonFab, 
  IonFabButton, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle,  
  IonCardSubtitle, 
  IonCardContent, 
  IonMenuButton,
  IonFooter, 
  IonButtons, 
  IonSegment, 
  IonSegmentButton, 
  IonButton, 
  IonIcon 
} from '@ionic/angular/standalone';
import { Router, RouterLink, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-page-tareas',
  templateUrl: './page-tareas.page.html',
  styleUrls: ['./page-tareas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader, 
    IonCardTitle,  
    IonCardSubtitle, 
    IonCardContent,
    IonMenuButton,
    IonFooter,
    IonButtons,
    IonSegment,
    IonSegmentButton,
    IonButton,
    IonIcon,
    RouterLink
  ]
})
export class PageTareasPage implements OnInit {
  // Lista completa de tareas- desde Localstorage
  todasLasTareas: any[] = [];

  // Fecha actual
  fechaActual: Date = new Date();

  // Tareas filtradas por el mes actual
  tareasDelMes: any[] = [];

  nombreMes: string = 'noviembre de 2024';

  constructor(private router: Router) {
    // Detectar cuando se vuelve a esta página
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url === '/page-tareas') {
        this.cargarTareas(); 
        this.filtrarTareasPorMes();
      }
    });
  }

  ngOnInit() {
    // Cargar tareas y filtrar al iniciar
    this.cargarTareas();
    this.filtrarTareasPorMes();
  }

  // Cargar tareas desde localStorage
  cargarTareas() {
    const tareasGuardadas = JSON.parse(localStorage.getItem('todasLasTareas') || '[]');
    this.todasLasTareas = tareasGuardadas;
  }

  // Filtro tareas por mes y año
  filtrarTareasPorMes() {
    const mes = this.fechaActual.getMonth(); 
    const anio = this.fechaActual.getFullYear(); 
    this.tareasDelMes = this.todasLasTareas.filter(tarea => {
      const fecha = new Date(tarea.fecha);
      return fecha.getMonth() === mes && fecha.getFullYear() === anio;
    });
  }

  // Cambiar de mes (hacia adelante o atrás)
  cambiarMes(direccion: number) {
    this.fechaActual.setMonth(this.fechaActual.getMonth() + direccion);
    this.filtrarTareasPorMes();
    const opciones: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    this.nombreMes = this.fechaActual.toLocaleDateString('es-ES', opciones);
  }
/*
  actualizarNombreMes() {
  }
  
   Redirigir a la página "crear-tareas"*/
  agregarTarea() {
    this.router.navigate(['/page-crear-tareas']);
  }
}
