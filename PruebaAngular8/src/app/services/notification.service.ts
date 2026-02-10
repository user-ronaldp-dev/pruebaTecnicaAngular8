import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Notification } from '../abstractClasses/NotificationBaseComponent';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private notificationSubject = new Subject<Notification>();

  constructor() { }

  getNotifications(): Observable<Notification> {
    return this.notificationSubject.asObservable();
  }
  
  success(message: string): void {
    this.notify(message, 'success');
  }
  
  error(message: string): void {
    this.notify(message, 'error');
  }
  
  warning(message: string): void {
    this.notify(message, 'warning');
  }
  
  info(message: string): void {
    this.notify(message, 'info');
  }
  
  private notify(message: string, type: 'success' | 'error' | 'warning' | 'info'): void {
    const notification: Notification = {
      id: this.generateId(),
      message,
      type
    };
    this.notificationSubject.next(notification);
  }
  
  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

}
