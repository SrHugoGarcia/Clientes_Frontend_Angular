import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenido a Angular';
  curso: string = 'Curso spring 5 con angular';
  profesor: string = 'Victor Hugo';
}
