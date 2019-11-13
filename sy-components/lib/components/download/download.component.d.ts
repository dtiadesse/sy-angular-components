import { DownloadPackageType } from '../../types';
export declare class DownloadComponent {
    /**
     * model for populating downloads
     */
    packages: DownloadPackageType[];
    /**
     * pass in an attachment error to trigger a message
     */
    attachmentError: boolean;
    /**
     * sets download all url link
     */
    downloadAllUrl: string;
    hasPublicPackages(): boolean;
    toggleAccordion(card: any): void;
    isSecure(field: string): "Public" | "Secured";
}
