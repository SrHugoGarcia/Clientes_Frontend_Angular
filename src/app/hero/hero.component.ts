import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  title: string = 'Client creation project';
  description: string = 'The project consists of creating clients with angular and spring boot'
}
