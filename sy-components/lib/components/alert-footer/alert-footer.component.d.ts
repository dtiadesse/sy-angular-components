import { OnInit, EventEmitter } from '@angular/core';
import { AlertFooterService } from './alert-footer.service';
import { AlertType } from '../../types';
export declare class AlertFooterComponent implements OnInit {
    private alertFooterService;
    alerts: AlertType[];
    dismissAlert: EventEmitter<boolean>;
    constructor(alertFooterService: AlertFooterService);
    ngOnInit(): void;
    dismissFooterAlert(i: any): void;
    refreshAlerts(): void;
}
