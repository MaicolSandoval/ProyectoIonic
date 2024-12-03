import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonDatetime, 
  IonButton,
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
  IonSegmentButton
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-crear-tareas',
  templateUrl: './page-crear-tareas.page.html',
  styleUrls: ['./page-crear-tareas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonDatetime,
    IonButton,
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
  IonSegmentButton
  ]
})
export class PageCrearTareasPage {
  nombreTarea: string = '';
  fechaTarea: string = '';
  descripcion: string = '';
  actividades: string = '';
  comportamiento: string = '';
  fechaMinima: string = '';

  constructor(private router: Router) { 
   
    const hoy = new Date();
    this.fechaMinima = hoy.toISOString().split('T')[0];
  }


  guardarTarea() {
    const nuevaTarea = {
      id: Date.now(),
      nombre: this.nombreTarea,
      fecha: new Date(this.fechaTarea).toISOString(),
      descripcion: this.descripcion,
      actividades: this.actividades,
      comportamiento: this.comportamiento,
    };

    // Guardar la info en localStorage
    const tareas = JSON.parse(localStorage.getItem('todasLasTareas') || '[]');
    tareas.push(nuevaTarea);
    localStorage.setItem('todasLasTareas', JSON.stringify(tareas));

    // Redirigir a la página principal
    console.log('Tarea creada:', nuevaTarea);
    this.nombreTarea = ''; // Limpiar los campos
    this.router.navigate(['/page-tareas']);
  }
  
}
