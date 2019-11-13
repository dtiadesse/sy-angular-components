export interface HistoryNodeType {
    /**
     * Identifier for node
     */
    id: string;
    /**
     * Date value for node
     */
    date: string;
    /**
     * Optional url value for title
     */
    url?: string;
    /**
     * Optional query params
     */
    queryParams?: any;
    /**
     * Title value for node
     */
    title?: string;
    /**
     * Optional description for node
     */
    description?: string;
    /**
     * Optional aria label value for node
     */
    ariaLabel?: string;
}
export interface AuditTrailInfo {
    lastModifiedByEmail: string;
    createdByEmail: string;
    created: string;
    lastModified: string;
}
export interface HistoryConfig {
    title: string;
    dateHeaderText: string;
    detailsHeaderText: string;
}
export interface HistoryDataType {
    DateTimeChanged: string;
    SummaryReason: string;
    DetailField: string;
    DetailOld: string;
    DetailNew: string;
    DetailChangedBy: string;
}
export interface PointOfContactType {
    /**
     * Sets the full name property
     */
    fullName?: string;
    /**
     * Sets the title property
     */
    title?: string;
    /**
     * Sets the primary address property
     */
    address?: string;
    /**
     * Sets the secondary address property
     */
    address2?: string;
    /**
     * Sets the city name property
     */
    city?: string;
    /**
     * Sets the state property
     */
    state?: string;
    /**
     * Sets the zip code property
     */
    zip?: string;
    /**
     * Sets the email property
     */
    email?: string;
    /**
     * Sets the primary phone property
     */
    phone?: string;
    /**
     * Sets the secondary phone property
     */
    phone2?: string;
    /**
     * Sets the fax number property
     */
    fax?: string;
    /**
     * Sets the website url
     */
    website?: string;
}
export interface AlertType {
    /**
     * Sets the alert title
     */
    title: any;
    /**
     * Sets the alert type
     */
    type: any;
    /**
     * Sets the alert body text
     */
    description: any;
    /**
     * Sets a timeout (in milliseconds) for the alert to dismiss itself. 0 is
     * infinite.
     */
    timer: number;
    /**
     * Explicity defines that user must dismiss alert
     */
    mustDismiss?: boolean;
    /**
   * Sets the alert body text
   */
    descriptionList?: any[];
}
export declare type AccessType = 'Public' | 'Private';
export declare type ExpansionType = 'collapsed' | 'expanded';
export interface DownloadPackageType {
    /**
     * Sets a package id value
     */
    packageId: string;
    /**
     * Sets the package name
     */
    name: string;
    /**
     * Sets the package type
     */
    type: string;
    /**
     * Sets the packages access property
     */
    access: AccessType;
    /**
     * Sets the posted date property
     */
    postedDate: string;
    /**
     * Sets the resources in the package
     */
    resources: DownloadResourceType[];
    /**
     * Sets the initial state of package accordion
     */
    accordionState: ExpansionType;
    /**
     * Sets the download url for the whole package
     */
    downloadUrl: string;
}
export interface DownloadResourceType {
    /**
     * Sets a resource id value
     */
    resourceId: string;
    /**
     * Sets the resource name
     */
    name: string;
    /**
     * Sets the resource description
     */
    description: string;
    /**
     * Sets the resource filesize
     */
    size: string;
    /**
     * Sets the resource download url
     */
    downloadUrl: string;
    /**
     * Sets the resource type information
     */
    typeInfo: DownloadResourceTypeInfoType;
}
export interface DownloadResourceTypeInfoType {
    /**
     * Sets the resource type name
     */
    name: string;
    /**
     * Sets the font awesome icon to use for the resource
     */
    iconClass: string;
}
export interface VideoConfig {
    poster: string;
    videoUrl: string;
    captionsUrl: string;
    title: string;
    videoId: string;
    captionOption: boolean;
    seekInterval: number;
    videoTitle: string;
    description: string;
    pdfurl: string;
}
