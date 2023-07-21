import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent {
    business: string = 'Victor Hugo Garcia Rodriguez';
    logo: string = 'https://www.pngrepo.com/png/333604/512/spring-boot.png';
}