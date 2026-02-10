import { Component, ViewEncapsulation } from '@angular/core';
import { NotificationBaseComponent } from 'src/app/abstractClasses/NotificationBaseComponent';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css'],
})
export class ToastNotificationComponent extends NotificationBaseComponent {

  constructor(private notificationService: NotificationService) {
    super();
  }

  getNotificationService(): NotificationService {
    return this.notificationService;
  }

}
