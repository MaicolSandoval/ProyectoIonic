import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, IonItem, IonList,IonFab, 
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
  IonSegmentButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-configuracion',
  templateUrl: './page-configuracion.page.html',
  styleUrls: ['./page-configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonIcon, IonButton,
     CommonModule, FormsModule, RouterLink,IonContent, 
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
     IonIcon ]
})
export class PageConfiguracionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
