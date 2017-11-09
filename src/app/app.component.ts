import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:
  `
  <div>
    <h1>Hello {{name}}</h1>
    <p>By Anas Koussi -- My Branch </p>
  </div> 
  `,
})
export class AppComponent  { name = 'Word'; }
