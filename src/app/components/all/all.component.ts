import { Component, OnInit } from '@angular/core';
import { IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, IonLabel } from '@ionic/angular/standalone';
import { ActionSheetComponent } from '../action-sheet/action-sheet.component';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
  standalone: true,
  imports: [IonLabel, IonSegment, IonSegmentButton, IonSegmentContent, IonSegmentView, ActionSheetComponent, AccordionComponent]
})
export class AllComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
