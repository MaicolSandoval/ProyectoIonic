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
  IonButtons,IonTextarea, 
  IonSegment,IonLabel, 
  IonSegmentButton, 
  IonNote,
  IonToggle,
  IonSelect,
  IonSelectOption,
  IonInputPasswordToggle,
  IonModal,
  IonListHeader,
  IonRange} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-page-configuracion',
  templateUrl: './page-configuracion.page.html',
  styleUrls: ['./page-configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonIcon, IonButton,
     CommonModule, FormsModule, RouterLink,IonContent,IonLabel,IonItem, 
     IonHeader,IonTextarea,IonNote,IonToggle,IonInput, 
     IonTitle,IonSelect,IonSelectOption, 
     IonToolbar,IonInputPasswordToggle,IonModal, 
     IonFab,IonListHeader,IonRange, 
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

  paletteToggle = false;

  constructor(private alertController: AlertController) {
    addIcons({sunnyOutline,sunny,chevronDownSharp,personCircle,personCircleOutline});
  }

  ngOnInit() {
    // Use matchMedia to check the user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    // Initialize the dark palette based on the initial
    // value of the prefers-color-scheme media query
    this.initializeDarkPalette(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkPalette(mediaQuery.matches));
  }

  // Check/uncheck the toggle and update the palette based on isDark
  initializeDarkPalette(isDark: any) {
    this.paletteToggle = isDark;
    this.toggleDarkPalette(isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark palette
  toggleChange(ev:any) {
    this.toggleDarkPalette(ev.detail.checked);
  }

  // Add or remove the "ion-palette-dark" class on the html element
  toggleDarkPalette(shouldAdd:boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', shouldAdd);
  }

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Cambio de contraseña',
      message: 'Se cambio correctamente la contraseña',
      buttons: ['Action'],
    });

    await alert.present();
  }
 

  

}
import { personCircle, personCircleOutline, sunny, sunnyOutline, chevronDownSharp } from 'ionicons/icons';






  