import { OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export abstract class NotificationBaseComponent implements OnInit, OnDestroy {
    protected destroy$ = new Subject<void>();
    
    notifications: Notification[] = [];
    
    abstract getNotificationService(): any;
    
    ngOnInit(): void {
      this.subscribeToNotifications();
    }
    
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
    
    protected subscribeToNotifications(): void {
      this.getNotificationService()
        .getNotifications()
        .pipe(takeUntil(this.destroy$))
        .subscribe((notification: Notification) => {
          this.addNotification(notification);
        });
    }
    
    addNotification(notification: Notification): void {
      this.notifications.push(notification);
      this.autoRemoveNotification(notification);
    }
    
    removeNotification(id: string): void {
      this.notifications = this.notifications.filter(n => n.id !== id);
    }
    
    protected autoRemoveNotification(notification: Notification): void {
      setTimeout(() => {
        this.removeNotification(notification.id);
      }, 5000);
    }
  }
  

  export interface Notification {
    id: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
  }