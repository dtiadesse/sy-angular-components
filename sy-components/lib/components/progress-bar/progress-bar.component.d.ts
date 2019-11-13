export interface ProgressIndicator {
    type: ProgressIndicatorType;
    min: number;
    max: number;
    value: number;
    valueAsText: string;
}
export declare enum ProgressIndicatorType {
    Percent = "percent",
    Nonnumerical = "nonnumerical"
}
export declare class ProgressBarComponent {
    /**
    * Whether the progress should be represented as a percent
    * or a non-numerical value.
    */
    type: ProgressIndicatorType;
    /**
     * The minimum value in the range. If the type is non-numerical,
     * a default number is provided to calculate the progress for
     * screen reader users.
     */
    min: number;
    /**
     * The maximum value in the range. If the type is non-numerical,
     * a default number is provided to calculate the progress for
     * screen reader users.
     */
    max: number;
    /**
     * The current value of the progress bar. This number should
     * lie between the min and max.
     */
    value: number;
    /**
     * A human readable version of the value. This is provided as
     * a visual display and announced to screen readers if the
     * type is not Percent.
     */
    valueAsText: string;
    /**
     * Calculates the bar fill percentage of the progress bar.
     */
    calculateBarFillPercentage(): string;
}
