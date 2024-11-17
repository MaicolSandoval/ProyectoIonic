import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-crear-tareas',
  templateUrl: './page-crear-tareas.page.html',
  styleUrls: ['./page-crear-tareas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonIcon, IonButton, CommonModule, FormsModule, RouterLink]
})
export class PageCrearTareasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
