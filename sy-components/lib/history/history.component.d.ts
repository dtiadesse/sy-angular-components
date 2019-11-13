import { HistoryNodeType } from '../types';
export declare class HistoryComponent {
    /**
      * sets the id for history items
      */
    id: string;
    /**
     * sets the model for generating nodes
     */
    data: HistoryNodeType[];
    /**
     * Sets the 'current' node on the id value defined in data
     */
    currentId: string;
}
