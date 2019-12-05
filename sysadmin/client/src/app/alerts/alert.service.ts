import { Injectable } from '@angular/core';
import { AlertType } from './alert-type';
import { Alert } from './alert';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    readonly active: Alert[] = [];

    show(message: string, type: AlertType = AlertType.info) {
        let alert = new Alert(message, type);
        this.active.push(alert);

        setTimeout(() => this.active.shift(), 2000);
    }
}
