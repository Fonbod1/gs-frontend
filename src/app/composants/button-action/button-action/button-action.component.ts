import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button-action',
  templateUrl: './button-action.component.html',
  styleUrls: ['./button-action.component.scss']
})
export class ButtonActionComponent implements OnInit {
  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
 bouttonNouveauClick(): void {
    this.clickEvent.emit();
   }

}
