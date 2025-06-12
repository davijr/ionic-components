import { Component, OnInit } from '@angular/core';
import { IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  standalone: true,
  imports: [IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView]
})
export class AllComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
