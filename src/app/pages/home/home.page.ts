import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAlert, IonButton } from '@ionic/angular/standalone';
import { AllComponent } from 'src/app/components/all/all.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [AllComponent, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
  alertButtons = [
    {
      text: 'Ok',
      role: 'cancel',
      handler: () => {
        console.log('Cancel');
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
