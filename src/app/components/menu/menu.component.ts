import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon,
   IonButton, IonItem, IonList,IonMenu,IonMenuButton,IonButtons,IonApp,IonLabel,IonToggle,IonMenuToggle } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { logoIonic, close } from 'ionicons/icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonIcon, IonButton, CommonModule, FormsModule, RouterLink,
  IonMenu,IonMenuButton,IonButtons,IonApp,IonLabel,IonToggle,IonMenuToggle]
})
export class MenuComponent implements OnInit {

  constructor() {
    addIcons({close}); 
      }

  ngOnInit() {
  }

}