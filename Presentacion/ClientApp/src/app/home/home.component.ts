import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showMovilidad:boolean= false;
  showCongresos:boolean = false;
  showTalleres:boolean = false;
  showSeminarios:boolean = false;
}
