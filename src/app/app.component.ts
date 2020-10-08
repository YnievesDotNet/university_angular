import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto01';
  name = new FormControl('');

  EnviarDatos(){
    alert('Nombre: ' + this.name.value)
  }
}
