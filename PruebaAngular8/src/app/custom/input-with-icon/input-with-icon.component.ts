import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-with-icon',
  templateUrl: './input-with-icon.component.html',
  styleUrls: ['./input-with-icon.component.css']
})
export class InputWithIconComponent  {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() id: string = '';
  

}
