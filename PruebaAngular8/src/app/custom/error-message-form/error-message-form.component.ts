import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-message-form',
  templateUrl: './error-message-form.component.html',
  styleUrls: ['./error-message-form.component.css']
})
export class ErrorMessageFormComponent {

  @Input() control: AbstractControl | null = null;
  @Input() errorMessage: string = '';
  @Input() errorType: string = 'required';

}
