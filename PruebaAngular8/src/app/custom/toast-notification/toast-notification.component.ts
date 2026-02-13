import { Component, OnInit } from '@angular/core';
import { NotificationBaseComponent } from '../notification-base-component';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css']
})
export class ToastNotificationComponent extends NotificationBaseComponent {

  constructor(private notificationService: NotificationService) {
    super();
  }

  getNotificationService(): NotificationService {
    return this.notificationService;
  }

}
