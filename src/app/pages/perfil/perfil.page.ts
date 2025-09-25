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
  IonButton,
  IonAvatar,
  IonIcon,
  IonList
} from '@ionic/angular/standalone';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
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
    IonButton,
    IonAvatar,
    IonIcon,
    IonList 
  ]
})
export class PerfilPage implements OnInit {
  info = {
    nombre: "",
    apellidos: "",
    correo: "",
    tel: ""
  }

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.getInfo();
    }, 500);
  }

  async getInfo(): Promise<void> {
    this.info.nombre = await this.storageService.get("nombre");
    this.info.apellidos = await this.storageService.get("apellidos");
    this.info.correo = await this.storageService.get("correo");
    this.info.tel = await this.storageService.get("telefono");
    const nombre: string = await this.storageService.get("nombre");

    console.log(this.info, nombre);
  }
}
