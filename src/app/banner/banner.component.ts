import { Component } from "@angular/core";

@Component({
    selector: 'app-banner',
    templateUrl: 'banner.component.html'
})

export class BannerComponent {
    title: string = 'Welcome 2023';
    text: string = 'Application created for educational purposes ';
}