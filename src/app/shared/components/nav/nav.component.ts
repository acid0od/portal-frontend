import { Component, OnInit } from '@angular/core';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
  activeOptions?: boolean;
  user?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  public APP_TOOLBAR_TITLE = 'Postal Portal';

  notifications: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'notifications/edit',
      title: 'New Notification',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'notifications/list',
      title: 'All Notifications',
      user: 'dev',
      activeOptions: true
    }
  ];

  senders: ROUTE[] = [
    {
      icon: 'assignment',
      route: 'senders/edit',
      title: 'New Sender',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'notifications/list',
      title: 'All Senders',
      user: 'dev',
      activeOptions: true
    }
  ];

  bulkNotifications: ROUTE[] = [
    {
      icon: 'insert_comment',
      route: 'bulkNotification/edit',
      title: 'New BulkNotification',
      user: 'dev',
      activeOptions: true
    }, {
      icon: 'dashboard',
      route: 'bulkNotification/list',
      title: 'All BulkNotifications',
      user: 'dev',
      activeOptions: true
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  isAuthenticated() {
    return true;
  }
}
