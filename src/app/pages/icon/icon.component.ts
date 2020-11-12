import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
    src = '../../../assets/environmental.svg';

    constructor() {
    }

    ngOnInit(): void {
    }

}
