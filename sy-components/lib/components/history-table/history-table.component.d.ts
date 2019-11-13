import { HistoryDataType, HistoryConfig } from '../../types';
export declare class HistoryTableComponent {
    faExpand: import("@fortawesome/fontawesome-common-types").IconDefinition;
    historyConfig: HistoryConfig;
    historyData: HistoryDataType[];
    isExpand: boolean;
    expand(isExpand: boolean): void;
}
