import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
    name: 'globaldatetime',
})
export class GlobalDateTime implements PipeTransform {
    transform(value: string) {
        const datePipe = new DatePipe('en-US');
        value = datePipe.transform(value, 'MMM dd, yyyy hh:mm:ss a');
        return value;
    }
}
