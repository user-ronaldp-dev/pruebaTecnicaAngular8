import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from '../custom/notification-base-component';
import { BaseNotificationService } from './base-notification-service';

@Injectable({
  providedIn: 'root'
})
export class BannerNotificationService extends BaseNotificationService{

  constructor() {
    super();
  }
}
