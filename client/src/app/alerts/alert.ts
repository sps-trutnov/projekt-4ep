import { AlertType } from './alert-type';

export class Alert {
    constructor(
        public readonly message: string,
        public readonly type: AlertType
    ) { }
}