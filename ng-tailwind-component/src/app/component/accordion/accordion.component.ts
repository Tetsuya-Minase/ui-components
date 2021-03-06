import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})

export class AccordionComponent {
  @Input() accordionItemList: Array<{readonly title: string, readonly details: string[]}> = [];

}