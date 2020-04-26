import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  showSeminarios:boolean=false;
  showTalleres:boolean=false;
  showCongresos:boolean=false;
  showMovilidad:boolean=false;

}
