import { Component, OnInit } from '@angular/core';
import { NotificationBaseComponent } from '../notification-base-component';
import { NotificationService } from 'src/app/services/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { BannerNotificationService } from 'src/app/services/banner-notification.service';

@Component({
  selector: 'app-banner-notification',
  templateUrl: './banner-notification.component.html',
  styleUrls: ['./banner-notification.component.css'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class BannerNotificationComponent extends NotificationBaseComponent {

  constructor(private notificationService: BannerNotificationService) {
    super();
  }

  getNotificationService(): BannerNotificationService {
    return this.notificationService;
  }


}
