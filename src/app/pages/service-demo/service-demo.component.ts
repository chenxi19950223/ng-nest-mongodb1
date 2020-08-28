import {Component, OnInit, SkipSelf, OnDestroy, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import {FormGroup, FormBuilder, NgControl} from '@angular/forms';

import {interval, Observable, of, Subscribable, Subscription} from 'rxjs';
import {map} from 'rxjs/operators';

import {SelfService} from './services/self.service';

import * as moment from 'moment';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss'],
})
export class ServiceDemoComponent implements OnInit, OnDestroy, AfterViewInit {
  form: FormGroup;
  date: Date = new Date('2020-8-11 12:15:00');
  time: Date = new Date();
  a: boolean;

  @ViewChild('box', {static: true}) box: ElementRef<HTMLDivElement>;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      name: ''
    });
    this.a = false;
  }

  add(): void {
    this.form.setValue({name: 'sadf'});
  }

  ngOnInit(): void {
      this.add();
  }


  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {
    console.log(this.box.nativeElement.clientWidth);
    setTimeout(() => console.log(this.box.nativeElement.clientWidth), 0);
  }

}
