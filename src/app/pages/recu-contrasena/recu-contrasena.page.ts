import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonList   
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-recu-contrasena',
  templateUrl: './recu-contrasena.page.html',
  styleUrls: ['./recu-contrasena.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonList   
  ]
})
export class RecuContrasenaPage implements OnInit {

  constructor() { }

  ngOnInit() {}
}
