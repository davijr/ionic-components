import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonItem, IonLabel, IonAccordionGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [IonAccordion, IonItem, IonLabel, IonAccordionGroup]
})
export class AccordionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
