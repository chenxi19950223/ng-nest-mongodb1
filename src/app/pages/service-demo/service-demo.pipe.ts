import { Pipe, PipeTransform } from '@angular/core';

import { interval, observable, Observable, Subject } from 'rxjs';
import { filter, map, takeWhile } from 'rxjs/operators';

import * as moment from 'moment';

@Pipe({
    name: 'serviceDemo'
})
export class ServiceDemoPipe implements PipeTransform {

    transform(value: any, ...args: Date[]): any {
        return  'sdf';
        if (new Date(value).getTime() - new Date().getTime() <= 0) {
            return Observable.create(observer => observer.next('00:00:00'));
        }
        const sub = interval(1000)
            .pipe(
                map(val => {
                    const date = moment.duration(new Date(value).getTime() - new Date().getTime());
                    let hours: string | number = date.get('hours');
                    let mins: string | number = date.get('minutes');
                    let ss: string | number = date.get('seconds');
                    if (new Date(value).getTime() - new Date().getTime() <= 0) {
                        return `00:00:00`;
                    }
                    if (hours <= 10) {
                        hours = `0${hours}`;
                    }
                    if (hours <= 0) {
                        hours = `00`;
                    }
                    if (mins <= 10) {
                        mins = `0${mins}`;
                    }
                    if (mins <= 0) {
                        mins = `00`;
                    }
                    if (ss <= 10) {
                        ss = `0${ss}`;
                    }
                    if (ss <= 0) {
                        ss = `00`;
                    }
                    return `${hours}:${mins}:${ss}`;
                }),
                takeWhile(val => val !== '00:00:00')
            );
        return sub;
    }

}
