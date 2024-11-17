import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, IonItem, IonList } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-inicio',
  templateUrl: './page-inicio.page.html',
  styleUrls: ['./page-inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonIcon, IonButton, CommonModule, FormsModule, RouterLink]
})
export class PageInicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
