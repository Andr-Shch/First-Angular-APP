import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngA111pp+';
  jsonValue = {
    a: 'Hello',
    b: 'Pipe'
  }

  hendleEvrntor() {
    alert('keydown')
    
  }
}
