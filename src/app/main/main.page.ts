import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonIcon, IonButton, IonItem, IonList, IonCheckbox, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonInput, IonIcon, IonButton, IonCheckbox, IonLabel, IonGrid, IonRow, IonCol, CommonModule, FormsModule, RouterLink]
})
export class MainPage implements OnInit {
  correo = false;
  contrasena = false;
  campo1Error: boolean = false;
  campo2Error: boolean = false;
  constructor(private router: Router){};

  //onBlurCampo1() { this.campo1Error = !this.campo1; // Si el campo está vacío, campo1Error es true
  
  onBlurCorreo(campo: IonInput) {
    const valor = campo.value != "" ? true : false;
    this.correo = valor;
  }
  onBlurContrasena(campo: IonInput) {
    const valor = campo.value != "" ? true : false; 
    this.contrasena = valor
  }
  navegar() { 
    if (this.correo && this.contrasena) 
      { this.router.navigate(['/page-tareas']); } 
    else{
      alert("los campos no esta debidamente diligenciados")
    }
  }
  ngOnInit() {
  }
}
