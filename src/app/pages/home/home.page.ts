import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton],
})
export class HomePage {
  constructor(private router: Router) {
  }

  // ngOnInit() {
  //   console.log('HomePage: Inicializa timer de 3 segundos...');

  //   // Inicia el timer y redirige al login
  //   this.homeTimer = setTimeout(() => {
  //     this.navigateToLogin();
  //   }, 3000);
  // }

  // ngOnDestroy() {
  //   if (this.homeTimer) {
  //     clearTimeout(this.homeTimer);
  //   }
  // }

  goToLogin() {
    this.router.navigate(['/login']); // te redirige al login
  }
}
