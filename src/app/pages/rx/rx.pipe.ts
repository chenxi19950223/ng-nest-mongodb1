import { Pipe, PipeTransform } from '@angular/core';
import { interval, BehaviorSubject, Observable } from 'rxjs';

@Pipe({
    name: 'rx',
})
export class RxPipe implements PipeTransform {
    transform(value: Date, ...args: any[]): any {
        let startTime = new Date();
        const endTime = new Date(2020, 5, 19, 18, 11, 0);
        if (endTime > startTime) {
            return new Observable(observer => {
                setInterval(() => {
                    startTime = new Date();
                    const lefttime = endTime.getTime() - new Date(startTime).getTime(),  //距离结束时间的毫秒数
                        leftd = Math.floor(lefttime / (1000 * 60 * 60 * 24)),  //计算天数
                        lefth = Math.floor(lefttime / (1000 * 60 * 60) % 24),  //计算小时数
                        leftm = Math.floor(lefttime / (1000 * 60) % 60),  //计算分钟数
                        lefts = Math.floor(lefttime / 1000 % 60);  //计算秒数
                    observer.next(leftd + '天' + lefth + ':' + leftm + ':' + lefts);
                }, 1);
            });
        } else if (endTime <= startTime) {
            return 0 + '天' + 0 + ':' + 0 + ':' + 0;
        }

    }

}
